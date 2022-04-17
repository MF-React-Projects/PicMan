import React from 'react';
import './Button.css';
import {Link} from "react-router-dom";

const Button = ({link, text, btnClass, secondary}) => {
    return (
        <>
            <Link to={link} className={`btn-primary ${secondary ? 'btn-secondary' : ''} ${btnClass}`}>{text}</Link>
        </>
    );
};

export default Button;