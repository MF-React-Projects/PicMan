import React from 'react';
import './Service.css';
import {useNavigate} from "react-router-dom";

const Service = ({service}) => {
    const {id, name, img, description, price} = service;
    const navigate = useNavigate();
    const navigateToService = id => {
        navigate('/service/' + id);
    }

    return (
        <>
            <div className="col-md-6">
                <article className="xg-portfolio-item-v2" style={{backgroundImage: `url(${img})`}}>
                    <div className="before"></div>
                    <div className="xg-portfolio-item-v2-content">
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <button onClick={() => navigateToService(id)} className="xg-portfolio-item-v2-link" href="#">
                            <span className="before"></span>
                            <i className="fa fa-angle-right"></i>
                            <span className="after"></span>
                        </button>
                    </div>
                </article>
            </div>
        </>
    );
};

export default Service;