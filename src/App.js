import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import DespreNoi from "./DespreNoi/DespreNoi.js";
import RandomChoice from "./AlegeImagine/RandomChoice/RandomChoice.js";
import AlegeAutor from './AlegeImagine/AlegeAutor/AlegeAutor.js';
import AlegeCuloare from './AlegeImagine/AlegeCuloare/AlegeCuloare.js';
import ConditiiLivrare from './ConditiiLivrare/ConditiiLivrare.js';
import AlegeImagine from './AlegeImagine/AlegeImagine.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ToteBag-Premium-Paintings" element={<MainPage />} />
        <Route path="/despre-noi" element={<DespreNoi />} />
        <Route path="/alege-imagine" element={<AlegeImagine />} />
        <Route path="/alege-imagine/random-choice" element={<RandomChoice />} />
        <Route path="/alege-imagine/alege-autor" element={<AlegeAutor />} />
        <Route path="/alege-imagine/alege-culoare" element={<AlegeCuloare />} />
        <Route path="/conditii-livrare" element={<ConditiiLivrare />} />
        </Routes>
    </Router>
  );
}

export default App;