import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Benefits = () => (
    <Container className="mt-5">
        <h2 className="text-center mb-4">Benefits of Using Herbal Oils</h2>
        <Row>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Promotes Hair Growth</Card.Title>
                        <Card.Text>
                            Herbal oils like rosemary and peppermint are known to stimulate hair follicles, promoting hair growth and preventing hair loss.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Reduces Dandruff</Card.Title>
                        <Card.Text>
                            Oils such as tea tree and neem have antifungal properties that help reduce dandruff and soothe an itchy scalp.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Strengthens Hair</Card.Title>
                        <Card.Text>
                            Herbal oils like coconut and argan oil are rich in vitamins and fatty acids that strengthen hair, making it less prone to breakage.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Improves Scalp Health</Card.Title>
                        <Card.Text>
                            Oils such as lavender and chamomile help improve scalp health by reducing inflammation and promoting relaxation.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Natural Shine</Card.Title>
                        <Card.Text>
                            Herbal oils add a natural shine to your hair, making it look healthy and vibrant without the use of synthetic products.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>Moisturizes Hair</Card.Title>
                        <Card.Text>
                            Oils like jojoba and almond oil provide deep hydration to your hair, keeping it moisturized and preventing dryness.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default Benefits;
