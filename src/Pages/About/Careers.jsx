import React from "react";
import { motion } from "framer-motion";
import CareerBg from "../../assets/images/Careers.jpg";

const Careers = () => {
  return (
    
    <div
      className="position-relative"
      style={{
        backgroundImage: `url(${CareerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        color: "#fff",
      }}
    >
      {/* Dark Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />

      {/* Content */}
      <div className="container h-100 position-relative d-flex align-items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <h1 className="display-4 fw-bold">Careers at Cast and Blower</h1>
          <p className="lead">
            Join a team that thrives on innovation, collaboration, and continuous learning. 
            At Cast and Blower, we’re committed to nurturing talent and providing 
            opportunities that help you grow professionally and personally. Whether 
            you're just starting out or looking to take the next step in your career, 
            we have a place for you.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
