import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import "./ConditiiLivrare.css"; // Import CSS for this page
import DeliveryImage from "./DeliveryImage.jpg"; // Import the delivery image
import Footer from "../Footer.js";
import RubikFont from "@fontsource/rubik"; // Import Rubik font

function ConditiiLivrarePage() {
  return (
    <div className="conditii-livrare-container">
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="nav-left">
          <Link to="/">
            <button>Pagina Principala</button>
          </Link>
          <Link to="/despre-noi">
            <button>Despre Noi</button>
          </Link>
          <div className="dropdown">
            <Link to="/alege-imagine">
              <button>Alege Imagine</button>
              <div className="dropdown-content">
                <Link to="/alege-imagine/random-choice">Random Choice</Link>
                <Link to="/alege-imagine/alege-autor">Alege Autor</Link>
                <Link to="/alege-imagine/alege-culoare">Alege Culoare</Link>
              </div>
            </Link>
          </div>
        </div>
        <div className="nav-right">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      {/* First Container - Title */}
      <div className="conditii-livrare-header-container">
        <p>Condiții de livrare</p>
      </div>

      {/* Second Container - Sections */}
      <div className="delivery-sections">
        {/* First Row */}
        <div className="delivery-row">
          {/* Section 1 */}
          <div className="delivery-section">
            <h3>Transport Rapid</h3>
            <p>
              Livrăm Tote Bags-urile tale preferate în cel mai scurt timp
              posibil, pentru a te bucura rapid de achiziția ta.
            </p>
          </div>

          {/* Section 2 */}
          <div className="delivery-section">
            <h3>Pachet Sigur</h3>
            <p>
              Fiecare Tote Bag este ambalat cu grijă pentru a ajunge la tine în
              perfectă stare.
            </p>
          </div>
        </div>

        {/* Second Row */}
        <div className="delivery-row">
          {/* Section 3 */}
          <div className="delivery-section">
            <h3>Urmărire Colet</h3>
            <p>
              Oferim posibilitatea de a urmări coletul tău pentru a știi exact
              când va ajunge la destinație.
            </p>
          </div>

          {/* Section 4 */}
          <div className="delivery-section">
            <h3>Retur Gratuit</h3>
            <p>
              Dacă Tote Bag-ul nu îți place, îl poți returna gratuit în termen
              de 30 de zile.
            </p>
          </div>
        </div>

        {/* Third Row */}
        <div className="delivery-row">
          {/* Section 5 */}
          <div className="delivery-section">
            <h3>Asistență 24/7</h3>
            <p>
              Suntem mereu disponibili pentru orice întrebare sau nelămurire,
              oricând ai nevoie.
            </p>
          </div>

          {/* Section 6 */}
          <div className="delivery-section">
            <h3>Ambalaj Eco-Friendly</h3>
            <p>
              Folosim materiale reciclabile și prietenoase cu mediul pentru
              ambalarea produselor noastre.
            </p>
          </div>
        </div>
      </div>
      <div className="button-container">
        <Link to="/alege-imagine">
          <button className="transparent-button">Începeți comanda</button>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ConditiiLivrarePage;
