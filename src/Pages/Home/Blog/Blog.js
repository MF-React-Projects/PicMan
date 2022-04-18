import React from 'react';
import './Blog.css';
import {Col} from "react-bootstrap";

const Blog = ({blog}) => {
    const {title, thumbnail, date, tags} = blog;
    return (
        <Col lg={4}>
            <div className="blog-item">
                <div className="blog-thumb">
                    <img src={thumbnail} alt="blog-thumb" className='img-fluid'/>
                    <div className="post-date">{date}</div>
                </div>
                <div className="blog-content">
                    <ul className="post-meta list-unstyled">
                        <li>
                            {tags.map((tag, index) => {
                                return (
                                    <span>{tag}</span>
                                )
                            })}
                        </li>
                        <li>5 Comments</li>
                    </ul>
                    <h4 className="blog-title">{title}</h4>
                </div>
            </div>
        </Col>
    );
};

export default Blog;