import React from 'react';
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-name">Allan González J.</h2> 
        <div className="footer-social-icons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="footer-phone">Teléfono: +506 7175 9689 </p>
      </div>
    </footer>
  );
};

export default Footer;
