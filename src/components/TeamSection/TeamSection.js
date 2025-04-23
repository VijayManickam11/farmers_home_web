import React from "react";
import { Link } from "react-router-dom";
import Teams from "../../api/team.js";
import SectionTitle from "../SectionTitle/SectionTitle";
import borderShape from '../../images/team/bg.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const TeamSection = (props) => {
    return (
        <section className="wpo-team-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SectionTitle subtitle={'AMAZING TEAM'} title={'OUR Team Member'} />
                    </div>
                </div>
                <div className="wpo-team-wrap">
                    <div className="row">
                        {Teams.map((Teamsitem, item) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={item}>
                                <div className="wpo-team-item">
                                    <div className="wpo-team-img">
                                        <img src={Teamsitem.simage} alt="" />
                                        <div className="wpo-team-text">
                                            <div className="text-inner">
                                                <h2>{Teamsitem.title}</h2>
                                                <span>{Teamsitem.Subtitle}</span>
                                                <div className="social-widget">
                                                    <ul>
                                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-facebook" aria-hidden="true"></i></Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-twitter" aria-hidden="true"></i></Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} to="#"><i className="ti-linkedin" aria-hidden="true"></i></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-shape">
                                        <img src={borderShape} alt="" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
export default TeamSection;


