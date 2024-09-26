import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
    <Navbar expand="lg" className="sticky-top" style={{ backgroundColor: '#4CAF50' }}> {/* Herbal green color */}
        <Navbar.Brand href="/">Hair Oil</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/benifits">Product Benifits</Nav.Link>
                <Nav.Link href="/ingredients">Ingredients</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;
