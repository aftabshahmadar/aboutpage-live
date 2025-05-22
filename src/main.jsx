// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import About from "./Pages/About";
import Culture from "./Pages/About/Culture";
import CSR from "./Pages/About/CSR";
import Careers from "./Pages/About/Careers.jsx";
import SupplierQualification from "./Pages/About/SuplierQualification.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

AOS.init({
  duration: 1000, // Animation duration (in ms)
  easing: 'ease-in-out', // Animation easing
  once: true, // Animation will only trigger once when the element comes into view
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
     <Routes>
  <Route path="/about" element={<About />} />
  <Route path="/about/culture" element={<Culture />} />
  <Route path="/about/careers" element={<Careers />} />
  <Route path="/about/csr" element={<CSR />} />
  <Route path="/about/supplier-qualification" element={<SupplierQualification />} />
</Routes>
  <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
