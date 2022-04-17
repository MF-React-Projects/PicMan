import React, {useEffect, useState} from 'react';
import './Banner.css';
import bannerImg from '../../../images/banner/1.jpg';
import Button from "../../Common/Button/Button";
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
            <div className="banner-section" id="home">
                <div className="overlay"></div>
                <div className="banner-background-image" style={{backgroundImage: `url(${bannerImg})`}}></div>

                <div className="project_list_wrap">
                    <Container>
                        <div className="inner_wrap">

                            <div className="left_box">
                                <h4>{title}</h4>
                                <h3>{name}</h3>
                                <h5>{description}</h5>
                                <Button link={'#services'} text={button} btnClass={'mt-5'} secondary/>
                            </div>

                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Banner;