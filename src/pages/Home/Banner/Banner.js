import React from 'react';
import { Carousel, Col, Container, Row, Button } from 'react-bootstrap';
import banner1 from '../../../assets/banner/banner-1.png';
import banner2 from '../../../assets/banner/banner-2.png';
import banner3 from '../../../assets/banner/banner-3.png';
import banner4 from '../../../assets/banner/banner-4.png';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Container>
                            <Row>

                                <Col xs={12} sm={11} md={8}>
                                    <h2>What Makes us Better, Makes you Better</h2>
                                    <p className="text-dark">Best is an endpoint; a place where improvement tends to slow. That’s why Medi Care strives to be better.</p>
                                    <Button variant="danger" className="btn text-white rounded-2 me-2">Our Departments</Button>
                                    <Button variant="info" className="btn text-black rounded-2 ms-2">Our Doctors</Button>
                                </Col>
                                <Col sm={1} md={4}></Col>
                            </Row>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <Container>
                            <Row>
                                <Col sm={1} md={4}></Col>
                                <Col xs={12} sm={11} md={8}>
                                    <h2>What Makes us Better, Makes you Better</h2>
                                    <p>Best is an endpoint; a place where improvement tends to slow. That’s why Medi Care strives to be better.</p>
                                    <Button variant="danger" className="btn text-white rounded-2 me-2">Our Departments</Button>
                                    <Button variant="info" className="btn text-black rounded-2 ms-2">Our Doctors</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;