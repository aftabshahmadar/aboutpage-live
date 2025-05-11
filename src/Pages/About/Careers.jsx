import React from "react";
import { motion } from "framer-motion";
import CareerBg from "../../assets/images/Careers.jpg";
import Img1 from "../../assets/images/graduation.jpg";
import Img2 from "../../assets/images/meeting.jpeg";

const Careers = () => {
  return (
    <>
      {/* Hero Section */}
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
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        />
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
              opportunities that help you grow professionally and personally.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Below Section */}
      <div className="container my-5 career-gallery">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Explore Our Work Culture</h2>
          <h2 className="fw-bold">and Collaborative Spaces</h2>
        </div>

       <div className="row justify-content-center">
  <div className="col-12 col-md-5 mb-4 mb-md-0 image-card">
    <div className="img-box">
      <img src={Img1} alt="Team" className="img-fluid" />
      <div className="overlay-text">Our Dynamic Team</div>
    </div>
  </div>
  <div className="col-12 col-md-5 image-card">
    <div className="img-box">
      <img src={Img2} alt="Office" className="img-fluid" />
      <div className="overlay-text">Collaborative Workspace</div>
    </div>
  </div>
</div>

{/* Meide Philosophy Section */}
<div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-lg-10">
      <div className="p-4 bg-light rounded shadow-sm">
        <p className="fs-5 text-dark">
          Healthy development of Meide fundamentally relies on the healthy development of its employees, 
          as well as the closely related organizational and cultural construction. The basic purpose of 
          human resource management is to support business development and ensure the healthy development of Meide. 
          Meide’s human resource management should establish a talent selection and training mechanism aimed at promoting 
          business development, cultivate a team of employees who are willing to dedicate themselves to Meide’s cause, 
          contribute to it, and achieve results for it, and contribute to the cultivation and promotion of Meide culture.
        </p>
        <p className="fw-bold text-end mt-4">— Meide Basic Law</p>
      </div>
    </div>
  </div>
</div>


      </div>
    </>
  );
};

export default Careers;
