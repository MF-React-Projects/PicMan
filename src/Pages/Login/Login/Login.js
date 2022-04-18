import React, { useRef } from 'react';

const Login = () => {

    return (
        <div className='container w-50 mx-auto'>
            <div className="ic-login-content">
                <h2><span>Login</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut consequat elit. Mauris ut arcu rhoncus, commodo tellus sed, </p>
                <form action="">
                    <div className="form-group">
                        <input name="username" type="text" placeholder="Enter username or email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input name="password" type="password" placeholder="Enter Password" className="form-control"/>
                    </div>
                    <div className="form-group mb-20">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" id="accept-terms" name="accept-terms" className="custom-control-input"/>
                                    <label className="custom-control-label" htmlFor="accept-terms">Remember Me</label>
                                </div>
                            </div>
                            <div className="col-lg-6 text-right">
                                <a href="">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn-default btn-rounded w-100 mb-40">Login my Account</button>
                    <div className="ic-social-signup">
                        <h4>Or Login With</h4>
                        <ul>
                            <li>
                                <a href=""><i className="flaticon-facebook"></i>Facebook</a>
                            </li>
                            <li>
                                <a href="" className="social-google"><i className="flaticon-google-symbol"></i>Google</a>
                            </li>
                        </ul>
                        <p>Don't Have An Account? Please, <a href="signup.html">Create Account</a> Here</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;