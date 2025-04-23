import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { NavLink } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home style 1',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home-2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home-3'
            },
          
          
        ]
    },
    {
        id: 88,
        title: 'About',
        link: '/about',
    },
    {
        id: 3,
        title: 'Pages',
        link: '#',
        submenu: [
            {
                id: 31,
                title: 'Services',
                link: '/services',
            },
            {
                id: 32,
                title: 'Services single',
                link: '/service-single/Agriculture-Products',
            },
            {
                id: 33,
                title: 'Team',
                link: '/team',
            },
            {
                id: 34,
                title: 'Testimonial',
                link: '/testimonial',
            },
            {
                id: 35,
                title: 'Login',
                link: '/login',
            },
            {
                id: 35,
                title: '404 Error',
                link: '/404',
            },
        ]
    },
  
    {
        id: 44,
        title: 'Shop',
        link: '#',
        submenu: [
            {
                id: 41,
                title: 'Shop',
                link: '/shop',
            },
            {
                id: 42,
                title: 'Shop Single',
                link: '/shop-single/Fresh-key-Lime'
            },
            {
                id: 43,
                title: 'Cart',
                link: '/cart'
            },
            {
                id: 45,
                title: 'Checkout',
                link: '/checkout'
            },
        ]
    },
    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left-sidebar'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/Why-Industry-Are-A-Juicy-Target-For'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/Why-Industry-Are-A-Juicy-Target-For'
            },
            {
                id: 56,
                title: 'Blog single Left sidebar',
                link: '/blog-single-fullwidth/Why-Industry-Are-A-Juicy-Target-For'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]


const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <NavLink onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</NavLink>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <NavLink className="active"
                                        to={item.link}>{item.title}</NavLink>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;