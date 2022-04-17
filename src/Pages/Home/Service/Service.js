import React from 'react';
import './Service.css';
import {useNavigate} from "react-router-dom";
import {Button, Col} from "react-bootstrap";

const Service = ({service, index}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToService = id => {
        navigate('/service/' + id);
    }

    return (
        <>
            <Col md={6}>
                <article className={`service-item`} style={{backgroundImage: `url(${img})`}}>
                    <div className="service-item-content">
                        <h4>{name}</h4>
                        <h5 className="price">${price}</h5>
                        <p>{description}</p>
                        <Button
                            onClick={() => navigateToService(id)}
                            className='btn-default btn-white'>
                            Book Now
                        </Button>
                    </div>
                </article>
            </Col>
        </>
    );
};

export default Service;