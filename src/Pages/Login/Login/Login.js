import React, {useRef} from 'react';
import './Login.css';
import {Container, Row, Form, Col, Button} from 'react-bootstrap';
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Common/Loading/Loading";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate(from, {replace: true});
    }

    if (loading || sending) {
        return <Loading/>
    }

    const navigateRegister = () => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Email sent to reset password", {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            toast('please enter your email address');
        }
    }

    //redirect user to previous page
    let from = location.state?.from?.pathname || "/";

    return (
        <div className="login-wrapper">
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={6}>
                        <div className="ic-login-content">
                            <h2 className='text-center font-bold'><span>Login</span></h2>
                            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut consequat elit. Mauris ut
                                arcu rhoncus, commodo tellus sed, </p>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button className='btn-primary' type="submit">Login</Button>
                                <br/>
                                <Button variant='link' className='text-primary text-decoration-none px-0' onClick={resetPassword}>Forget Password?</Button>

                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;