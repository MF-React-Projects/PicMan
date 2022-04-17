import React, {useEffect, useState} from 'react';
import './Services.css';
import Service from "../Service/Service";
import {Container, Row} from "react-bootstrap";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <>
            <section className="service-section" id="services">
                <Container>

                    <div className="section-header text-center">
                        <h6 className="badge">Showcase your works</h6>
                        <h3 className="section-title font-36">Check my works</h3>
                        <p>Be ready to use the next generation of WordPress themes. Be ready to met Essentials by pixfort.</p>
                    </div>

                    <Row className='g-0'>
                        {
                            services.map(service => (
                                <Service key={service.id} service={service}/>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;