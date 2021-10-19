import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsItem = ({ item }) => {
    const { id, title, img, description } = item;
    return (
        <Col>
            <Card className="h-100 border-0 p-2 service-card">
                <Card.Img variant="top" src={img} />
                <Card.Body className="px-0 text-center">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Description: {description.slice(0, 150)}</Card.Text>

                    <Link to={`/news/${id}`}>
                        <Button className="service-btn mx-auto" variant="outline-info">Read More</Button>
                    </Link>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default NewsItem;