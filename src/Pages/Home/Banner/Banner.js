import React, {useState} from 'react';
import './Banner.css';
import bannerImg from '../../../images/banner/1.jpg';
import downArrow from '../../../images/svg/down.svg';

const Banner = () => {

    return (
        <>
            <div className="picman_tm_hero" id="home">
                <div className="overlay"></div>

                <div className="gallery_list_wrap">
                    <div className="main_background_image" style={{backgroundImage: `url(${bannerImg})`}}></div>
                </div>

                <div className="project_list_wrap">
                    <div className="container">
                        <div className="inner_wrap">

                            <div className="left_box">
                                <h4>Hello, I'm</h4>
                                <h3>Peter Parker</h3>
                                <h5>A Photographer from New York</h5>
                                <div className="booking">
                                    <a href="#contact" className="button"><span>Book a Shoot</span></a>
                                    <a href="#plans" className="link">View Plans</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="picman_tm_down">
                    <a className="anchor" href="#about">
                        <img src={downArrow} alt="" className="svg"/>
                    </a>
                </div>

            </div>
        </>
    );
};

export default Banner;