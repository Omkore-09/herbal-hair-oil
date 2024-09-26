// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import './productDetail.css'; 

const products = [
    {
        id: 1,
        name: 'Herbal Hair Oil 1',
        price: '₹499',
        rating: 4,
        image: '/Images/product.jpg',
        description: 'A detailed description of Herbal Hair Oil 1.',
        ingredients: 'Ingredients of Herbal Hair Oil 1.',
        benefits: 'Benefits of Herbal Hair Oil 1.',
        reviews: [
            { user: 'User 1', comment: 'Great product!', rating: 5 },
            { user: 'User 2', comment: 'Very effective.', rating: 4 }
        ]
    },
    {
        id: 2,
        name: 'Herbal Hair Oil 2',
        price: '₹599',
        rating: 5,
        image: '/images/product2.jpg',
        description: 'A detailed description of Herbal Hair Oil 2.',
        ingredients: 'Ingredients of Herbal Hair Oil 2.',
        benefits: 'Benefits of Herbal Hair Oil 2.',
        reviews: [
            { user: 'User 3', comment: 'Amazing quality!', rating: 5 },
            { user: 'User 4', comment: 'Highly recommend.', rating: 5 }
        ]
    },
    {
        id: 3,
        name: 'Herbal Hair Oil 3',
        price: '₹699',
        rating: 3,
        image: '/images/product3.jpg',
        description: 'A detailed description of Herbal Hair Oil 3.',
        ingredients: 'Ingredients of Herbal Hair Oil 3.',
        benefits: 'Benefits of Herbal Hair Oil 3.',
        reviews: [
            { user: 'User 5', comment: 'Good product.', rating: 3 },
            { user: 'User 6', comment: 'Satisfactory.', rating: 3 }
        ]
    }
];

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <img src={product.image} alt={product.name} className="img-fluid product-image" />
                </Col>
                <Col md={6}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p><strong>Price: {product.price}</strong></p>
                    <p><strong>Ingredients:</strong> {product.ingredients}</p>
                    <p><strong>Benefits:</strong> {product.benefits}</p>
                    <ReactStars count={5} size={24} activeColor="#ffd700" value={product.rating} />
                    <Button variant="success" className="mt-3">Buy Now</Button>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <h3>Customer Reviews</h3>
                    {product.reviews.map((review, index) => (
                        <Card key={index} className="mb-3">
                            <Card.Body>
                                <Card.Title>{review.user}</Card.Title>
                                <Card.Text>{review.comment}</Card.Text>
                                <ReactStars count={5} size={24} activeColor="#ffd700" value={review.rating} />
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
