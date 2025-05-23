// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import csrrevealsection3 from "../../assets/images/csrrevealsection3.jpg";

// const CSRRevealSection = () => {
//   const sectionRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end start"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
//   const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["50%", "0%"]);
//   const width = useTransform(scrollYProgress, [0, 1], [180, window.innerWidth]);
//   const height = useTransform(scrollYProgress, [0, 1], [180, window.innerHeight]);
//   const opacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

//   return (
//     <div ref={sectionRef} style={{ height: "200vh"}}>
//       <div
//         style={{
//           position: "sticky",
//           top: 0,
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           zIndex: 1,
//           overflowX: "hidden",
//           overflowY:"hidden"
//         }}
//       >
//         <motion.div
//           style={{
//             width,
//             height,
//             borderRadius,
//             scale,
//             backgroundImage: `url(${csrrevealsection3})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />
//       </div>

//       <motion.div
//   style={{
//     opacity,
//     y: useTransform(scrollYProgress, [0.95, 1], [50, 0]),
//     position: "relative",
//     zIndex: 2,
//   }}
//   className="container text-white py-5"
// >
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 1 }}
//   >
//     <h2 className="display-5 text-whitefw-bold mb-3">Our CSR Vision</h2>
//     <p className="lead">
//       Cast and Blower actively engages in initiatives that drive social change, promote environmental sustainability, and uplift communities. Our dedication to corporate responsibility goes beyond compliance, embedding ethical values in everything we do.
//     </p>
//   </motion.div>
// </motion.div>

//     </div>
//   );
// };

// export default CSRRevealSection;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Import custom CSS for overall layout and card styling
// import './PhilanthropyCarousel.css';

// Sample data for your philanthropy cards
const CSRrevealSection = [
  {
    id: 1,
    title: 'Education Initiatives',
    year: '2002',
    description: 'Supporting primary and secondary education, including building schools and providing scholarships for underprivileged students.',
  },
  {
    id: 2,
    title: 'Elderly Care Programs',
    year: '2005',
    description: 'Funding and establishing care facilities and community programs to support the well-being of senior citizens.',
  },
  {
    id: 3,
    title: 'Scholarship Funds',
    year: '2021',
    description: 'Providing financial aid to university students pursuing higher education in various fields, fostering future talent.',
  },
  {
    id: 4,
    title: 'Environmental Conservation',
    year: '2010',
    description: 'Investing in projects focused on wetland preservation, reforestation, and sustainable ecological practices.',
  },
  {
    id: 5,
    title: 'Community Development',
    year: '2013',
    description: 'Initiatives aimed at enhancing local infrastructure, promoting civic engagement, and improving living standards.',
  },
  {
    id: 6,
    title: 'Public Health & Fitness',
    year: '2013',
    description: 'Establishing public fitness centers and health awareness campaigns to promote healthier lifestyles.',
  },
  {
    id: 7,
    title: 'Cultural Heritage Support',
    year: '2016',
    description: 'Donations towards the preservation and promotion of local historical sites and cultural parks.',
  },
  {
    id: 8,
    title: 'Disaster Relief Efforts',
    year: '2017',
    description: 'Contributing to immediate and long-term relief efforts for communities affected by natural disasters.',
  },
  {
    id: 9,
    title: 'Youth Empowerment',
    year: '2018',
    description: 'Programs designed to provide mentorship, skill development, and opportunities for young individuals.',
  },
];

const CSRRevealSection = () => {
  return (
    <div className="bd_sc">
      <div className="add_con">
        <div className="usual_box">
          <div className="wrap">
            <div className="usual_tit tit36">Philanthropy</div>
            <div className="con">
              Meide Group has dedicated over ¥500 million (RMB) to public welfare initiatives, including education, COVID-19 relief, elderly care, ecological conservation, poverty alleviation. Honorary Chairman Kong Xiangcun has personally donated ¥112 million (RMB) to support these causes.
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0, // No stretch for a cleaner card look
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          loop={true}
          navigation={{
            prevEl: '.swiper-button-prev-custom', // Use custom class names to avoid conflicts
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination-custom' }} // Point to custom pagination div
          className="mySwiper"
          initialSlide={0}
          speed={600}
        >
          {CSRrevealSection.map((card) => (
            <SwiperSlide key={card.id}>
              {/* Bootstrap Card Structure */}
              <div className="card text-center h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fw-bold text-danger">{card.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{card.year}</h6>
                  <p className="card-text flex-grow-1">{card.description}</p>
                  {/* You can add a button or link here if needed */}
                  {/* <a href="#" className="btn btn-outline-primary mt-auto">Learn More</a> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="btn_box">
          <div className="swiper-button-prev-custom swiper_btn">
            {/* Using simple text for icons as icon font is not provided */}
            &lt;
          </div>
          <div className="swiper-pagination-custom"></div> {/* Swiper will render bullets here */}
          <div className="swiper-button-next-custom swiper_btn">
            {/* Using simple text for icons as icon font is not provided */}
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSRRevealSection;