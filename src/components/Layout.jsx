// src/components/Layout.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './layout.css'; 

const Layout = ({ children }) => (
    <div className="layout">
        {children}
        <a href="https://wa.me/9370662771" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        </a>
    </div>
);

export default Layout;
