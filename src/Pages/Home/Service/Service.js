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

        </>
    );
};

export default Service;