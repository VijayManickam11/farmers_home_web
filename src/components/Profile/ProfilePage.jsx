import React, { Fragment, useEffect, useState } from "react";
import "./profilePageStyles.css";
import HeaderTop from "../HeaderTop/HeaderTop";
import Navbar from "../Navbar/Navbar";
import PageTitle from "../pagetitle/PageTitle";
import PartnersSection from "../PartnersSection/PartnersSection";
import BlogSection from "../BlogSection/BlogSection";
import Footer from "../footer/Footer";
import Scrollbar from "../scrollbar/scrollbar";
import Logo from '../../images/logo.svg'
import { USER_EMAIL, USER_NAME, USER_UID } from "../../LocalStorage/LocalStorageNames";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";

function ProfilePage() {

  const { setIsLoggedIn } = useUser();

  const navigate = useNavigate();

const userEmail = localStorage.getItem(USER_EMAIL);
const [userName, setUserName] = useState("");

useEffect(() => {    
    const storedUsername = localStorage.getItem(USER_NAME);
    if (storedUsername) {
      setUserName(storedUsername);
    }
  }, []);

const handleLogout = () => {

  localStorage.removeItem("token");
  localStorage.setItem("isLoggedIn", "false");
  localStorage.removeItem(USER_NAME);
  localStorage.removeItem(USER_EMAIL);
  localStorage.removeItem(USER_UID); 

  setIsLoggedIn(false);
    

  const removedToken = localStorage.getItem("token");

  if (!removedToken) {
    console.log("Token removed. Logout successful.");
  } else {
    console.log("Token still present:", removedToken);
  }

  navigate("/");
};

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
            <button className="edit-btn" onClick={handleLogout}>Logout</button>
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
