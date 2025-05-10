import React from "react";
import { motion } from "framer-motion";
import CultureBg from "../../assets/images/Culture.webp";
import Logo from "../../assets/images/Logo.png"; // replace with your actual logo path
import culbg from "../../assets/images/culbg.jpg";
import scientist from "../../assets/images/scientist.jpg";
import handshake from "../../assets/images/handshake.jpg"; // replace with your image path

const Culture = () => {
  return (
    <>
      {/* Background Section */}
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
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>

        <div className="container h-100 position-relative d-flex align-items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="display-4 fw-bold">Our Culture</h1>
            <p className="lead">
              At Cast and Blower, we believe in fostering a culture of
              excellence, collaboration, and innovation that empowers every team
              member.
            </p>
          </motion.div>
        </div>
      </div>

      {/* New Section Below */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h2 className="fw-semi-bold text-danger mb-4">
              Empowering Our People
            </h2>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={Logo}
              alt="Company Logo"
              className="img-fluid"
              style={{ maxHeight: "150px", objectFit: "contain" }}
            />
          </div>

          <div className="col-md-8">
            <p className="fs-5">
              At Cast and Blower, our people are the foundation of our success.
              We strive to create an environment that encourages creativity,
              ownership, and a passion for progress. Our workplace culture is
              built on trust, diversity, and continuous learning—helping
              individuals thrive while contributing meaningfully to our mission.
            </p>
          </div>
        </div>
      </div>

      {/*  */}

      {/* Hover Sections Like Meide Group */}
      <div
        className="d-flex flex-column flex-lg-row flex-wrap text-white border-white"
        style={{
          backgroundImage: `url(${culbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
        }}
      >
        {[
          {
            title: "Company Mission",
            text: "Provide safe & reliable products and smart solutions to clients in fluid conveying industry.",
          },
          {
            title: "Company Vision",
            text: "Dedicated to prosperity, building a respected enterprise where employees thrive.",
          },
          {
            title: "Company Spirit",
            text: "Hard struggle, pioneering spirit. Ask for trouble, innovate to win.",
          },
          {
            title: "Core Values",
            text: "Customer-oriented, quality-focused, innovation-driven, cooperative approach.",
          },
          {
            title: "Core Culture",
            text: "Striver Culture, Cost Culture, Sharing Culture, Innovation Culture.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center p-3 culture-box border-start border-end border-white"
            style={{
              flex: "1 1 20%",
              minWidth: "200px",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.4)",
              transition: "background-color 0.3s ease",
              borderWidth: "0 1px",
              borderStyle: "solid",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.4)";
            }}
          >
            {/* Apply framer motion to the text content */}
            <motion.h5
              className="fw-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }} // Delay for staggered effect
            >
              {item.title}
            </motion.h5>
            <motion.p
              className="small"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.3 }} // Slightly staggered delay for text
            >
              {item.text}
            </motion.p>
          </div>
        ))}
      </div>

      {/*  */}

      <div className="container py-5">
        {/* Section 1 */}
        <div className="mb-5 p-5 mt-5">
          <h2
            className="fw-bold mb-4"
            data-aos="fade-right" // Add fade-up animation when this element enters the view
          >
            Section One Title
          </h2>

          <div className="row align-items-center">
            <div
              className="col-md-6 mb-4 mb-md-0"
              data-aos="fade-right" // Add fade-right animation to the image
              data-aos-delay="300" // Delay the animation slightly
            >
              <img
                src={scientist}
                alt="Section One"
                className="img-fluid rounded"
           
              />
            </div>

            <div
              className="col-md-6"
              data-aos="fade-left" // Add fade-left animation to the text
              data-aos-delay="500" // Delay the animation slightly
            >
              <h4 className="fw-semibold">Subheading One</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue. Integer posuere erat a
                ante.
              </p>
            </div>
          </div>
        </div>
        <div className="container py-5">
  {/* Section 2 */}
  <div className="mb-5 p-5 mt-5">
 
    <div className="row align-items-center">
      <div
        className="col-md-6"
        data-aos="fade-right" // Add fade-left animation to the text
        data-aos-delay="300" // Delay the animation slightly
      >
        <h4 className="fw-semibold">Subheading Two</h4>
        <p>
          Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis
          euismod semper. Nulla vitae elit libero, a pharetra augue. Integer
          posuere erat a ante.
        </p>
      </div>

      <div
        className="col-md-6 mb-4 mb-md-0"
        data-aos="fade-left" // Add fade-right animation to the image
        data-aos-delay="500" // Delay the animation slightly
      >
        <img
          src={handshake}
          alt="Section Two"
          className="img-fluid rounded"
        />
      </div>
    </div>
  </div>
</div>


      </div>
    </>
  );
};

export default Culture;
