import React from "react";
import { motion } from "framer-motion";
import CultureBg from "../../assets/images/Culture.webp";
import Logo from "../../assets/images/Logo.png"; // replace with your actual logo path
import culbg from "../../assets/images/culbg.jpg"; // replace with your image path


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
              At Cast and Blower, we believe in fostering a culture of excellence,
              collaboration, and innovation that empowers every team member.
            </p>
          </motion.div>
        </div>
      </div>

      {/* New Section Below */}
<div className="container py-5">
  <div className="row justify-content-center">
    <div className="col-12 text-center">
      <h2 className="fw-bold mb-4">Empowering Our People</h2>
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
        We strive to create an environment that encourages creativity, ownership, 
        and a passion for progress. Our workplace culture is built on trust, diversity, 
        and continuous learning—helping individuals thrive while contributing 
        meaningfully to our mission.
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
      className="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center p-3 culture-box"
      style={{
        flex: "1 1 20%",
        minWidth: "200px",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.6)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.4)")
      }
    >
      <h5 className="fw-bold">{item.title}</h5>
      <p className="small">{item.text}</p>
    </div>
  ))}
</div>

    </>
  );
};

export default Culture;
