import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found-section">
            <NavLink className="d-flex justify-content-center align-items-center text-decoration-none" to="/home">
                <Button variant="info" className="">Go Home Page</Button>
            </NavLink>
        </div>
    );
};

export default NotFound;