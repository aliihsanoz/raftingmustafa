import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Rafting from "./Rafting";
import TekneTur from "./TekneTur";
import KulturTur from "./KulturTur";
import ExtremeTur from "./ExtremeTur";
import Banner from "./Banner";
import Footer from "./Footer";
import "./App.css";
 


function App() {
  return (
 
      <div>
        
        <nav>
 
          <h2>ALARA YATÇILIK & TURİZM</h2>
          <ul>
            <li><NavLink activeClassName="active" to="/">Anasayfa</NavLink></li>
            <li><NavLink activeClassName="active" to="/about">Hakkımızda</NavLink></li>
            <li><NavLink activeClassName="active" to="/rafting">Rafting</NavLink></li>
            <li><NavLink activeClassName="active" to="/teknetur">Tekne Tur</NavLink></li>
            <li><NavLink activeClassName="active" to="/kulturtur">Kültür Tur</NavLink></li>
            <li><NavLink activeClassName="active" to="/extremetur">Extreme Tur</NavLink></li>
            <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
          </ul>

        </nav>
        <Banner />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="rafting" element={<Rafting />} />
          <Route path="teknetur" element={<TekneTur />} />
          <Route path="kulturtur" element={<KulturTur />} />
          <Route path="extremetur" element={<ExtremeTur />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <Footer />

      </div>
 
  );
}

export default App;
