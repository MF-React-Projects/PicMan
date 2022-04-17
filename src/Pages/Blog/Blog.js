import React from 'react';
import {Container} from "react-bootstrap";

const Blog = () => {
    return (
        <div style={{padding: '80px 0'}}>
            <Container>
                <h1 className='text-center mb-4'>Questions</h1>
                <h3>1. Difference between authorization and authentication</h3>
                <p>
                    <b>Authorization</b> is the process of granting a user access to a resource. <b>Authentication</b> is the process of verifying a user's identity. <b>Authorization</b> is a higher level of authentication than <b>authentication</b>.
                </p>
            </Container>
        </div>
    );
};

export default Blog;