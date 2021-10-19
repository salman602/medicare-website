import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './SignUp.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const SignUp = () => {
    const { handleDisplayName, handleEmail, handlePassword, handleSignUp } = useAuth();
    return (
        <div className="signup-section pt-2">
            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <img className="mb-4 d-block mx-auto" src={logo} alt="" width="60" height="60" />
                    <Form>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                onBlur={handleDisplayName}
                                id="floatingInputName"
                                type="text"
                                placeholder="Full name" />
                            <label htmlFor="floatingInputName">Full Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control
                                onBlur={handleEmail}
                                id="floatingInputCustom"
                                type="email"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom">Email address</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                                onBlur={handlePassword}
                                id="floatingPasswordCustom"
                                type="password"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPasswordCustom">Password</label>
                        </Form.Floating>
                        <Button onClick={handleSignUp} className="w-100 mt-3" variant="danger" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className="text-center text-danger mt-3">Already Have an Account? Please Login
                        <NavLink
                            className="text-danger text-decoration-none"
                            to="/login"
                        > <span className="text-decoration-underline">here</span></NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;