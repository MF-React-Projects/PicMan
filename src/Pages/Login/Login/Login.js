import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Common/Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
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

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    if(user){
        navigate(from, { replace: true });
    }

    if(loading || sending) {
        return <Loading />
    }

    const navigateRegister = () =>{
        navigate('/register');
    }

    const resetPassword = async () =>{
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Email sent to reset password", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else{
            toast('please enter your email address');
        }
    }

    //redirect user to previous page
    let from = location.state?.from?.pathname || "/";

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Genius Car? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <SocialLogin/>
            <ToastContainer />
        </div>
    );
};

export default Login;