import React, { Fragment } from "react";
import "./profilePageStyles.css";
import HeaderTop from "../HeaderTop/HeaderTop";
import Navbar from "../Navbar/Navbar";
import PageTitle from "../pagetitle/PageTitle";
import PartnersSection from "../PartnersSection/PartnersSection";
import BlogSection from "../BlogSection/BlogSection";
import Footer from "../footer/Footer";
import Scrollbar from "../scrollbar/scrollbar";
import Logo from '../../images/logo.svg'
import { USER_EMAIL, USER_NAME } from "../../LocalStorage/LocalStorageNames";

function ProfilePage() {
const userName = localStorage.getItem(USER_NAME);
const userEmail = localStorage.getItem(USER_EMAIL);
  return (
    <Fragment>
            <HeaderTop />
            <Navbar hclass={'wpo-site-header'} Logo={Logo} />
            <PageTitle pageTitle={'Profile'} pagesub={'Profile'} />
            <div className="profile-wrapper">
      <div className="sidebar">
        <ul>
          <li>Profile</li>
          <li>Orders</li>
          <li>Wishlist</li>
          <li>Addresses</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="profile-content">
        <h2 className="profile-heading">Your Account</h2>
        <div className="profile-card">
          <img
            src="https://via.placeholder.com/150"
            alt="User Profile"
            className="profile-image"
          />
          <div className="profile-details">
            <h3 className="profile-name">{userName}</h3>
            <p className="profile-email">{userEmail}</p>
            <p className="profile-address">123 Main St, City, Country</p>
            <button className="edit-btn">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
            
            <Footer/>
            <Scrollbar/>
        </Fragment>
    
  );
}

export default ProfilePage;
