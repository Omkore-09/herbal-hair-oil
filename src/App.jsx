// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products.jsx';
import Contact from './pages/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Benefits from './pages/Benifits';
import Ingredients from './pages/Ingredients';
import ProductDetail from './pages/ProductDetail';

const App = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/benifits" element={<Benefits />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/product/:id" element={<ProductDetail />} />
             
        </Routes>


        <Footer />

        <a href="https://wa.me/9370662771" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        </a>
    </Router>
);

export default App;
