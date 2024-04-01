import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";
import "./AlegeCuloare.css";
import Footer from "../../Footer.js";
import RubikFont from "@fontsource/rubik"; // Import Rubik font

function HelloWorld() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="nav-left">
          <Link to="/">
            <button>Pagina Principala</button>
          </Link>
          <div className="dropdown">
            <Link to="/despre-noi">
              <button>Despre Noi</button>
            </Link>
          </div>
          <Link to="/conditii-livrare">
            <button>Conditii de livrare</button>
          </Link>
        </div>
        <div className="nav-right">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>

      <div className="alege-culoare-container">
        {/* First Option */}
        <Link to="/alege-imagine/alege-culoare" className="option-container">
          <div className="option-content">
            <h1>Galben</h1>
          </div>
        </Link>

        {/* Second Option */}
        <Link to="/alege-imagine/alege-culoare" className="option-container">
          <div className="option-content">
            <h1>Roșu</h1>
          </div>
        </Link>

        {/* Third Option */}
        <Link to="/alege-imagine/alege-culoare" className="option-container">
          <div className="option-content">
            <h1>Albastru</h1>
          </div>
        </Link>
        <Link to="/alege-imagine/alege-culoare" className="option-container">
          <div className="option-content">
            <h1>Verde</h1>
          </div>
        </Link>
        <Link to="/alege-imagine/alege-culoare" className="option-container">
          <div className="option-content">
            <h1>Violet</h1>
          </div>
        </Link>
        <Link to="/alege-imagine/alege-culoare" className="option-container">
          <div className="option-content">
            <h1>Roz</h1>
          </div>
        </Link>
      </div>

      <div className="button-container">
        <Link to="/alege-imagine">
          <button className="transparent-button">Înapoi la alegere</button>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HelloWorld;
