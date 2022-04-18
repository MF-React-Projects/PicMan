import React from 'react';
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Blogs from "../Blogs/Blogs";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Blogs/>
        </div>
    );
};

export default Home;