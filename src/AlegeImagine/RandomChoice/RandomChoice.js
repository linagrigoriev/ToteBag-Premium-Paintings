import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";
import "./RandomChoice.css"; // Import CSS for this page
import RandomDesignImage from "./RandomDesignImage.jpg"; // Import the image
import Footer from "../../Footer.js";
import RubikFont from "@fontsource/rubik"; // Import Rubik font

function RandomChoicePage() {
  return (
    <div className="random-choice-container">
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
      {/* First Container */}
      <div className="header-container">
        <p>Universul a decis acest design pentru tine:</p>
      </div>

      {/* Second Container */}
      <div className="random-design-container">
        <img
          src={RandomDesignImage}
          alt="Random Design"
          className="random-design-image"
        />
        <div className="random-design-info">
          <p>Floarea soarelui</p>
          <p>Vincent van Gogh</p>
          <p>(1888)</p>
        </div>
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

export default RandomChoicePage;
