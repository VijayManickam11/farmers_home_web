import React from 'react';
import CountUp from 'react-countup';

import Fa1 from '../../images/funfact/s1.png'
import Fa2 from '../../images/funfact/s2.png'
import FaIcon1 from '../../images/funfact/1.svg'
import FaIcon2 from '../../images/funfact/2.svg'
import FaIcon3 from '../../images/funfact/3.svg'
import FaIcon4 from '../../images/funfact/4.svg'

const FunFact = (props) => {

    return (
        <section className={"" + props.hclass}>
            <div className="f-shape-1"><img src={Fa1} alt=""/></div>
            <div className="f-shape-2"><img src={Fa2} alt=""/></div>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="orico-fun-fact-grids clearfix">
                            <div className="grid">
                                <div className="info">
                                    <h3><CountUp end={58} enableScrollSpy />M</h3>
                                    <p>Trusted By Customers</p>
                                    <div className="icon">
                                        <img src={FaIcon1} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><CountUp end={48} enableScrollSpy />.<CountUp end={6} enableScrollSpy />k</h3>
                                    <p>Product Sale Per Day</p>
                                    <div className="icon">
                                        <img src={FaIcon2} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><CountUp end={39} enableScrollSpy />Y</h3>
                                    <p>Years Of Foundation</p>
                                    <div className="icon">
                                        <img src={FaIcon3} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><CountUp end={86} enableScrollSpy />.<CountUp end={4} enableScrollSpy />M</h3>
                                    <p>Monthly Product Order</p>
                                    <div className="icon">
                                        <img src={FaIcon4} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    )

}

export default FunFact;