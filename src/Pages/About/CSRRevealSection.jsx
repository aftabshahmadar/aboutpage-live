import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import csrrevealsection3 from "../../assets/images/csrrevealsection3.jpg";

const CSRRevealSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["50%", "0%"]);
  const width = useTransform(scrollYProgress, [0, 1], [180, window.innerWidth]);
  const height = useTransform(scrollYProgress, [0, 1], [180, window.innerHeight]);
  const opacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

  return (
    <div ref={sectionRef} style={{ height: "200vh"}}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          overflowX: "hidden"
        }}
      >
        <motion.div
          style={{
            width,
            height,
            borderRadius,
            scale,
            backgroundImage: `url(${csrrevealsection3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <motion.div
        style={{ opacity, position: "relative", zIndex: 2 }}
        className="container text-white py-5"
      >
        <h1 className="display-4 fw-bold">Corporate Social Responsibility</h1>
        <p className="lead">
          At Cast and Blower, we believe in doing business the right way. Our CSR
          initiatives focus on sustainability, education, health, and community
          welfare. We actively engage in creating a positive impact by supporting
          environmental practices and contributing to the well-being of society.
        </p>
      </motion.div>
    </div>
  );
};

export default CSRRevealSection;
