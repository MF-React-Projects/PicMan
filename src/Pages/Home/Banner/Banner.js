import React, {useEffect, useState} from 'react';
import './Banner.css';
import bannerImg from '../../../images/banner/1.jpg';
import {Container} from "react-bootstrap";

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
                <div className="overlay"/>
                <div className="banner-background-image" style={{backgroundImage: `url(${bannerImg})`}}/>

                <div className="project_list_wrap">
                    <Container>
                        <div className="inner_wrap">
                            <div className="left_box">
                                <h4>{title}</h4>
                                <h3>{name}</h3>
                                <h5>{description}</h5>
                                <a href={'#services'} className='btn-default btn-secondary mt-5'>{button}</a>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    );
};

export default Banner;