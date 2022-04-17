import React from 'react';
import './Service.css';
import {useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToService = id => {
        navigate('/service/' + id);
    }

    return (
        <>
            <div className="col-md-6">
                <article className="service-item" style={{backgroundImage: `url(${img})`}}>
                    <div className="before"></div>
                    <div className="service-item-content">
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <Button onClick={() => navigateToService(id)} className='service-btn' variant='link'>
                            Book Now
                        </Button>
                    </div>
                </article>
            </div>
        </>
    );
};

export default Service;