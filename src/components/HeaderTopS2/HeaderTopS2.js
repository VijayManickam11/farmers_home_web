import React from 'react';
import { Link } from 'react-router-dom';


const HeaderTopS2 = () => {
    return (
        <div className="wpo-header-style-2">
            <div className="topbar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-12">
                            <div className="contyact-info-wrap">
                                <div className="contact-info">
                                    <div className="icon">
                                        <i className="fi flaticon-phone-call"></i>
                                    </div>
                                    <div className="info-text">
                                        <p>00 567 458 796 47</p>
                                    </div>
                                </div>
                                <div className="contact-info">
                                    <div className="icon">
                                        <i className="fi flaticon-email"></i>
                                    </div>
                                    <div className="info-text">
                                        <p>infoorgco@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact-info">
                                    <div className="icon">
                                        <i className="fi flaticon-placeholder"></i>
                                    </div>
                                    <div className="info-text">
                                        <p>Nagata Kundo, 82-A, USA.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <ul className="social">
                                <li>Visit our social pages</li>
                                <li><Link to="#"><i className="ti-facebook"></i></Link></li>
                                <li><Link to="#"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link to="#"><i className="ti-linkedin"></i></Link></li>
                                <li><Link to="#"><i className="ti-pinterest"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopS2;