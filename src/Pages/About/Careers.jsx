import React, { useState } from "react";
import { motion } from "framer-motion";
import CareerBg from "../../assets/images/Careers.jpg";
import Img1 from "../../assets/images/graduation.jpg";
import Img2 from "../../assets/images/meeting.jpeg";
import YouTubeThumbnail from "../../assets/images/youtube-thumbnail.jpg"; // Replace with your image

const Careers = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      {/* Background Section */}
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
              Whether you're just starting out or looking to take the next step in your career,
              we have a place for you.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Image Section */}
      <div className="container my-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Grow With Us</h2>
          <h5 className="text-muted">Experience teamwork and innovation together</h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 col-md-5 mb-4 mb-md-0">
            <div className="position-relative overflow-hidden rounded shadow image-card">
              <img src={Img1} alt="Team" className="img-fluid w-100" />
              <div className="position-absolute top-50 start-50 translate-middle text-white fs-4 fw-bold">
                Our Dynamic Team
              </div>
            </div>
          </div>
          <div className="col-10 col-md-5">
            <div className="position-relative overflow-hidden rounded shadow image-card">
              <img src={Img2} alt="Office" className="img-fluid w-100" />
              <div className="position-absolute top-50 start-50 translate-middle text-white fs-4 fw-bold">
                Collaborative Workspace
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meide Philosophy */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="p-4 bg-light rounded shadow-sm">
              <p className="fs-5 text-dark">
                Healthy development of Meide fundamentally relies on the healthy development of its employees,
                as well as the closely related organizational and cultural construction. The basic purpose of
                human resource management is to support business development and ensure the healthy development
                of Meide. Meide’s human resource management should establish a talent selection and training
                mechanism aimed at promoting business development, cultivate a team of employees who are willing
                to dedicate themselves to Meide’s cause, contribute to it, and achieve results for it, and contribute
                to the cultivation and promotion of Meide culture.
              </p>
              <p className="fw-bold text-end mt-4">— Meide Basic Law</p>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="my-5">
        <div className="container">
          {!isVideoPlaying ? (
            <div
              className="position-relative w-100"
              onClick={handleVideoClick}
              style={{
                cursor: "pointer",
                paddingBottom: "28.125%", // 50vh height in 16:9 ratio
                backgroundImage: `url(${YouTubeThumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
              }}
            >
              <div
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                  fontSize: "3rem",
                  color: "#fff",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  padding: "20px 25px",
                  borderRadius: "50%",
                }}
              >
                ▶
              </div>
            </div>
          ) : (
            <div className="ratio ratio-16x9" style={{ height: "70vh" }}>
              <iframe
                className="w-100 h-100"
                src="https://www.youtube.com/embed/KO3VhTsDwDM?autoplay=1"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      {/*  */}

      <section className="py-5 bg-white">
  <div className="container">
    <h2 className="fw-bold mb-4">Career Development</h2>
    <p>
      Meide Group values employee growth and promotes the common development of employees and the company. The company provides two career development paths, management and technical, for employees with different potentials. It has implemented a professional technical position appointment system in the fields of product research and development, process equipment technology, IT technology, and lean management, providing pathways for promotion and development for professional technical talents.
    </p>
    <p>
      The company holds annual employee development discussions, where supervisors and employees jointly review their achievements in work performance, capabilities, and the practice of company values, explore their strengths and areas for development, clarify their career development directions, and develop targeted training measures for each employee to provide strong support for their growth.
    </p>
    <p>
      Our employees can gain more knowledge and skills through job rotation and can choose suitable positions through internal recruitment and competitive hiring. The company also offers learning and certification opportunities for management tools such as project management, target management, and process management.
    </p>
    <p>
      The company places great emphasis on talent and technology, regularly selecting “Special Contributors,” “Meide Technology Award” recipients, and “Meide Craftsmen” to recognize and reward employees who have achieved outstanding results in management and technology, and prioritizes their promotion and development opportunities.
    </p>
  </div>
</section>

    </>
  );
};

export default Careers;
