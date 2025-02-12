'use client';

import { FooterContainer, ContactInfo, SocialLinks } from './Footer.styles';
import { FaInstagram, FaFacebook, FaPodcast, FaChalkboardTeacher } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <p>Contacto: +54 9 342 45-25658 | plataforma@iessantafe.edu.ar (soporte técnico)</p>
        <p>Dirección: Tucumán 2721 - (3000) Santa Fe, Argentina</p>
      </ContactInfo>
      <SocialLinks>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://radio-link.com" target="_blank" rel="noopener noreferrer">
          <FaPodcast />
        </a>
        <a href="https://aulavirtual.com" target="_blank" rel="noopener noreferrer">
          <FaChalkboardTeacher />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;