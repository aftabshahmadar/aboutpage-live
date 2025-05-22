import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import CSRRevealSection from "./CSRRevealSection";
import CSRBg from "../../assets/images/Csr.jpg";

const CSR = () => {
  const { scrollY } = useViewportScroll();

  /*
    Let's define a scroll range over which the image expands from 90vh to 100vh.
    For example, when scrollY goes from 0 to 200px, we expand the image.
  */
  const maxScroll = 200; // adjust this as needed
  const scrollProgress = useTransform(scrollY, [0, maxScroll], [0, 1], { clamp: true });

  // Animate height from 90vh to 100vh
  const height = useTransform(scrollProgress, [0, 1], ["90vh", "100vh"]);

  // Animate width from 100% to 100vw (usually same, but just in case)
  const width = useTransform(scrollProgress, [0, 1], ["100%", "100vw"]);

  // Optional: Animate position from relative to fixed (if you want to "stick" the image)
  // But here we'll keep it simple and position relative

  return (
    <>
      {/* Hero section */}
      <div
        className="position-relative overflow-hidden"
        style={{ height: "90vh", color: "#fff" }}
      >
        {/* Animated background image */}
        <motion.div
          style={{
            backgroundImage: `url(${CSRBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height,
            width,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />

        {/* Optional dark overlay */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height,
            width,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 0,
          }}
        />

        {/* Content */}
        <div className="container h-100 d-flex align-items-center position-relative" style={{ zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
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
        
      </div>

        <div className="container h-100 position-relative d-flex align-items-center ">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="text-black"
                >
                  <h1 className="display-7 fw-light">Green & Low-Carbon Initiatives</h1>
                  <p className="lead">
             Meide Group is committed to sustainable development, adhering to the environmental philosophy of “proactive planning and exceeding standards” by efficiently utilizing energy, eliminating harmful emissions, preventing pollution, and promoting resource recycling. We manufacture eco-friendly products and maintain industry-leading energy consumption per ¥10,000 of output value.
In July 2022, Low-Carbon Management Committee was Established to oversee the “Dual Carbon” strategy (carbon peaking and neutrality), drive energy conservation, emission reduction, and cost optimization across the group and its supply chain. As a multinational enterprise, we prioritize sustainable practices to align with global climate goals.
                  </p>
                </motion.div>
              </div>

      {/* Next section */}
      <CSRRevealSection />
    </>
  );
};

export default CSR;
