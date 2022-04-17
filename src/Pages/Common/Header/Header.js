import React from 'react';
import './Header.css';
import {Container, Nav} from "react-bootstrap";
import logo from '../../../images/logo.png';
import {Link} from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {

    return (
        <>
            <header className="pm-header-area">
                <div className="pm-mobile-menu-overlay"/>
                <Container>
                    <div className="pm-header-menu-wrapper">
                        <div className="pm-header-logo">
                            <Link to="index.php" className="pm-logo">
                                <img src={logo} className="img-fluid" alt="logo"/>
                            </Link>
                        </div>
                        <div className="pm-header-middle">
                            <Nav className="pm-navbar pm-mobile-menu-wrapper">
                                <div className="pm-mobile-logo-close">
                                    <img src={logo} className="img-fluid" alt="logo"/>
                                    <a href="#" className="pm-menu-close">
                                        <i className="ri-close-line"></i>
                                    </a>
                                </div>
                                <ul className="pm-navbar-nav ">
                                    <li className="pm-nav-item">
                                        <Link to='/' className="pm-nav-link">Home</Link>
                                    </li>
                                    <li className="pm-nav-item">
                                        <Link to='/about' className="pm-nav-link">About</Link>
                                    </li>
                                </ul>
                            </Nav>
                            <div className="pm-mobile-menu-icon">
                                <div className="pm-mobile-menu-open">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="pm-header-right">
                            <Button link={'/login'} text={'Login'}/>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Header;