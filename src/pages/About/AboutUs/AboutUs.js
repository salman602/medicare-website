import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="py-4">
            <Container>
                <div>
                    <h4 className="text-danger">CARING: We Do the Kind Thing</h4>
                    <p>Every Medicare staff member touches the lives of the patients and families in our care. We treat those we serve and each other with kindness and compassion and strive to better understand and respond to the needs of a diverse community.</p>
                </div>
                <div>
                    <h4 className="text-danger">EXCELLENCE: We Do the Best Thing</h4>
                    <p>At Medicare, only the best will do. We work as a team to bring experience, advanced technology and best practices to provide the highest-quality care for our patients and families. We devote ourselves to continuous improvement, excellence, professionalism and innovation in our work.</p>
                </div>
                <div>
                    <h4 className="text-danger">INTEGRITY: We Do the Right Thing</h4>
                    <p>Our actions tell the world what Medicare is and what we stand for. We act ethically and responsibly in everything we do and hold ourselves accountable for our behavior. We bring respect, openness and honesty to our encounters with patients, families and co-workers and support the well-being of the communities we serve.</p>
                </div>
                <div>
                    <h4 className="text-danger">SAFETY: We Do the Safe Thing</h4>
                    <p>Patients and families have placed their lives and health in our hands. At Medicare our first priority - the rule of medicine - is to protect them from harm. We believe that maintaining the highest safety standard is critical to delivering high-quality care and that a safe workplace protects us all.</p>
                </div>
                <hr />
                <Row>
                    <Col xs={10} md={4}>
                        <h5 className="text-danger">Address</h5>
                        <p>House# 16, Road# 16 Old 27/ Genetic Palaza Dhanmondi, Dhaka, 1209</p>
                        <p><b>Cell:</b> 123-456-789</p>
                        <p><b>Email:</b> info@medicare.com</p>
                        <p><b>Website:</b> https://www.medicare.com</p>
                    </Col>
                    <Col xs={10} md={8}>
                        <div>
                            <iframe title="medicare" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.826239367134!2d90.36769211941065!3d23.748928444167614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfa6f9bb28db%3A0xcfa3bd3579e51a32!2sHospital%2027%20Plus!5e0!3m2!1sen!2sbd!4v1634642623584!5m2!1sen!2sbd" width="600" height="320" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutUs;