import React, { useState } from "react";
import { motion } from "framer-motion";
import SQbg from "../../assets/images/SuplierQualification.jpg";
import crthammerImg from "../../assets/images/crthammer.jpg";
import signImg from "../../assets/images/sign.jpg";

const Culture = () => {
  const [popupContent, setPopupContent] = useState(null);

  const handlePopup = (text) => {
    setPopupContent(text);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <>
      {/* Hero Banner */}
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
            <h1 className="display-4 fw-bold">Supplier Qualification</h1>
            <p className="lead">
              We hold our suppliers to the highest standards to ensure quality,
              reliability, and ethical practices throughout our supply chain.
              Cast and Blower’s supplier qualification process involves thorough
              evaluation, compliance with industry regulations, and a shared
              commitment to excellence and sustainability.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Info Cards Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4 fw-bold">Fair impartial sunshine transparent</h2>
          <h5 className="text-muted mb-5">
            Collaboration and win-win Create the future together
          </h5>
          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <motion.div
              className="col-md-5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div
                className="position-relative rounded overflow-hidden shadow-sm"
                style={{
                  height: "260px",
                  backgroundImage: `url(${crthammerImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                  <h4 className="fw-bold">Integrity statement</h4>
                  <button
                    className="btn btn-outline-light mt-3"
                    onClick={() =>
                      handlePopup(
                        "1. During the cooperation process, both parties shall consciously abide by national laws and regulations and carry out commercial transactions in accordance with the Anti-Unfair Competition Law of the People's Republic of China, the Tendering and Bidding Law of the People's Republic of China, the Several Provisions on Strictly Prohibiting the Use of Official Convenience to Seek Unfair Benefits, the Interim Provisions on Prohibiting Commercial Bribery and other relevant laws and regulations. 2. Both parties shall be fair, just and open in the process of determining the qualification of invitation to bid, bidding, opening and evaluating bids, and prohibit secret operations. Do not do things that violate business ethics, disrupt the normal competition order, and damage the image of both parties, do not collude in bidding, do not disclose the secrets of both parties, do not squeeze out other operators’ fair competition , and do not falsify or maliciously overestimate in Pre-computation, tendering and commercial quotations. 3. Party B shall not directly or indirectly give cash, valuables, securities, etc. (including but not limited to the above items) to Party A staff and their relatives, shall not provide financial assistance for Party A staff housing construction, weddings and funerals, and going abroad, shall not invite Party A staff to participate in entertainment, banquets, fitness or travel activities that may affect fair transactions, shall not reimburse Party A staff for expenses that should be paid by them personally, shall not provide convenience for Party A staff's private affairs, shall not purchase for Party A or provide communication tools, transportation tools, home appliances, high-end office supplies and other items that should be provided by Party A. Both parties shall not introduce staff family members or relatives to each other to engage in economic activities related to Party A's procurement projects. 4. Party B shall not privately negotiate or reach a tacit understanding with Party A staff on material supply, price details, quantity changes, financial transactions, quality control, quality problem handling, etc. for personal gain, conduct private negotiations or reach a tacit understanding with the staff of Party A .Party B shall not invite Party A staff to go out for fun or enter commercial entertainment venues in the name of negotiating work or signing contracts. 5. If Party B finds that Party A's staff has solicited bribes, it shall immediately report to the relevant department of Party A. Otherwise, once verified, Party A shall immediately terminate all business with Party B. 6. If Party B bribes Party A's staff, once verified, Party B shall pay Party A a penalty of more than RMB 5,000. 7. Party B (including delivery drivers and other Party B personnel) shall not privately contact or communicate with other personnel stipulation upon by Party A"
                      )
                    }
                  >
                    View now
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="col-md-5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div
                className="position-relative rounded overflow-hidden shadow-sm"
                style={{
                  height: "260px",
                  backgroundImage: `url(${signImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                  <h4 className="fw-bold">Certification process</h4>
                  <button
                    className="btn btn-outline-light mt-3"
                    onClick={() =>
                      handlePopup(
                        "This is the content for Certification process."
                      )
                    }
                  >
                    View now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Registration Button */}
          <motion.div
            className="mt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <a href="#" className="btn btn-danger px-4 py-2 fs-5 fw-semibold">
              Registration of supplier
            </a>
          </motion.div>
        </div>
      </section>

      {/* Popup Card */}
    {popupContent && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 9999 }}
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white p-4 rounded shadow"
      style={{ maxWidth: "700px", width: "90%", maxHeight: "80vh", overflowY: "auto" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3 sticky-top bg-white" style={{ top: 0 }}>
        <h5 className="mb-0">Details</h5>
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={closePopup}
        >
          &times;
        </button>
      </div>
      <p style={{ whiteSpace: "pre-wrap", textAlign: "justify" }}>{popupContent}</p>
    </motion.div>
  </div>
)}

    </>
  );
};

export default Culture;
