import React from 'react';
// import google from '../../../images/social/google.png';
// import facebook from '../../../images/social/facebook.png';
// import github from '../../../images/social/github.png';
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
            <div className="ic-social-signup">
                <h4>Or Login With</h4>
                <ul>
                    <li>
                        <a href=""><i className="flaticon-facebook"></i>Facebook</a>
                    </li>
                    <li>
                        <a href="" className="social-google"><i
                            className="flaticon-google-symbol"></i>Google</a>
                    </li>
                </ul>
                <p>Don't Have An Account? Please, <a href="signup.html">Create Account</a> Here</p>
            </div>
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

                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto'>
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;