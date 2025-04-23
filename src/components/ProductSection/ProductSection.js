import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import SectionTitle from '../SectionTitle/SectionTitle';
import api from "../../api";
import { addToCart } from "../../store/actions/action";
import PopupQuickview from '../PopupQuickview/PopupQuickview';

import Shape1 from '../../images/product/shape-1.png';
import Shape2 from '../../images/product/shape-2.png';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProductSection = ({ addToCart }) => {
    const [filter, setFilter] = useState('*');
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseClick = () => {
        setSelectedProduct(null);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const productsArray = await api();
            setProducts(productsArray);
        };
        fetchProducts();
    }, []);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const filteredProducts = products.filter((product) =>
        filter === '*' || (product.category && product.category.includes(filter.slice(1)))
    );

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    return (
        <section className="orico-product-section section-padding">
            <div className="p-shape-1"><img src={Shape1} alt="" /></div>
            <div className="p-shape-2"><img src={Shape2} alt="" /></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <SectionTitle subtitle={'BEST PRODUCT'} title={'Latest Products'} />
                    </div>
                </div>
                <div className="product-wrap">
                    <div className="row">
                        <div className="col col-xs-12 sortable-gallery">
                            <div className="gallery-filters">
                                <ul className="product-filter-btn">
                                    <li>
                                        <button className={`product-btn ${filter === '*' ? 'current' : ''}`} onClick={() => handleFilterChange('*')}>
                                            all
                                        </button>
                                    </li>
                                    <li>
                                        <button className={`product-btn ${filter === '.fruit' ? 'current' : ''}`} onClick={() => handleFilterChange('.fruit')}>
                                            fruits
                                        </button>
                                    </li>
                                    <li>
                                        <button className={`product-btn ${filter === '.vegetables' ? 'current' : ''}`} onClick={() => handleFilterChange('.vegetables')}>
                                            vegetables
                                        </button>
                                    </li>
                                    <li>
                                        <button className={`product-btn ${filter === '.milk' ? 'current' : ''}`} onClick={() => handleFilterChange('.milk')}>
                                            milk & cream
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="gallery-container gallery-fancybox masonry-gallery row">
                                {filteredProducts.length > 0 &&
                                    filteredProducts.slice(0, 8).map((product, index) => (
                                        <div key={index} className={`col-lg-3 col-md-6 col-12 custom-grid ${product.category}`}>
                                            <div className="orico-product-single">
                                                <div className="orico-product-item">
                                                    <div className="orico-product-img">
                                                        <img src={product.proImg} alt={product.title} />
                                                    </div>
                                                </div>
                                                <div className="orico-product-text">
                                                    <h2><Link onClick={ClickHandler} to={`/shop-single/${product.slug}`}>{product.title}</Link></h2>
                                                    <div className="product-price">
                                                        <ul>
                                                            <li>${product.delPrice}</li>
                                                            {product.delPrice && <li>${product.price}</li>}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="orico-product-text-hide">
                                                    <ul className="orico-product-link">
                                                        <li><a href="#"><i className="fi ti-heart"></i></a></li>
                                                        <li><button onClick={() => addToCartProduct(product)}>
                                                                <i className="fi flaticon-shopping-cart"
                                                                aria-hidden="true"></i></button>
                                                        </li>
                                                        <li>
                                                            <button onClick={() => handleProductClick(product)}><i className="fi ti-eye"></i></button>
                                                        </li>
                                                    </ul>
                                                    <h2><Link onClick={ClickHandler} to={`/shop-single/${product.slug}`}>{product.title}</Link></h2>
                                                    <div className="product-price">
                                                        <ul>
                                                            <li>${product.delPrice}</li>
                                                            {product.delPrice && <li>${product.price}</li>}
                                                        </ul>
                                                    </div>
                                                    <button onClick={() => addToCartProduct(product)} className="cart-btn">Add to Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PopupQuickview product={selectedProduct} handleCloseClick={handleCloseClick}/>
        </section>
    );
};

export default connect(null, { addToCart })(ProductSection);
