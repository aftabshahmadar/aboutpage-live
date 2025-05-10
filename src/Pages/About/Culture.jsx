import React from "react";
import { motion } from "framer-motion";
import CultureBg from "../../assets/images/Culture.webp";

const Culture = () => {
  return (
    <div
      className="position-relative"
      style={{
        backgroundImage: `url(${CultureBg})`,
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
          <h1 className="display-4 fw-bold">Our Culture</h1>
          <p className="lead">
            At Cast and Blower, we believe in fostering a culture of excellence,
            collaboration, and innovation that empowers every team member.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Culture;
