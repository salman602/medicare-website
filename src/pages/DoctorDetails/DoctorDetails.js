import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useDoctors from '../../hooks/useDoctors';

const DoctorDetails = () => {
    const [singleDoctor, setSingleDoctor] = useState({});
    const { doctorId } = useParams();
    const [doctors] = useDoctors();

    useEffect(() => {
        const filteredService = doctors.filter(doctor => doctor?.id === doctorId);
        setSingleDoctor(filteredService[0])
    }, [doctors, doctorId]);

    console.log(singleDoctor);
    return (
        <div className="bg-light">
            <Container className="py-4">
                <Row className="p-3 service-detail">
                    <Col xs={1} md={2}></Col>
                    <Col xs={10} md={8}>
                        <Row>
                            <Col xs={4} md={6}>
                                <img className="img-fluid" src={singleDoctor?.img} alt="" />
                            </Col>
                            <Col xs={8} md={6}>
                                <h3>{singleDoctor?.name}</h3>
                                <h4>{singleDoctor?.university}</h4>
                                <h5>Specialist: {singleDoctor?.designation}</h5>
                                <p><b>About:</b> {singleDoctor?.about}</p>
                                <h5>Visit in: {singleDoctor?.room_No}</h5>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs={1} md={2}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default DoctorDetails;