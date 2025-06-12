// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-text">Feito com muito amor para você minha Deusa ❤️</p>
      <p className="footer-copyright">&copy; {currentYear} Davi e Carol.</p>
    </footer>
  );
}

export default Footer;