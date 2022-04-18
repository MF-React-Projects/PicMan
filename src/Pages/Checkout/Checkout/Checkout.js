import React from 'react';
import './Checkout.css';
import {useParams} from "react-router-dom";
import {useForm} from 'react-hook-form';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const Checkout = () => {
    const {serviceId} = useParams();
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div className='checkout-section'>
            <Container>
                <h2 className='text-center mb-5'>Please Checkout your booking</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="First Name" {...register("First Name", {required: true, maxLength: 100})}/>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Last Name" {...register("Last Name", {required: true, maxLength: 100})}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}/>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Phone" {...register("Phone", {required: true, maxLength: 100})}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* Selected service */}
                    <Form.Group className="mb-3" controlId="formService">
                        <Form.Label>Service</Form.Label>
                        <select className='form-control' {...register("Services", {required: true})}>
                            <option value={serviceId}>{serviceId}</option>
                        </select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Address" {...register("Address", {required: true, maxLength: 100})}/>
                    </Form.Group>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formCountry">
                                <Form.Label>Country</Form.Label>
                                <Form.Control type="text" placeholder="Country" {...register("Country", {required: true, maxLength: 100})}/>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control type="text" placeholder="Zip" {...register("Zip", {required: true, maxLength: 100})}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button className='btn-default btnSm mb-3' type="submit">Login</Button>
                </Form>
            </Container>
        </div>
    );
};

export default Checkout;