import React, { Fragment } from 'react';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo.svg'
import Whishlist from '../../components/WishlistPageSection/whishlist';



const WhishListPage = () => {





    return (
        <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'WhishList'} pagesub={'WhishList'} />
            <Whishlist/>
            <Footer FooterShape={false} />
            <Scrollbar />
        </Fragment>
    )
};

export default WhishListPage;