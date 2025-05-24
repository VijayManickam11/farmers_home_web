import React, { Fragment, useEffect, useState } from "react";

import HeaderTop from "../../components/HeaderTop/HeaderTop";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";


import Logo from '../../images/logo.svg'
import { USER_EMAIL, USER_NAME, USER_UID } from "../../LocalStorage/LocalStorageNames";
import { useNavigate } from "react-router-dom";
import MyOrdersLisiting from "./orderPage";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

function OrdersPageMain() {


  return (
    <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Orders-Listing'} pagesub={'Orders-Listing'} />
            <MyOrdersLisiting/>            
            <Footer/>
            <Scrollbar/>
        </Fragment>
    
  );
}

export default OrdersPageMain;
