import React, { useState } from "react";
import './Header.css';
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import { MdClose } from "react-icons/md";

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const handleMenuOpen = () => {
        setMenuToggle(true);
    };
    const handleMenuClose = () => {
        setMenuToggle(false);
    };

    return (
        <header className="ic-header-area">
            <div
                onClick={handleMenuClose}
                className={`ic-mobile-menu-overlay ${menuToggle && `active`}`}
            ></div>
            <Container>
                <div className="ic-header-warper">
                    <div className="ic-header-logo">
                        <div className="ic-logo">
                            <NavLink to="/">
                                <img src={logo} className="img-fluid" alt="logo" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="ic-header-menu-area">
                        <nav
                            className={`ic-navbar ic-mobile-menu-warper ${
                                menuToggle && `menu-toggle-active`
                            }`}
                        >
                            <div className="ic-mobile-menu-close">
                                <a
                                    href="#menu-close"
                                    onClick={handleMenuClose}
                                    className="ic-menu-close"
                                >
                                    <MdClose />
                                </a>
                            </div>
                            <ul className="ic-navbar-nav">
                                <li className="ic-nav-item">
                                    <NavLink
                                        className="ic-nav-link"
                                        to="/products"
                                        activeClassName="active"
                                    >
                                        Products
                                    </NavLink>
                                </li>
                                <li className="ic-nav-item">
                                    <NavLink className="ic-nav-link" to="/themes">
                                        Themes
                                    </NavLink>
                                </li>
                                <li className="ic-nav-item">
                                    <NavLink className="ic-nav-link" to="/plugins">
                                        Plugins
                                    </NavLink>
                                </li>
                                <li className="ic-nav-item">
                                    <NavLink className="ic-nav-link" to="/about-us">
                                        about us
                                    </NavLink>
                                </li>
                                <li className="ic-nav-item">
                                    <NavLink className="ic-nav-link" to="/learn">
                                        Learn
                                    </NavLink>
                                </li>
                                <li className="ic-nav-item">
                                    <NavLink className="ic-nav-link" to="/forum">
                                        Forum
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="ic-header-login-signup">
                        <ul>
                            <li>
                                <NavLink to="/login" className="login ic-btn">
                                    Log in
                                </NavLink>
                            </li>
                        </ul>
                        <div className="ic-mobile-menu-icon">
                            <a
                                href="#menu"
                                onClick={handleMenuOpen}
                                className="ic-mobile-menu-open"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
