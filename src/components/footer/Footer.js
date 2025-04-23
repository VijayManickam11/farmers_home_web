import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TopShape from '../../images/ft-bg.png'
import logo from '../../images/footer-logo.svg'
import FtShape1 from '../../images/ft-shape-1.png'
import FtShape2 from '../../images/ft-shape-2.png'
import Btnicon from '../../images/pointer.svg'



const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setError('');
            console.log('Email is valid:', email);
        } else {
            setError('Please enter a valid email address.');
        }
    };

    const { FooterShape = true } = props

    return (
        <div className={'' + props.hclass}>
            {FooterShape && (
                <div className="footer-shape">
                    <img src={TopShape} alt="" />
                </div>
            )}
            <footer className="wpo-site-footer" >
                <div className="wpo-upper-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget about-widget">
                                    <div className="logo widget-title">
                                        <img src={logo} alt="blog" />
                                    </div>
                                    <p>It was popularised in the 1960s with the
                                        release of Letraset sheets containing Lorem
                                        passages and more recently with desktop
                                        publishing software like including.</p>
                                    <div className="social-widget">
                                        <ul>
                                            <li><Link onClick={ClickHandler} to="#"><i className="ti-facebook" aria-hidden="true"></i></Link></li>
                                            <li><Link onClick={ClickHandler} to="#"><i className="ti-twitter" aria-hidden="true"></i></Link></li>
                                            <li><Link onClick={ClickHandler} to="#"><i className="ti-skype" aria-hidden="true"></i></Link></li>
                                            <li><Link onClick={ClickHandler} to="#"><i className="ti-linkedin" aria-hidden="true"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                        <li><Link onClick={ClickHandler} to="/blog">Newsroom </Link></li>
                                        <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
                                        <li><Link onClick={ClickHandler} to="/product">Product</Link></li>
                                        <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget wpo-contact-widget">
                                    <div className="widget-title">
                                        <h3>Contact</h3>
                                    </div>
                                    <div className="contact-ft">
                                        <ul>
                                            <li><i className="fi flaticon-placeholder"></i>7 Green Lake Street Crawfordsville,
                                                IN 47933
                                            </li>
                                            <li><i className="fi flaticon-phone-call"></i>+1 800 123 456 789</li>
                                            <li><i className="fi flaticon-email"></i>Organtio@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="widget newsletter-widget">
                                    <div className="widget-title">
                                        <h3>Newsletter</h3>
                                    </div>
                                    <p>You will be notified when somthing new will be appear.</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="input-1">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email Address *"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
                                        <div className="submit clearfix">
                                            <button type="submit">
                                                <i>
                                                    <img src={Btnicon} alt="Submit" />
                                                </i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-lower-footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12  col-12">
                                <p className="copyright">Copyright &copy;<span>2024</span>
                                    <span className="copyright-icon">|</span> All Rights Reserved.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-12  col-12">
                                <p className="link"><Link onClick={ClickHandler} to="/blog">Term and Service</Link> <span>||</span> <a
                                    href="blog">Privacy Policy</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ft-shape-1"><img src={FtShape1} alt="" /></div>
                <div className="ft-shape-2"><img src={FtShape2} alt="" /></div>
            </footer>
        </div>
    )
}

export default Footer;







