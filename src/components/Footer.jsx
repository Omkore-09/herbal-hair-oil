// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './footer.css'; 

const Footer = () => (
    <footer className="footer">
        <Container>
            <Row>
                <Col md={4} className="footer-col">
                    <h4>Contact Us</h4>
                    <ul className="contact-info">
                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Herbal St, Green City, IN
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} /> +91 12345 67890
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} /> info@herbalhairoil.com
                        </li>
                    </ul>
                </Col>
                <Col md={4} className="footer-col">
                    <h4>Quick Links</h4>
                    <ul className="quick-links">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </Col>
                <Col md={4} className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <p>© 2024 Herbal Hair Oil. All Rights Reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;
