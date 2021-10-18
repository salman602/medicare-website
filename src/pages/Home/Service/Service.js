import React from 'react';
import './Service.css'
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, price, description, button_text } = service;
    return (
        <Col>
            <Card className="h-100 border-0 p-2 service-card">
                <Card.Img variant="top" src={img} />
                <Card.Body className="px-0">
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2">Price: ${price}</Card.Subtitle>
                    <Card.Text>
                        {description.slice(0, 62)}
                    </Card.Text>
                    <Link to={`/service/${id}`}>
                        <Button className="service-btn mx-auto" variant="outline-danger">{button_text}</Button>
                    </Link>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default Service;