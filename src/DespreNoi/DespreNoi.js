import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./DespreNoi.css"; // Import CSS for this page
import ImageDespreNoi from "./ImageDespreNoi.jpg"; // Import the image
import Creator1 from "./Creator1.jpg"; // Import creator 1 image
import Creator2 from "./Creator2.jpg"; // Import creator 2 image
import ExamplePhoto from "./ExamplePhoto.jpg"; // Import the example photo
import Footer from "../Footer.js";

function HelloWorld() {
  return (
    <div className="about-us-container">
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="nav-left">
          <Link to="/ToteBag-Premium-Paintings">
            <button>Pagina Principala</button>
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
          <Link to="/conditii-livrare">
            <button>Conditii de livrare</button>
          </Link>
        </div>
        <div className="nav-right">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      {/* Text Container with Image Background */}
      <div
        className="image-text-container"
        style={{ backgroundImage: `url(${ImageDespreNoi})` }}
      >
        <div className="text-overlay">
          <h1>Despre Noi</h1>
        </div>
      </div>

      {/* Main Text Container */}
      <div className="main-text-container">
        <div className="main-text">
          <p>
            Bine ați venit în universul nostru artistic, unde transformăm
            operele clasice ale renașterii în accesorii contemporane de neuitat.
          </p>
          <p>
            Suntem o echipă pasionată care aduce în prezent magia și frumusețea
            creațiilor semnate de marii maeștri ai picturii.
          </p>
        </div>
      </div>

      {/* Our Team Container */}
      <div className="our-team-container">
        <h2>Echipa noastră</h2>
        <div className="team-members-container">
          <div className="team-members">
            <div className="team-member">
              <img src={Creator1} alt="Creator 1" />
              <div className="member-info">
                <h3>Lina</h3>
                <p>Creatorul fizic</p>
              </div>
            </div>
            <div className="team-member">
              <img src={Creator2} alt="Creator 2" />
              <div className="member-info">
                <h3>Sofi</h3>
                <p>Creatorul spiritual</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Additional Container */}
      <div className="additional-container">
        <div className="additional-text">
          Aici credem că fiecare detaliu din viața noastră poate fi îmbogățit de
          o notă de eleganță și inspirație. Astfel, am luat spiritul profund al
          artei renașterii și l-am transformat în Tote Bags-uri unice, care nu
          doar sălășluiesc obiectelor, ci și îmbrățișează istoria, cultura și
          rafinamentul.
        </div>
      </div>

      {/* Split Container - 60% Text, 40% Image */}
      <div className="split-container">
        <div className="split-text">
          <p>
            La noi, nu veți doar cumpăra un produs, ci veți intra într-o lume în
            care arta, stilul și istoria se întâlnesc într-o armonie
            desăvârșită.
          </p>
          <p>
            Vă invităm să explorați colecția noastră și să descoperiți cea mai
            potrivită piesă care să vă însoțească în călătoria dumneavoastră
            zilnică.
          </p>
        </div>
        <div className="split-image">
          <img src={ExamplePhoto} alt="Example Photo" />
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

export default HelloWorld;
