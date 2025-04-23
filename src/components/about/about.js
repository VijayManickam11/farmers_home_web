import React from 'react';
import { Link } from 'react-router-dom';


// image
import Ab from '../../images/about/ab.jpg'
import Abd1 from '../../images/about/1.png'
import Abd2 from '../../images/about/4.png'
import Abd3 from '../../images/about/5.png'
import Abd4 from '../../images/about/3.png'
import sine from '../../images/about/2.png'

const about = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12 col-12">
                        <div className="orico-about-wrap">
                            <div className="orico-about-img">
                                <div className="mask">
                                    <img src={Ab} alt=""/>
                                </div>
                                <div className="orico-ab-logo">
                                    <img src={Abd1} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-12">
                        <div className="orico-about-text-wrap">
                            <div className="orico-about-text">
                                <span>“<span>ABOUT US</span>”</span>
                                <h2>Our connection with organic fruits and vegetables.</h2>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the own printer
                                    took a galley of type and scrambled it to make a type specimen book. It has survived
                                    not only five centuries. </p>
                                <ul>
                                    <li><i><img src={Abd2} alt=""/></i> It has survived not only
                                        five centuries the leap into.</li>
                                    <li><i><img src={Abd3} alt=""/></i> It has survived not only
                                        five centuries the leap into.</li>
                                </ul>
                                <Link onClick={ClickHandler} className="theme-btn-s2" to="/about">Get In Touch</Link>
                            </div>
                            <div className="ab-onion-shape"><img src={Abd4} alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ab-shape"><img src={sine} alt=""/></div>
        </section>
    );
};

export default about;