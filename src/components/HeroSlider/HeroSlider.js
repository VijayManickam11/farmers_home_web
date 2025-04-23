import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-4.jpg'
import Shape from '../../images/slider/shape-1.png'
import Shape2 from '../../images/slider/shape-2.png'
import Shape3 from '../../images/slider/shape-3.png'
import Shape4 from '../../images/slider/shape-4.png'
import Shape5 from '../../images/slider/shape-5.png'

const HeroSlider = () => {
    return (
        <section className="wpo-hero-slider" >
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-sub-title">
                                    <p>“<span>100% PURE VEGETABLES</span>”</p>
                                </div>
                                <div className="slide-title">
                                    <h2>Organic Food <span>And</span> Vegetabls.</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Lorem Ipsum has been the industry's standard text since the printer took
                                        galley make.</p>
                                </div>
                                <div className="slide-btns">
                                    <Link to="/about" className="theme-btn">Explore more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="shape s1"><img src={Shape} alt=""/></div>
                        <div className="shape s2"><img src={Shape2} alt=""/></div>
                        <div className="shape s3"><img src={Shape3} alt=""/></div>
                        <div className="shape s4"><img src={Shape4} alt=""/></div>
                        <div className="shape s5"><img src={Shape5} alt=""/></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-sub-title">
                                    <p>“<span>100% PURE VEGETABLES</span>”</p>
                                </div>
                                <div className="slide-title">
                                    <h2>Organic Food <span>And</span> Vegetabls.</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Lorem Ipsum has been the industry's standard text since the printer took
                                        galley make.</p>
                                </div>
                                <div className="slide-btns">
                                    <Link to="/about" className="theme-btn">Explore more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="shape s1"><img src={Shape} alt=""/></div>
                        <div className="shape s2"><img src={Shape2} alt=""/></div>
                        <div className="shape s3"><img src={Shape3} alt=""/></div>
                        <div className="shape s4"><img src={Shape4} alt=""/></div>
                        <div className="shape s5"><img src={Shape5} alt=""/></div>
                    </div>
                </SwiperSlide>
               
                ...
            </Swiper>
        </section>
    );
};

export default HeroSlider;