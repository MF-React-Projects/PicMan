import React from 'react';
import './Button.css';
import {Link} from "react-router-dom";

const Button = ({link, text}) => {
    return (
        <>
            <Link to={link} className="ic-btn-64 ic-btn">{text}</Link>
        </>
    );
};

export default Button;