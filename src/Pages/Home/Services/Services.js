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
                        <h6 className="badge">My Best Services</h6>
                        <h3 className="section-title font-36">Check my services</h3>
                        <p>Boost your business with my best services. I have a lot of experience in
                            different fields and I'm always ready to help you.</p>
                    </div>

                    <Row className='g-0'>
                        {
                            services.map((service, index) => (
                                <Service key={service.id} index={index} service={service}/>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;