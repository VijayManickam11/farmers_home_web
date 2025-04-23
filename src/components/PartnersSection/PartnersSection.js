import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import Item1 from '../../images/partner/1.png'
import Item2 from '../../images/partner/2.png'
import Item3 from '../../images/partner/3.png'
import Item4 from '../../images/partner/4.png'
import Item5 from '../../images/partner/5.png'

/* image */
const PartnersSection = () => {
    const settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1000,
        dots:false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            },

        ]
    };
    return (
        <section className="orico-partners-section">
            <h2 className="d-none">hidden</h2>
            <div className="container">
                <div className="partner-wrap">
                    <div className="partners-slider">
                        <Slider {...settings}>
                            <div className="partner-item">
                                <img src={Item1} alt="" />
                            </div>
                            <div className="partner-item">
                                <img src={Item2} alt="" />
                            </div>
                            <div className="partner-item">
                                <img src={Item3} alt="" />
                            </div>
                            <div className="partner-item">
                                <img src={Item4} alt="" />
                            </div>
                            <div className="partner-item">
                                <img src={Item5} alt="" />
                            </div>
                            <div className="partner-item">
                                <img src={Item5} alt="" />
                            </div>
                            <div className="partner-item">
                                <img src={Item3} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;