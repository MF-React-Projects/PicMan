import React from 'react';
import {Container} from "react-bootstrap";

const Blog = () => {
    return (
        <div style={{padding: '80px 0'}}>
            <Container>
                <h1 className='text-center mb-4'>Questions</h1>
                <h3>1. Difference between authorization and authentication?</h3>
                <table className='table table-bordered'>
                    <tbody>
                    <tr>
                        <td>Authorization</td>
                        <td>
                            <p>
                                <b>Authorization</b> is the process of granting a user access to a resource.
                                It is a process that involves the user providing a username and password.
                                The username and password are then compared to a list of authorized users.
                                If the user is authorized, the user is granted access to the resource.
                                If the user is not authorized, the user is denied access to the resource.
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>Authentication</td>
                        <td>
                            <p>
                                <b>Authentication</b> is the process of verifying a user's identity.

                                It is a process that involves the user providing a username and password.
                                The username and password are then compared to a list of authorized users.
                                If the user is authorized, the user is granted access to the resource.
                                If the user is not authorized, the user is denied access to the resource.
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Container>
        </div>
    );
};

export default Blog;