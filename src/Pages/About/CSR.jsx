import React from "react";
import { motion } from "framer-motion";
import CSRBg from "../../assets/images/Csr.jpg";

const Culture = () => {
  return (
    <div
      className="position-relative"
      style={{
        backgroundImage: `url(${CSRBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        color: "#fff",
      }}
    >
      {/* Optional dark overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      ></div>

      {/* Content Container */}
      <div className="container h-100 position-relative d-flex align-items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <h1 className="display-4 fw-bold">Corporate Social Responsibility</h1>
          <p className="lead">
          At Cast and Blower, we believe in doing business the right way. Our CSR initiatives focus on sustainability, education, health, and community welfare. We actively engage in creating a positive impact by supporting environmental practices and contributing to the well-being of society.


          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Culture;
