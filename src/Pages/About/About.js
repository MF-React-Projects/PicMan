import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import myPhoto from "../../images/about/my-pic.jpg";

const About = () => {
    return (
        <div className='about-section'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="about-thumb">
                            <img src={myPhoto} alt="my-photo"/>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-content">
                            <h3>About Me</h3>
                            <h2>Hi, I'm <br/>Mehedi Hasan</h2>
                            <p>
                                I'm a Full Stack WordPress Developer. I Developed so many themes and plugins since 2016. I love doing this job and I work with passion.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;