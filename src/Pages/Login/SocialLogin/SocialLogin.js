import React from 'react';
import './SocialLogin.css';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from "../../Common/Loading/Loading";
import {FaGoogle} from "@react-icons/all-files/fa/FaGoogle";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorMessage = '';
    if(error || githubError) {
        errorMessage = <p className='text-danger'>{error?.message || githubError?.message}</p>;
    }

    if(user || githubUser) {
        navigate('/');
    }

    if(loading || githubLoading) {
        return <Loading />
    }


    return (
            <div className="social-login">
                <h4>Or Login With</h4>
                {errorMessage}
                <ul>
                    <li>
                        <button onClick={() => signInWithGoogle()} className='social-google'>
                            <FaGoogle/>
                            <span className='px-2'>Google Sign In</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => signInWithGithub()} className='social-github'>
                            <FaGithub/>
                            <span className='px-2'>Github Sign In</span>
                        </button>
                    </li>
                </ul>
            </div>
    );
};

export default SocialLogin;