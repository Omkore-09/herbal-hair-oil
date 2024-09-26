// src/pages/Home.jsx
import React from "react";
import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import CarouselMulti from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faLeaf, faShieldAlt, faTruck } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./home.css"; 
import Products from "./Products";

const Home = () => (
  <div>
    <Carousel interval={1000} controls={false} indicators={true} fade={true}>
            <Carousel.Item>
                <img className="d-block w-100 carousel-image" src="about.jpg" alt="First slide" />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 carousel-image" src="slide2.jpg" alt="Second slide" />
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 carousel-image" src="slide3.jpg" alt="Third slide" />
                {/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>

        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <img src="about.jpg" alt="About Us" className="img-fluid" />
                </Col>
                <Col md={6}>
                    <h2>About Us</h2>
                    <p>Information about the company...</p>
                    <Button variant="primary" href="/about">Read More</Button>
                </Col>
            </Row>
        </Container>

        <Products />

        <Container className="my-5">
            <h2>Our Services</h2>
            <Row>
                <Col md={3} className="text-center">
                    <FontAwesomeIcon icon={faCheckCircle} size="3x" className="service-icon" />
                    <h4>100% Genuine</h4>
                </Col>
                <Col md={3} className="text-center">
                    <FontAwesomeIcon icon={faLeaf} size="3x" className="service-icon" />
                    <h4>Chemical Free</h4>
                </Col>
                <Col md={3} className="text-center">
                    <FontAwesomeIcon icon={faShieldAlt} size="3x" className="service-icon" />
                    <h4>Quality Assured</h4>
                </Col>
                <Col md={3} className="text-center">
                    <FontAwesomeIcon icon={faTruck} size="3x" className="service-icon" />
                    <h4>Fast Delivery</h4>
                </Col>
            </Row>
        </Container>

        <Container className="my-5 mt-5">
            <h2 >Customer Reviews</h2>
            <CarouselMulti
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <Card>
                    <Card.Body>
                        <Card.Text>"Great product! Highly recommend."</Card.Text>
                        <ReactStars count={5} size={24} activeColor="#ffd700" value={5} />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Text>"Amazing quality and fast delivery."</Card.Text>
                        <ReactStars count={5} size={24} activeColor="#ffd700" value={4} />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Text>"Very satisfied with the results."</Card.Text>
                        <ReactStars count={5} size={24} activeColor="#ffd700" value={5} />
                    </Card.Body>
                </Card>
            </CarouselMulti>
        </Container>

        <Container className="my-5 mb-5">
            <h2>Customer Video Reviews</h2>
            <CarouselMulti
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <Card className="mb-5">
                    <Card.Body>
                        <video width="100%" controls>
                            <source src="v1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <video width="100%" controls>
                            <source src="v1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <video width="100%" controls>
                            <source src="v1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Card.Body>
                </Card>
            </CarouselMulti>
        </Container>

    {/* before after  */}


    <Container className="my-5">
            <h2>Before and After Results</h2>
            <CarouselMulti
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1,
                        partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <Card>
                    <Card.Img variant="top" src="befor.jpg" alt="Before and After 1" />
                    <Card.Body>
                        <Card.Title>Customer 1</Card.Title>
                        <Card.Text>Before and after using our herbal hair oil.</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="befor.jpg" alt="Before and After 2" />
                    <Card.Body>
                        <Card.Title>Customer 2</Card.Title>
                        <Card.Text>Before and after using our herbal hair oil.</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="befor.jpg" alt="Before and After 3" />
                    <Card.Body>
                        <Card.Title>Customer 3</Card.Title>
                        <Card.Text>Before and after using our herbal hair oil.</Card.Text>
                    </Card.Body>
                </Card>
            </CarouselMulti>
        </Container>

        <a
            href="https://wa.me/yourphonenumber?text=Hello!%20I%20am%20interested%20in%20your%20herbal%20hair%20oil."
            className="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faWhatsapp} size="3x" className="whatsapp-icon" />
        </a>
    </div>
);

export default Home;
