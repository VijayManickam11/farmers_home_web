import React, { Fragment, useEffect, useState } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar'
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import OricoFeatures from '../../components/OricoFeatures/OricoFeatures';
import About from '../../components/about/about';
import FunFact from '../../components/FunFact/FunFact';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import OfferSection from '../../components/OfferSection/OfferSection';
import ProductSection from '../../components/ProductSection/ProductSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'
import SignUpModal from '../SignUpPage';

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000); // 3 minutes = 180000 ms

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <div className="orico-hero-wrap">
                <HeroSlider />
                <OricoFeatures />
            </div>
            <About hclass={'orico-about-section section-padding'} />
            <FunFact hclass={'orico-fun-fact-section'} />
            <ServiceSection hclass={"service_section section-padding"} />
            <OfferSection />
            <ProductSection />
            <TeamSection />
            <PartnersSection />
            <Testimonial />
            <BlogSection />
            <Footer hclass={'footer-section'} />
            <Scrollbar />
            <SignUpModal open={showModal} onClose={() => setShowModal(false)} />
            
        </Fragment>
    )
};
export default HomePage;