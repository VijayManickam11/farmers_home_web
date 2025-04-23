import React from 'react';
import { Link } from 'react-router-dom';
import HeroIm1 from '../../images/slider/hero-s2.jpg';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero2 = () => {
    return (
        <div className="orico-hero-2">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-5 col-lg-5 offset-lg-7 col-12">
                        <div className="hero-section-text">
                            <h2>100% Pure Vegetables</h2>
                            <h3>GET 100% OGRANIC FOOD</h3>
                            <p>The best organic food is grown without synthetic chemicals, nurturing soil health and
                                animal
                                welfare. It's fresher, tastier, and support.</p>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/about" className="btn theme-btn">Explore More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-img" style={{ backgroundImage: `url(${HeroIm1})` }}></div>
        </div>
    );
};

export default Hero2;



