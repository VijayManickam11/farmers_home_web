import React, { Fragment } from 'react';
import HeaderTopS2 from '../../components/HeaderTopS2/HeaderTopS2';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Hero2 from '../../components/hero2/Hero2';
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

const HomePage2 = () => {
    return (
        <Fragment>
            <HeaderTopS2 />
            <NavbarS2 hclass={'wpo-header-style-2'} Logo={Logo} />
            <Hero2 />
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
        </Fragment>
    )
};
export default HomePage2;