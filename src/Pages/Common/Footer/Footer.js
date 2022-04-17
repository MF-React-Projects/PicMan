import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import {Col, Container, Row} from "react-bootstrap";
import {FaPhone} from "@react-icons/all-files/fa/FaPhone";
import {FaMapMarkerAlt} from "@react-icons/all-files/fa/FaMapMarkerAlt";
import {FaEnvelope} from "@react-icons/all-files/fa/FaEnvelope";
import {Link} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from 'firebase/auth';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    const [user] = useAuthState(auth);

    return (
        <footer className='footer'>
            <div className="footer-top">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="footer-about">
                                <img src={logo} alt="logo" className="footer-logo mb-4"/>
                                <p>
                                    I am a Photographer from new york, i love to capture the moments and share them with
                                    you. I travel the world and capture the moments that i love. Wildlife, nature,
                                    architecture, food, and people are my favorite subjects.
                                </p>
                            </div>
                        </Col>
                        <Col md={{span: 3, offset: 2}}>
                            <div className="footer-contact">
                                <h4 className='footer-title'>Contact Me</h4>
                                <p>
                                    <FaMapMarkerAlt className="me-2"/>
                                    <span>Brooklyn, New York, USA</span>
                                </p>
                                <p>
                                    <FaPhone className='me-2'/>
                                    <span>+1 (212) 555-5555</span>
                                </p>
                                <p>
                                    <FaEnvelope className={'me-2'}/>
                                    <span>
                                    admin@demo.com
                                </span>
                                </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-links">
                                <h4 className='footer-title'>Quick Links</h4>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/checkout">Checkout</Link>
                                    </li>
                                    {
                                        user ?
                                            <li>
                                                <button onClick={() => signOut()} className='btn btn-link'>Logout</button>
                                            </li>
                                            :
                                            <>
                                                <li>
                                                    <Link to="/login">Login</Link>
                                                </li>
                                            </>
                                    }

                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer-copyright">
                <Container>
                    <Row>
                        <Col md={6}>
                            <p>Copyright © {year} All rights reserved.</p>
                        </Col>
                        <Col md={6} className="text-right">
                            <p className='text-right'>
                                Design & Developed by <strong>Mehedi Foysal</strong>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;