import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => (
    <Container>
        <Row>
            <Col>
                <h1 className="text-center">About Us</h1>
                <p>
                    Welcome to Nature’s Essence, where we blend the wisdom of ancient herbal traditions with modern science to bring you the finest herbal hair oils. Our journey began with a simple belief: nature holds the key to healthy, beautiful hair.
                </p>
                <br />
                <p><b>Our Story</b></p>
                <p>Founded in the heart of Maharashtra, Nature’s Essence was born out of a passion for natural wellness. Our founders, inspired by age-old Ayurvedic practices, set out to create hair care solutions that are not only effective but also free from harmful chemicals. Each bottle of our herbal hair oil is crafted with love, using the purest ingredients sourced from sustainable farms.</p>
                <br />
                <p><b>Our Mission</b></p>
                <p>At Nature’s Essence, our mission is to provide you with hair care products that nourish, protect, and rejuvenate your hair. We are committed to using only the highest quality herbs and oils, ensuring that every drop delivers the natural goodness your hair deserves. Our products are designed to address a variety of hair concerns, from dryness and dandruff to hair fall and thinning.</p>
            </Col>
        </Row>
        <Row className="mt-5">
            <Col>
                <h2 className="text-center mb-4">Our Branches</h2>
                <Row>
                    <Col md={6}>
                        <h4>Branch Name: Nature's Essence Store</h4>
                        <p>Address: 123 Herbal Street, Karvir, Maharashtra, India</p>
                        <p>Phone: +91 12345 67890</p>
                    </Col>
                    <Col md={6}>
                        <a href="https://www.google.com/maps/place/123+Herbal+Street,+Karvir,+Maharashtra,+India" target="_blank" rel="noopener noreferrer">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9630579153167!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6b1a1b1b1!2s123+Herbal+Street%2C+Karvir%2C+Maharashtra%2C+India!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
                        </a>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
);

export default About;
