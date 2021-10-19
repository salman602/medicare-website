import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDoctors from '../../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors] = useDoctors([]);
    return (
        <div className="my-4" id="doctors">
            <Container>
                <h3 className="text-center">Meet Our Doctors</h3>
                <Row xs={2} md={4} className="gx-5 gy-4 mt-2">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor?.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;