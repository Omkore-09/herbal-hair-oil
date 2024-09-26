// src/pages/Products.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import './products.css'; 

const products = [
    {
        id: 1,
        name: 'Herbal Hair Oil 1',
        price: '₹499',
        rating: 4,
        image: 'product.jpg',
        description: 'A short description of Herbal Hair Oil 1.'
    },
    {
        id: 2,
        name: 'Herbal Hair Oil 2',
        price: '₹599',
        rating: 5,
        image: 'product.jpg',
        description: 'A short description of Herbal Hair Oil 2.'
    },
    {
        id: 3,
        name: 'Herbal Hair Oil 3',
        price: '₹699',
        rating: 3,
        image: 'product.jpg',
        description: 'A short description of Herbal Hair Oil 3.'
    }
];

const Products = () => (
    <Container className="my-5">
        <h2 className="text-center">Our Products</h2>
        <Row>
            {products.map(product => (
                <Col md={4} key={product.id} className="mb-4">
                    <Card className="card">
                        <Card.Img variant="top" src={product.image} className="product-image" />
                        <Card.Body className="card-body">
                            <Card.Title className="card-title">{product.name}</Card.Title>
                            <Card.Text className="card-text">{product.description}</Card.Text>
                            <Card.Text className="card-text"><strong>Price: {product.price}</strong></Card.Text>
                            <ReactStars count={5} size={24} activeColor="#ffd700" value={product.rating} />
                            <Button variant="primary" as={Link} to={`/product/${product.id}`}>View Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);

export default Products;
