import React from 'react';
import './About.css';
import {Col, Container, Row} from "react-bootstrap";
import myPhoto from "../../images/about/my-pic.jpg";

const About = () => {
    return (
        <div className='about-section'>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={5}>
                        <div className="about-thumb">
                            <img src={myPhoto} className='img-fluid' alt="my-photo"/>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className="about-content">
                            <h3 className='about-label'>About Me</h3>
                            <h2 className='about-title'>Hi, I'm <br/><span>Mehedi Hasan</span></h2>
                            <p className='mb-4'>
                                I'm a Full Stack WordPress Developer. I Developed so many themes and plugins since 2016. I love doing this job and I work with passion. My mission is to become a Full Stack Web Developer. Whereas currently I've experience in Full Stack WordPress Development. In 2022 I want to be a kickass Web Developer, So I hope I can reach my goal quickly.
                            </p>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;