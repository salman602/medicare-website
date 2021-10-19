import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';
import './ServiceDetail.css'

const ServiceDetail = () => {
    const [singleService, setSingleService] = useState({});
    const { serviceId } = useParams();
    const [services] = useServices();
    // console.log(services);

    useEffect(() => {
        const filteredService = services.filter(service => service?.id === serviceId);
        setSingleService(filteredService[0])
    }, [services, serviceId]);

    console.log(singleService);
    // const { name, img, description, price } = singleService;
    return (
        <div className="service-detail-section">
            <Container className="py-4">
                <Row className="p-3 service-detail">
                    <Col xs={8} md={6}>
                        <img className="img-fluid" src={singleService?.img} alt="" />
                    </Col>
                    <Col xs={4} md={6}>
                        <h3>Name: {singleService?.name}</h3>
                        <h4>Price: ${singleService?.price}</h4>
                        <p>Description: {singleService?.description}</p>
                        <h5>Destination: {singleService?.destination}</h5>
                        <Button variant="info">Book Appointment</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetail;