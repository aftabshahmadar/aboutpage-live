// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import About from "./Pages/About";
import Culture from "./Pages/About/Culture";
import Careers from "./Pages/About/Careers.jsx";
import CSR from "./Pages/About/CSR.jsx";
import SupplierQualification from "./Pages/About/SuplierQualification.jsx";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
    </BrowserRouter>
  </React.StrictMode>
);
