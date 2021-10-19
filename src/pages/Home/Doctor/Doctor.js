import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { id, name, designation, img } = doctor;
    return (
        <Col>
            <Card className="h-100 border-0 p-2 service-card">
                <Card.Img variant="top" src={img} />

                <Card.Body className="px-0 text-center">
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2">{designation}</Card.Subtitle>

                    <Link to={`/doctor/${id}`}>
                        <Button className="service-btn mx-auto" variant="outline-danger">More Details</Button>
                    </Link>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default Doctor;