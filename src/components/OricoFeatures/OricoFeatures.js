import React from 'react';
import Features from '../../api/features';



const OricoFeatures = () => {
    return (
        <div className="orico-features-section">
            <div className="container-fluid">
                <div className="row">
                    {Features.map((feature, item) => (
                        <div className="col col-lg-4 col-md-4 col-sm-6 col-12" key={item}>
                            <div className="features-item">
                                <div className="features-item-icon">
                                    <div className="icon">
                                        <img src={feature.Fimage} alt="" />
                                    </div>
                                </div>
                                <div className="orico-features-text">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OricoFeatures;