import React from 'react';
import './Services.css'
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    console.log(services);
    return (
        <div className="services-section my-4">
            <Container>
                <h3 className="text-center">
                    Medical Services
                </h3>
                <Row xs={2} sm={3} md={4} className="gx-5 gy-4 mt-2">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Services;