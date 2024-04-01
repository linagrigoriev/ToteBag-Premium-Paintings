import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import './Footer.css'; // Make sure to import your CSS file

function Footer() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div>
            <span>Instagram:</span>
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </div>
          <div>
            <span>Facebook:</span>
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </div>
          <div className="contact-info">
            <p>Universitatea „Ștefan cel Mare” din Suceava</p>
            <p>Str. Universității 13, 720229 Suceava, România</p>
            <p>Tel: +40 000 000 000</p>
            <p>Email: galina.grigoriev@student.usv.ro</p>
          </div>
        </div>
        <div className="copyright">
          <p>© 2024 Lina's inc. Toate drepturile rezervate.</p>
        </div>
      </div>
    );
  }
  
  export default Footer;
  