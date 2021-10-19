import React from 'react';
import { Form, Button, Container, Row, Col, Image } from 'react-bootstrap';
import fbIcon from '../../images/icons/facebook.png';
import googleIcon from '../../images/icons/google.png';
import twitterIcon from '../../images/icons/twitter.png';
import './Login.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, signInUsingEmailAndPassword } = useAuth();
    return (
        <div className="login-section pt-2">
            <div className="d-flex justify-content-center align-items-center">

                <div>
                    <img className="mb-4 d-block mx-auto" src={logo} alt="" width="60" height="60" />

                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPasswordCustom">Password</label>
                    </Form.Floating>

                    <Button onClick={signInUsingEmailAndPassword} className="w-100 mt-3" variant="danger" type="submit">
                        Login
                    </Button>
                    <p className="text-center text-danger mt-1">or Login using</p>
                    <Container>
                        <Row>
                            <Col xs={6} md={4}>
                                <button onClick={signInUsingGoogle} className="border-0 bg-transparent">
                                    <Image src={googleIcon} rounded width="40" height="40" />
                                </button>
                            </Col>
                            <Col xs={6} md={4}>
                                <button className="border-0 bg-transparent">
                                    <Image src={fbIcon} rounded width="40" height="40" />
                                </button>
                            </Col>
                            <Col xs={6} md={4}>
                                <button className="border-0 bg-transparent">
                                    <Image src={twitterIcon} rounded width="45" height="45" />
                                </button>
                            </Col>
                        </Row>
                    </Container>
                    <p className="text-center text-danger mt-3">Don't have an account? Please Sign up
                        <NavLink
                            className="text-danger text-decoration-none"
                            to="/signup"
                        > <span className="text-decoration-underline">here</span></NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;