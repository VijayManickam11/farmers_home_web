import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";
import Services from "../../api/Services";



const ServiceSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { SectionTitleShow=true } = props

    return (
        <div className="orico-service-section section-padding">
            <div className="container">
                {SectionTitleShow &&  (
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <SectionTitle subtitle={'BEST PRODUCT'} title={'LATEST PRODUCTS'} />
                    </div>
                </div>
                )}
                <div className="row">

                    {Services.map((service, item) => (
                        <div className="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12" key={item}>
                            <div className="service-item">
                                <div className="service-item-img">
                                    <img src={service.simage} alt="" />
                                </div>
                                <div className="orico-service-text">
                                    <div className="icon">
                                        <img src={service.icon} alt="" />
                                    </div>
                                    <h4>{service.title}</h4>
                                    <Link to={`/service-single/${service.slug}`} onClick={ClickHandler}><i className="ti-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;




