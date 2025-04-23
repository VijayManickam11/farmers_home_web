import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg'
import header1 from '../../images/header-shape1.png'
import header2 from '../../images/header-shape2.png'

const HeaderTop = () => {
    return (
        <div className="topbar">
            <div className="shape-1"><img src={header1} alt="" /></div>
            <div className="shape-2"><img src={header2} alt="" /></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-12 d-lg-block d-none">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="col-lg-9 col-12">
                        <div className="contyact-info-wrap">
                            <div className="contact-info">
                                <div className="icon">
                                    <i className="fi flaticon-phone-call"></i>
                                </div>
                                <div className="info-text">
                                    <span>Call Us:</span>
                                    <p>00 567 458 796 47</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="icon">
                                    <i className="fi flaticon-email"></i>
                                </div>
                                <div className="info-text">
                                    <span>E-mail Now:</span>
                                    <p>infoorgco@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <div className="icon">
                                    <i className="fi flaticon-placeholder"></i>
                                </div>
                                <div className="info-text">
                                    <span>Our Location:</span>
                                    <p>Nagata Kundo, 82-A, USA.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;