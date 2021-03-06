import React from 'react';
import './Header.css';
import {signOut} from 'firebase/auth';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../../images/logo.png';
import {Link} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };

    return (
        <>
            <header className="pm-header-area">
                <Navbar collapseOnSelect expand="lg" variant="light" className={'py-3'}>
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            <img src={logo} className="img-fluid" alt="logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto">
                                <CustomLink to="/">Home</CustomLink>
                                <CustomLink to="/about">About</CustomLink>
                                <CustomLink to="/checkout">Checkout</CustomLink>
                            </Nav>
                            <div className="pm-header-right">
                                {
                                    user ?
                                        <button className='btn-default btnSm' onClick={handleSignOut}>Logout</button>
                                        :
                                        <>
                                            <Link to={'/login'} className='btn-default btnSm'>Login</Link>
                                            <Link to={'/register'}
                                                  className='btn-default btn-secondary ms-3 btnSm'>Register</Link>
                                        </>
                                }
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;