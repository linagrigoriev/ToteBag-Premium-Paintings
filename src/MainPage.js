import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Footer from "./Footer.js";
import RubikFont from "@fontsource/rubik"; // Import Rubik font
import ImageMain from "./ImageMain.jpg"; // Import the image
import Image1 from "./Image1.jpg"; // Import the first image
import Image2 from "./Image2.jpg"; // Import the second image
import Image3 from "./Image3.jpg"; // Import the third image
import Person1 from "./Person1.jpg"; // Import the first person image
import Person2 from "./Person2.jpg"; // Import the second person image
import Person3 from "./Person3.jpg"; // Import the third person image
import Person4 from "./Person4.jpg"; // Import the fourth person image

function MainPage() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="nav-left">
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
          <Link to="/conditii-livrare">
            <button>Conditii de livrare</button>
          </Link>
        </div>
        <div className="nav-right">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>

      {/* Main Image Container */}
      <div className="main-image-container">
        <img src={ImageMain} alt="Main" />
      </div>

      {/* Text Container */}
      <div className="text-container">
        <p>ToteBag Premium Paintings</p>
      </div>

      {/* Second Text Container */}
      <div className="second-text-container">
        <div className="second-text">
          <p>Trăim, iubim și ne inspirăm din picturi.</p>
          <p>Un cadou ideal pentru a crea momente originale.</p>
        </div>
      </div>

      {/* Second Images Container */}
      <div className="second-images-container">
        <div className="second-images">
          <div className="image-group1">
            <img src={Image1} alt="Image1" />
            <img src={Image2} alt="Image2" />
          </div>
          <div className="image-group2">
            <img src={Image3} alt="Image3" />
          </div>
        </div>
      </div>

      {/* Reviews Container */}
      <div className="reviews-container-text">
        <div className="reviews-text">
          <p>Recenziile noastre:</p>
        </div>

        <div className="reviews-container">
          <div className="review-container container1">
            <img src={Person1} alt="Person1" />
            <p className="nume">Ana M.</p>
            <p>
              "Ador Tote Bag-ul cu "Mona Lisa"! Calitatea este excelentă, iar
              livrarea a fost rapidă. Este cadoul perfect pentru oricine iubește
              arta!"
            </p>
          </div>
          <div className="review-container container2">
            <img src={Person2} alt="Person2" />
            <p className="nume">Gabriel S.</p>
            <p>"Calitatea este excelentă, iar livrarea a fost rapidă."</p>
          </div>
          <div className="review-container container3">
            <img src={Person3} alt="Person3" />
            <p className="nume">Ioana D.</p>
            <p>"Mulțumesc pentru serviciul impecabil, sunt încântat!"</p>
          </div>
          <div className="review-container container4">
            <img src={Person4} alt="Person4" />
            <p className="nume">Andrei C.</p>
            <p>
              "Am primit Tote Bag-ul cu "Școala din Atena" și nu mă mai satur
              să-l port! Este un accesoriu cu adevărat special, care aduce o
              notă de rafinament și cultură în fiecare zi."
            </p>
          </div>
        </div>
      </div>

      <div className="button-container">
        <Link to="/alege-imagine">
          <button className="transparent-button">Începeți comanda</button>
        </Link>
      </div>

      <div className="contact-container">
        <div className="contact-title">Ai o întrebare?</div>
        <div className="contact-text">Nu ezita să ne scrii!</div>
        <div className="contact-form">
          <div className="input-group">
            <input type="text" placeholder="Nume" />
            <input type="text" placeholder="Prenume" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="textarea-group">
            <textarea rows="5" placeholder="Mesaj"></textarea>
          </div>
          
          <div className="checkbox-group">
            <input type="checkbox" id="terms-checkbox" />
            <label htmlFor="terms-checkbox">Acceptarea termenilor & notificare email</label>
          </div>
          <button className="submit-button">Trimite</button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
