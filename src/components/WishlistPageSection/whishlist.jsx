import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import api from "../../api";
import { addToCart } from "../../store/actions/action";
import PopupQuickview from "../PopupQuickview/PopupQuickview";
import AddProductController from "../../Controller/ProductController";
import CartController from "../../Controller/CartController";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useUser } from "../Context/UserContext";
import SignUpPage from "../../main-component/SignUpPage";
import WhishListController from "../../Controller/WhishListCintroller";
import { USER_UID } from "../../LocalStorage/LocalStorageNames";

const WhishListPageSection = ({ addToCart }) => {
  const userUid = localStorage.getItem(USER_UID);
  console.log(userUid,"userUid")
  const navigate = useNavigate();  
  const [shopeTab, setShopeTab] = useState(0); 
  const [showModal, setShowModal] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  

  useEffect(() => { 
    const fetchProducts = async () => {
     
      const response = await WhishListController.getViewWhishList(userUid);      

      const parseData = JSON.parse(response);

      console.log(parseData, "whishListData");

      let whishListData = parseData?.data?.wishlist?.products;

      

      if (parseData.status == "SUCCESS") {
        setProducts(whishListData);
      }
      
    };
    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseClick = () => {
    setSelectedProduct(null);
  };

  
  return (


    <div className="shop-section section-padding orico-product-section section-padding">


      <div className="container product-wrap">
        <div className="row">
          <div className="col-lg-12">
            <div className="shop-section-top-inner">
              <div className="shoping-list">
                <ul className="nav main-tab">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${shopeTab === 0 ? "active" : ""}`}
                      onClick={() => setShopeTab(0)}
                    >
                      <i className="fa fa-th"></i>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${shopeTab === 1 ? "active" : ""}`}
                      onClick={() => setShopeTab(1)}
                    >
                      <i className="fa fa-list"></i>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="shoping-product">
                <span>Showing Products 1 - 9 Of 13 Result</span>
              </div>
              <div className="short-by">
                <ul>
                  <li>Short By :</li>
                  <li>
                    <select name="show">
                      <option value="">Show 9 Items</option>
                      <option value="">Show 18 Items</option>
                      <option value="">Show 27 Items</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>

           
            
            <div className="tab-content">
              {shopeTab === 0 && (
                <div className="row">
                  {products?.length > 0 &&
                    products.slice(0, 8).map((product, pitem) => (
                      <div className="col-lg-3 col-md-6 col-12" key={pitem}>
                        <div className="orico-product-single">
                          <div className="orico-product-item">
                            <div className="orico-product-img">
                              <div
                                style={{
                                  height: "220px",
                                  borderRadius: "25px",
                                  overflow: "hidden",
                                }}
                              >
                                {product?.base64Image && (
                                  <img
                                    src={product?.base64Image || ""}
                                    alt={product.name}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="orico-product-text">
                            <h2>
                              <Link
                                onClick={ClickHandler}
                                to={`/shop-single/${product.slug}`}
                              >
                                {product.name}
                              </Link>
                            </h2>
                            <div className="product-price">
                              <ul>
                                <li>
                                  {product.discount_price
                                    ? `$${product.price}`
                                    : ""}
                                </li>
                                <li>
                                  ₹
                                  {product.discount_price
                                    ? product.discount_price
                                    : product.price}
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="orico-product-text-hide">
                            <ul className="orico-product-link">
                              <li>
                                <a href="#">
                                  <i className="fi ti-heart"></i>
                                </a>
                              </li>
                              <li>
                                <button
                                  // onClick={() => addToCartProduct(product)}
                                >
                                  <i
                                    className="fi flaticon-shopping-cart"
                                    aria-hidden="true"
                                  ></i>
                                </button>
                              </li>
                              <li>
                                <button
                                  onClick={() => handleProductClick(product)}
                                >
                                  <i className="fi ti-eye"></i>
                                </button>
                              </li>
                            </ul>
                            <h2>
                              <Link
                                onClick={ClickHandler}
                                to={`/shop-single/${product.slug}`}
                              >
                                {product.name}
                              </Link>
                            </h2>
                            <div className="product-price">
                              <ul>
                                <li>
                                  {product.discount_price
                                    ? `$${product.price}`
                                    : ""}
                                </li>
                                <li>
                                  ₹
                                  {product.discount_price
                                    ? product.discount_price
                                    : product.price}
                                </li>
                              </ul>
                            </div>
                            <a
                              data-bs-toggle="tooltip"
                              data-bs-html="true"
                              title="Add to Cart"
                              // onClick={() => addToCartProduct(product)}
                              className="cart-btn"
                            >
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
              {shopeTab === 1 && (
                <div className="row product-list">
                  {products?.length > 0 &&
                    products.slice(0, 4).map((product, pitem) => (
                      <div className="col-12" key={pitem}>
                        <div className="orico-product-single">
                          <div className="orico-product-item">
                            <div className="orico-product-img">
                              <div
                                style={{
                                  height: "220px",
                                  borderRadius: "25px",
                                  overflow: "hidden",
                                }}
                              >
                                {product?.base64Image && (
                                  <img
                                    src={product?.base64Image || ""}
                                    alt={product.name}
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "cover",
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                            <div className="orico-product-text-hide">
                              <ul className="orico-product-link">
                                <li>
                                  <a href="#">
                                    <i className="fi ti-heart"></i>
                                  </a>
                                </li>
                                <li>
                                  <button
                                    // onClick={() => addToCartProduct(product)}
                                  >
                                    <i
                                      className="fi flaticon-shopping-cart"
                                      aria-hidden="true"
                                    ></i>
                                  </button>
                                </li>
                                <li>
                                  <button
                                    onClick={() => handleProductClick(product)}
                                  >
                                    <i className="fi ti-eye"></i>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="orico-product-text">
                            <h2>
                              <Link
                                onClick={ClickHandler}
                                to={`/shop-single/${product.slug}`}
                              >
                                {product.name}
                              </Link>
                            </h2>
                            <div className="product-price">
                              <ul>
                                <li>
                                  {product.discount_price
                                    ? `$${product.price}`
                                    : ""}
                                </li>
                                <li>
                                  $
                                  {product.discount_price
                                    ? product.discount_price
                                    : product.price}
                                </li>
                              </ul>
                            </div>
                            <p>
                              For a food to be classed as organic, at least 95 %
                              of its ingredients must have been produced using
                              organically farmed plants or animals. Organic food
                              farmers and producers must have their products
                              approved by a specific certifying body. This
                              certification body carries out regular inspections
                              on production methods, packaging, and labelling to
                              ensure that producers continue to meet strict
                              industry standards
                            </p>
                            <ul>
                              <li>Benefits of Eating Organic Food.</li>
                              <li>Reduced Risk of Heart Disease.</li>
                              <li>Improved human Immune System.</li>
                              <li>Reduction in Pesticide Consumption.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <PopupQuickview
        product={selectedProduct}
        handleCloseClick={handleCloseClick}
      />
       <SignUpPage open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default connect(null, { addToCart })(WhishListPageSection);
