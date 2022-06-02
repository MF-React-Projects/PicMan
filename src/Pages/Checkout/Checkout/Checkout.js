import React from 'react';
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
    console.log(serviceId)

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            username: user?.displayName,
            email: user?.email,
        }
    });
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
                                        <Form.Control type="text" placeholder="Username"{...register("username", {required: true, maxLength: 100})} readOnly/>
                                        <small className='text-danger'>
                                            {errors.username?.type === 'required' && "Username is required"}
                                        </small>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Email" {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid Email'
                                            }
                                        })} readOnly/>
                                        <small className="text-danger">
                                            {errors.email?.type === 'required' && errors.email.message}
                                            {errors.email?.type === 'pattern' && errors.email.message}
                                        </small>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Phone" {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone is Required'
                                    }
                                })}/>
                                <small className="text-danger">
                                    {errors.phone?.type === 'required' && errors.phone.message}
                                </small>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address" {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is Required'
                                    }
                                })}/>
                                <small className="text-danger">
                                    {errors.address?.type === 'required' && errors.address.message}
                                </small>
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