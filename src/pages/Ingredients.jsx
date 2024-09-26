import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ingredients = () => (
    <Container className="mt-5">
        <h2 className="text-center mb-4">Ingredients in Our Herbal Oil</h2>
        <Row className="mb-4">
            <Col>
                <img
                    src="slide2.jpg"
                    alt="Herbal Oil Ingredients"
                    className="img-fluid"
                    style={{ width: '100%', height: 'auto' }}
                />
            </Col>
        </Row>
        <Row>
            <Col md={4} sm={6} xs={12} className="mb-4">
                <Card>
                    <Card.Img variant="top" src="slide2.jpg" alt="Rosemary" />
                    <Card.Body>
                        <Card.Title>Rosemary</Card.Title>
                        <Card.Text>
                            Rosemary is known for its ability to stimulate hair growth and improve circulation to the scalp.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-4">
                <Card>
                    <Card.Img variant="top" src="slide2.jpg" alt="Peppermint" />
                    <Card.Body>
                        <Card.Title>Peppermint</Card.Title>
                        <Card.Text>
                            Peppermint oil has a cooling effect and helps to soothe an itchy scalp while promoting hair growth.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-4">
                <Card>
                    <Card.Img variant="top" src="slide2.jpg" alt="Tea Tree" />
                    <Card.Body>
                        <Card.Title>Tea Tree</Card.Title>
                        <Card.Text>
                            Tea tree oil has antifungal properties that help reduce dandruff and keep the scalp healthy.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col md={4} sm={6} xs={12} className="mb-4">
                <Card>
                    <Card.Img variant="top" src="slide2.jpg" alt="Coconut" />
                    <Card.Body>
                        <Card.Title>Coconut</Card.Title>
                        <Card.Text>
                            Coconut oil is rich in vitamins and fatty acids that nourish the scalp and strengthen hair.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-4">
                <Card>
                    <Card.Img variant="top" src="slide2.jpg" alt="Argan" />
                    <Card.Body>
                        <Card.Title>Argan</Card.Title>
                        <Card.Text>
                            Argan oil is known for its moisturizing properties and helps to add shine to your hair.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4} sm={6} xs={12} className="mb-4">
                <Card>
                    <Card.Img variant="top" src="slide2.jpg" alt="Lavender" />
                    <Card.Body>
                        <Card.Title>Lavender</Card.Title>
                        <Card.Text>
                            Lavender oil helps to improve scalp health by reducing inflammation and promoting relaxation.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Ingredients;
