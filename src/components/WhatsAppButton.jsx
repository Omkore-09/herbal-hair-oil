import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/yourphonenumber?text=Hello!%20I%20am%20interested%20in%20your%20herbal%20hair%20oil."
    className="whatsapp_float"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={faWhatsapp} size="3x" className="whatsapp-icon" />
  </a>
);

export default WhatsAppButton;
