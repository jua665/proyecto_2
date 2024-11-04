import React from 'react';
import './css/footer.css';
import logo from '../imgs/logo.png'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Safe Helmet Logo" className="footer-logo-img" />
          <h2>Safe Helmet</h2>
          <p>Safe Helmet es un software que ayuda a mantener la seguridad de los ciclistas y prevenir accidentes.</p>
        </div>
        <div className="footer-categorias">
          <h3>Categorías</h3>
          <ul>
            <li>Información</li>
            <li>Contacto</li>
            <li>Descarga</li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Enlaces</h3>
          <ul>
            <li>Safe Helmet</li>
            <li>Nuestros productos</li>
            <li>Datos que pueden monitorear</li>
            <li>Comentarios</li>
            <li>Descargar aplicación</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;