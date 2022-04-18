import React, {useEffect, useState} from 'react';
import './Banner.css';
import bannerImg from '../../../images/banner/1.jpg';
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Banner = () => {
    const [banner, setBanner] = useState({});

    useEffect(() => {
        fetch('data/banner.json')
            .then(res => res.json())
            .then(data => setBanner(data))
    }, []);

    const {title, name, description, button} = banner;

    return (
        <>
            <section className="banner-section" id="home">
                <div className="overlay"></div>
                <div className="banner-background-image" style={{backgroundImage: `url(${bannerImg})`}}></div>

                <div className="project_list_wrap">
                    <Container>
                        <div className="inner_wrap">

                            <div className="left_box">
                                <h4>{title}</h4>
                                <h3>{name}</h3>
                                <h5>{description}</h5>
                                <Link to={'#services'} className='btn-default btn-secondary mt-5'>{button}</Link>
                            </div>

                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default Banner;