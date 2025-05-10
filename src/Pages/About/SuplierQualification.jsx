import React from "react";
import { motion } from "framer-motion";
import SQbg from "../../assets/images/SuplierQualification.jpg";

const Culture = () => {
  return (
    <div
      className="position-relative"
      style={{
        backgroundImage: `url(${SQbg})`,
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
          <h1 className="display-4 fw-bold">Supplier Qualification</h1>
          <p className="lead">
           We hold our suppliers to the highest standards to ensure quality, reliability, and ethical practices throughout our supply chain. Cast and Blower’s supplier qualification process involves thorough evaluation, compliance with industry regulations, and a shared commitment to excellence and sustainability.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Culture;
