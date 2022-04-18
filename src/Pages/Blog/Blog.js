import React from 'react';
import './Blog.css';
import {Container} from "react-bootstrap";

const Blog = () => {
    return (
        <div className='blog-section'>
            <Container>
                <h1 className='text-center question-header'>Questions</h1>
                <h4 className='question-title'>1. Difference between authorization and authentication?</h4>
                <table className='table table-bordered mb-5'>
                    <tbody>
                    <tr>
                        <td>Authorization</td>
                        <td>
                            <p>
                                <b>Authorization</b> is the process of granting a user access to a resource. When a user successfully authenticates, the server can grant access to the user. Authorization is the process of determining whether a user is allowed to access some pertcular resource. For example, database access, file access, etc. Authorization usually comes after authentication.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Authentication</td>
                        <td>
                            <p>
                                <b>Authentication</b> is the process of verifying a user's identity. The system checks the user's credentials and grants access to the resource if the credentials are valid. If the credentials are invalid, the system denies access. There are two types of authentication: single sign-on (SSO) and two-factor authentication (2FA).
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <h4 className='question-title'>2. Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p className='mb-5'>
                    <b>Firebase</b> is a cloud-based platform that provides a simple, secure, and scalable way to build mobile and web apps. It is a free service that allows you to build and host your own web and mobile apps. It is a great option for building a web and mobile app. And for the authentication, it supports both email and phone authentication. And it supports social login. such as Google, Facebook, Twitter, GitHub, Apple, and Microsoft etc. And most importantly, it manages the data in a secure way and manage all data real-time in database. And it is free. That's why I choose firebase.
                </p>

                <h4 className='question-title'>3. What other services does firebase provide other than authentication?</h4>
                <p>
                    <b>Firebase</b> provides other services such as hosting, storage, database, cloud messaging, cloud functions, cloud firestore, google analytics, prediction, and many more. <b>Cloud messaging</b> is a service that allows you to send push notifications to your users. <b>Cloud functions</b> is a service that allows you to create server-side functions that can be triggered by events. <b>Cloud firestore</b> is a service that allows you to store and retrieve data in a NoSQL database. <b>Google analytics</b> is a service that allows you to track your users' behavior on your website. <b>Prediction</b> is a service that allows you to make machine learning models available to your users.
                </p>
            </Container>
        </div>
    );
};

export default Blog;