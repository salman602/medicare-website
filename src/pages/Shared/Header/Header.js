import React from 'react';
import logo from '../../../images/logo.png'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <Navbar sticky="top" className="py-0" collapseOnSelect expand="md" bg="white" variant="info">
            <Container>
                <Navbar.Brand className="d-flex justify-content-center align-items-center" href="/">
                    <img
                        src={logo}
                        width="60"
                        height="70"
                        className="d-inline-block align-top"
                        alt="Medical Care logo"
                    />
                    <span className="text-dark">Medi Care</span>
                </Navbar.Brand>
                <Navbar.Toggle style={{ color: 'black' }} aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <HashLink className="menu-item" to="/home">Home</HashLink>
                        <HashLink className="menu-item" to="/about">About</HashLink>
                        <HashLink className="menu-item" to="/home#services">Services</HashLink>
                        <HashLink className="menu-item" to="/home#doctors">Doctors</HashLink>
                        <HashLink className="menu-item" to="/home#news">News</HashLink>
                    </Nav>

                    <Nav>
                        <NavLink to="/signup" className="mx-2">
                            <Button className="btn btn-info bg-transparent rounded-pill">Sign up</Button>
                        </NavLink>
                        {user?.displayName ? <NavLink to="/login">
                            <Button onClick={logOut} className="btn btn-danger rounded-pill">Logout</Button>
                            <img className="rounded-circle ms-1"
                                src={user?.photoURL} alt="" width="40" height="40" />
                        </NavLink> : <NavLink to="/login">
                            <Button className="btn btn-danger rounded-pill">login</Button>
                        </NavLink>}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;