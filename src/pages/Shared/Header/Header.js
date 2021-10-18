import React from 'react';
import logo from '../../../images/logo.png'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="info">
            <Container>
                <Navbar.Brand className="d-flex justify-content-center align-items-center" href="#home">
                    <img
                        src={logo}
                        width="60"
                        height="70"
                        className="d-inline-block align-top"
                        alt="Medical Care logo"
                    />
                    <span className="text-dark">Medi Care</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <HashLink className="menu-item" to="/home">Home</HashLink>
                        <HashLink className="menu-item" to="/about#about">About</HashLink>
                        <HashLink className="menu-item" to="/services#services">Services</HashLink>
                        <HashLink className="menu-item" to="/doctors#doctors">Doctors</HashLink>
                        <HashLink className="menu-item" to="/news#news">News</HashLink>
                    </Nav>
                    <Nav>
                        <NavLink to="/signup" className="mx-2">
                            <Button className="btn btn-info bg-transparent rounded-pill">Sign up</Button>
                        </NavLink>
                        <NavLink to="/signup">
                            <Button className="btn btn-danger rounded-pill">Login</Button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;