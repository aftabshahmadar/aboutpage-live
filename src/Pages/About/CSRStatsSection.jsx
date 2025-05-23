import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: 4, label: "A-rated eco-performance enterprises" },
  { number: 2, label: "B-rated eco-performance enterprises" },
  { number: 3, label: "National Green Factories" },
  { number: 5, label: "Provincial Green Factories" },
  { number: 3, label: "Municipal Green Factories" },
];

const CSRStatsSection = () => {
  return (
    <section className="py-5 bg-light position-relative overflow-hidden">
      <div className="container text-center">
        <motion.h2
          className="mb-4 fw-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Green Achievements
        </motion.h2>

        <div className="row justify-content-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              className="col-6 col-md-4 col-lg-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="bg-white shadow-sm rounded p-3 h-100">
                <motion.div
                  className="display-5 fw-bold text-danger"
                  whileInView={{ scale: [0.8, 1] }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {item.number}
                </motion.div>
                <p className="mb-0 mt-2 small text-muted">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional down arrow */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="fs-1 text-danger">&#8595;</div>
        </motion.div>
      </div>
    </section>
  );
};

export default CSRStatsSection;
