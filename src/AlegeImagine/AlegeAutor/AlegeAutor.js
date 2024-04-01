import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";
import "./AlegeAutor.css";
import Footer from "../../Footer.js";
import RubikFont from "@fontsource/rubik"; // Import Rubik font

function HelloWorld() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="nav-left">
          <Link to="/ToteBag-Premium-Paintings">
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

      <div className="alege-autor-container">
        {/* First Option */}
        <Link to="/alege-imagine/alege-autor" className="option-container">
          <div className="option-content">
            <h1>
              Leonardo
              <br />
              da Vinci
            </h1>
          </div>
        </Link>

        {/* Second Option */}
        <Link to="/alege-imagine/alege-autor" className="option-container">
          <div className="option-content">
            <h1>Michelangelo</h1>
          </div>
        </Link>

        {/* Third Option */}
        <Link to="/alege-imagine/alege-autor" className="option-container">
          <div className="option-content">
            <h1>
              Peter Paul
              <br />
              Rubens
            </h1>
          </div>
        </Link>
        <Link to="/alege-imagine/alege-autor" className="option-container">
          <div className="option-content">
            <h1>
              Raffaello
              <br />
              Sanzio
            </h1>
          </div>
        </Link>
        <Link to="/alege-imagine/alege-autor" className="option-container">
          <div className="option-content">
            <h1>
              Sandro
              <br />
              Botticelli
            </h1>
          </div>
        </Link>
        <Link to="/alege-imagine/alege-autor" className="option-container">
          <div className="option-content">
            <h1>
              Vincent
              <br />
              van Gogh
            </h1>
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
