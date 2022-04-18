import React, {useEffect, useState} from 'react';
import './Blogs.css';
import {Container, Row} from "react-bootstrap";
import Blog from "../Blog/Blog";
import {useNavigate} from "react-router-dom";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('data/blogs.json')
            .then(response => response.json())
            .then(json => setBlogs(json))
    }, []);

    return (
        <section id="blog" className="home-blog-section">
            <Container>
                <div className="section-header text-center">
                    <h6 className="badge">News Feeds</h6>
                    <h3 className="section-title">Latest Blog</h3>
                </div>
                <Row className='mb-5'>
                    {
                        blogs.map(blog => <Blog key={blog.id} blog={blog}/>)
                    }
                </Row>
                <div className="text-center mt-4">
                    <button onClick={() => navigate('/blogs')} className="btn-default">View All Blog</button>
                </div>
            </Container>
        </section>
    );
};

export default Blogs;