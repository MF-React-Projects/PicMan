import React from 'react';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from "../../Common/Loading/Loading";

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
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'/>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'/>
            </div>
            {errorMessage}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;