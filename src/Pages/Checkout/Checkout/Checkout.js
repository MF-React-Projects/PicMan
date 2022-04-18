import React, {useEffect, useState} from 'react';
import './Checkout.css';
import {useParams} from "react-router-dom";
import {useForm} from 'react-hook-form';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const {serviceId} = useParams();
    const [user] = useAuthState(auth);

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => {
        toast.success('Thank you for the booking');

        //reset form
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    };

    return (
        <div className='checkout-section'>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8}>
                        <h2 className='text-center mb-5'>Please Checkout your booking</h2>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" value={user?.displayName} placeholder="Username" {...register("Username", {required: true, maxLength: 100})}/>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" value={user?.email} placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} readOnly/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Phone" {...register("Phone", {required: true, maxLength: 100})}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" {...register("Address", {required: true, maxLength: 100})}/>
                            </Form.Group>

                            <Button className='btn-default btnSm mb-3' type="submit">Checkout</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <ToastContainer/>
        </div>
    );
};

export default Checkout;