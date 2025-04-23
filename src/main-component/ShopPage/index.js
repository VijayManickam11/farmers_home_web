import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ShopPageSection from '../../components/ShopPageSection/ShopPageSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.svg'



const ShopPage = () => {





    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'} />
            <ShopPageSection/>
            <Footer FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};

export default ShopPage;