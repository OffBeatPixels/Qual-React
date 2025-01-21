// import React, { useState } from "react";
// import { FaBrain } from "react-icons/fa6";
// import { FcCustomerSupport } from "react-icons/fc";
// import { FcBarChart } from "react-icons/fc";
// import { TbGraphFilled } from "react-icons/tb";
// import { FaRobot } from "react-icons/fa";
// import { HiCursorArrowRipple } from "react-icons/hi2";

// const FlipCardSection = () => {
//   const cardData = [
//     {
//       title: "Actionable business and strategic insights ",

//       details:
//         "We empower businesses with actionable, data-driven insights that enhance strategic decision-making. By transforming raw data into valuable intelligence, we enable organizations to implement meaningful improvements.",
//       img: "https://images.unsplash.com/photo-1727002530981-d172fde291d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
//       icon: <FaBrain size={50} />,
//     },
//     {
//       title: "Early detection of potential customer issues",

//       details:
//         "Rapidly identifying customer issues is essential for effective service. We accelerate the detection cycle, enabling quicker responses to customer concerns.",
//       img: "https://images.unsplash.com/photo-1727002530981-d172fde291d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
//       icon: <FcCustomerSupport size={50} />,
//     },
//     {
//       title: "Functions as an independent monitoring entity",

//       details:
//         "QaaS provides a unified approach to manage multiple vendors, driving process standardization and consistency.",
//       img: "https://images.unsplash.com/photo-1727002530981-d172fde291d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
//       icon: <FcBarChart size={50} />,
//     },
//     {
//       title: "Drives continuous improvement effectively",

//       details:
//         "Traditional quality audits often fail to drive continuous improvement effectively. QaaS transforms this approach by fostering dynamic processes that evolve with your business.",
//       img: "https://images.unsplash.com/photo-1727002530981-d172fde291d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
//       icon: <TbGraphFilled size={50} color="1a88cc" />,
//     },
//     {
//       title: "Accelerate Responsible AGI Deployment",

//       details:
//         "At Qualiinsight, we aim to accelerate the advancement and deployment of Artificial General Intelligence (AGI) through our innovative framework of QaaS. By integrating expert human feedback, we enhance AGI outputs, ensuring they meet the highest quality standards.",
//       img: "https://images.unsplash.com/photo-1727002530981-d172fde291d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
//       icon: <FaRobot size={50} color="2A6E2A" />,
//     },
//   ];

//   const [flippedCards, setFlippedCards] = useState({});

//   const handleFlip = (index) => {
//     setFlippedCards((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   return (
//     <section className="bg-[#ffffff]  ">
//       <h1 className=" md:text-4xl text-3xl text-center  text-black   relative z-20">
//         Capabilities
//       </h1>
//       <div className="flex flex-wrap md:flex-nowrap  justify-center px-10 mt-5   bg-[#ffffff]">
//         {cardData.map((card, index) => (
//           <div key={index} className="card ">
//             <div
//               className={`content  ${flippedCards[index] ? "flip" : ""}`} // This class will handle the flip on hover/click
//               onMouseEnter={() => handleFlip(index)} // Added onClick to toggle flip
//               onMouseLeave={() => handleFlip(index)}
//             >
//               {/* Front of Card */}
//               <div className="front flex rounded-xl flex-col items-center justify-center">
//                 {/* <img
//                 src={card.img}
//                 alt={card.title}
//                 className="w-20 h-20 mb-4 rounded-full object-cover"
//               /> */}
//                 {card.icon}
//                 <h3 className="text-xl w-full md:w-48   ">
//                   {card.title}
//                 </h3>
//                 {/* <p className=" text-gray-600">{card.description}</p> */}
//                 <button className=" mt-2 text-black   py-2 px-4 rounded">
//                   {/* <HiCursorArrowRipple /> */}
//                 </button>
//               </div>

//               {/* Back of Card */}
//               <div className="back flex flex-col rounded-2xl items-center justify-center">
//                 {/* <h3 className="text-xl   mb-2">{card.title}</h3> */}
//                 <p className="text-[13px]  ">{card.details}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FlipCardSection;

// import React, { useState } from "react";
// import { FaBrain } from "react-icons/fa6";
// import { FcCustomerSupport } from "react-icons/fc";
// import { FcBarChart } from "react-icons/fc";
// import { TbGraphFilled } from "react-icons/tb";
// import { FaRobot } from "react-icons/fa";

// const FlipCardSection = () => {
//   const cardData = [
//     {
//       title: "Actionable business and strategic insights",
//       details:
//         "We empower businesses with actionable, data-driven insights that enhance strategic decision-making. By transforming raw data into valuable intelligence, we enable organizations to implement meaningful improvements.",
//       icon: <FaBrain size={50} />,
//     },
//     {
//       title: "Early detection of potential customer issues",
//       details:
//         "Rapidly identifying customer issues is essential for effective service. We accelerate the detection cycle, enabling quicker responses to customer concerns.",
//       icon: <FcCustomerSupport size={50} />,
//     },
//     {
//       title: "Functions as an independent monitoring entity",
//       details:
//         "QaaS provides a unified approach to manage multiple vendors, driving process standardization and consistency.",
//       icon: <FcBarChart size={50} />,
//     },
//     {
//       title: "Drives continuous improvement effectively",
//       details:
//         "Traditional quality audits often fail to drive continuous improvement effectively. QaaS transforms this approach by fostering dynamic processes that evolve with your business.",
//       icon: <TbGraphFilled size={50} color="1a88cc" />,
//     },
//     {
//       title: "Accelerate Responsible AGI Deployment",
//       details:
//         "At Qualiinsight, we aim to accelerate the advancement and deployment of Artificial General Intelligence (AGI) through our innovative framework of QaaS. By integrating expert human feedback, we enhance AGI outputs, ensuring they meet the highest quality standards.",
//       icon: <FaRobot size={50} color="2A6E2A" />,
//     },
//   ];

//   const [flippedCards, setFlippedCards] = useState({});

//   const handleFlip = (index) => {
//     setFlippedCards((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   return (
//     <section className="bg-white ">
//       <div className="flex mx-auto h-px w-[80%] md:w-[30%] text-white justify-center">

//         <div className="flex-grow h-[2px] bg-black"> </div>
//         <span className="h-[2px] ml-2 bg-black">....</span>
//         <span className="h-[2px] ml-2 bg-black">....</span>
//         <span className="h-[2px] ml-2 bg-black">....</span>
//       </div>
//       <h1 className="text-3xl md:text-4xl text-center pt-10   text-black">
//         Capabilities
//       </h1>

//       <div className="flex flex-wrap justify-center gap-6 mt-8 px-4 md:px-10">
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className="group perspective w-[300px] h-[250px] sm:w-[300px] sm:h-[250px] md:w-[190px]  xl:w-[230px] lg:h-[280px] relative"
//           >
//             <div
//               className={`relative w-full h-full transform transition-transform duration-500 transform-style-3d ${
//                 flippedCards[index] ? "rotate-y-180" : ""
//               }`}
//               onMouseEnter={() => handleFlip(index)}
//               onMouseLeave={() => handleFlip(index)}
//             >
//               {/* Front Side */}
//               <div className="absolute w-full h-full bg-white border border-gray-200 rounded-lg shadow-xl backface-hidden flex flex-col items-center justify-center">
//                 {card.icon}
//                 <h3 className="text-lg   mt-2 text-center px-2">
//                   {card.title}
//                 </h3>
//               </div>
//               {/* Back Side */}
//               <div className="absolute w-full h-full bg-gray-100 border border-gray-200 rounded-lg shadow-lg backface-hidden flex items-center justify-center transform rotate-y-180">
//                 <p className=" px-4 text-center">{card.details}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FlipCardSection;

// with graph points
// import React, { useState } from "react";
// import { FaBrain } from "react-icons/fa6";
// import { FcCustomerSupport } from "react-icons/fc";
// import { FcBarChart } from "react-icons/fc";
// import { TbGraphFilled } from "react-icons/tb";
// import { FaRobot } from "react-icons/fa";
// import chart from "../assets/WaveChart.webm";

// const FlipCardSection = () => {
//   const cardData = [
//     {
//       title: "Actionable business and strategic insights",
//       details:
//         "We empower businesses with actionable, data-driven insights that enhance strategic decision-making. By transforming raw data into valuable intelligence, we enable organizations to implement meaningful improvements.",
//       icon: <FaBrain size={50} />,
//     },
//     {
//       title: "Early detection of potential customer issues",
//       details:
//         "Rapidly identifying customer issues is essential for effective service. We accelerate the detection cycle, enabling quicker responses to customer concerns.",
//       icon: <FcCustomerSupport size={50} />,
//     },
//     {
//       title: "Functions as an independent monitoring entity",
//       details:
//         "QaaS provides a unified approach to manage multiple vendors, driving process standardization and consistency.",
//       icon: <FcBarChart size={50} />,
//     },
//     {
//       title: "Drives continuous improvement effectively",
//       details:
//         "Traditional quality audits often fail to drive continuous improvement effectively. QaaS transforms this approach by fostering dynamic processes that evolve with your business.",
//       icon: <TbGraphFilled size={50} color="1a88cc" />,
//     },
//     {
//       title: "Accelerate Responsible AGI Deployment",
//       details:
//         "At Qualiinsight, we aim to accelerate the advancement and deployment of Artificial General Intelligence (AGI) through our innovative framework of QaaS. By integrating expert human feedback, we enhance AGI outputs, ensuring they meet the highest quality standards.",
//       icon: <FaRobot size={50} color="2A6E2A" />,
//     },
//   ];

//   const [hoveredCard, setHoveredCard] = useState(null);

//   return (
//     <section className="bg-white">
//       <h1 className="text-3xl md:text-4xl text-center pt-10   text-black">
//         Capabilities
//       </h1>

//       <div className="flex">
//         <div className="w-1/2 h-80 my-10">
//           {" "}
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
//             consectetur quibusdam neque veniam deserunt expedita. Deserunt
//             reprehenderit, quos tenetur dolorem soluta nesciunt sunt, quaerat at
//             enim ad veniam! Reiciendis neque illum maxime aperiam? Dolores ab,
//             quod deserunt tempora saepe recusandae excepturi voluptatem
//             inventore nihil laborum facere amet. Laudantium, corporis. Quisquam
//             temporibus blanditiis perferendis et minus necessitatibus asperiores
//             maiores unde est, mollitia culpa totam facilis! Cumque ipsa,
//             distinctio dolorum unde cupiditate iure saepe deserunt
//             exercitationem rem, eaque eligendi quo reiciendis magni? Ab ad,
//             consectetur nihil minima similique nisi amet maiores necessitatibus
//             blanditiis accusantium, pariatur repellendus recusandae nostrum
//             vero? Sapiente nostrum aliquam doloribus obcaecati voluptates magni
//             praesentium asperiores atque recusandae quae labore aperiam, quia
//             aliquid excepturi aspernatur laborum voluptate ipsam fugit autem
//             iste natus harum perspiciatis. Sapiente, asperiores labore delectus
//             labtium dignissimos, veniam pariatur quaerat voluptate.
//           </p>
//         </div>
//         <div className="w-1/2 h-full ">
//           <video
//             src={chart}
//             autoPlay
//             loop
//             muted
//             className=" inset-0  w-full h-full object-cover"
//           />

//           {/* Graph Points */}
//           <ul className="list-none pr-24  grid grid-cols-5 gap-8 items-start">
//             {cardData.map((card, index) => (
//               <li
//                 key={index}
//                 onMouseEnter={() => setHoveredCard(index)} // Set hovered card index
//                 onMouseLeave={() => setHoveredCard(null)} // Reset on mouse leave
//                 className="flex flex-col items-center gap-2 relative"
//               >
//                 {/* Graph Point */}
//                 <button
//                   className={`w-10 h-4 rounded-full border-2 ${
//                     index === 0
//                       ? "bg-[#C7255C] border-gray-300"
//                       : index === 1
//                       ? "bg-[#68006E] border-gray-300"
//                       : index === 2
//                       ? "bg-[#C4D9C6] border-gray-300"
//                       : index === 3
//                       ? "bg-[#828282] border-gray-300"
//                       : "bg-[#9FA0F8] border-gray-300"
//                   }`}
//                 ></button>
//                 <span className="text-xs">{card.title}</span>

//                 {/* Details Section - Appears Below */}
//                 {hoveredCard === index && (
//                   <div
//                     className="absolute top-0 p-4 border border-gray-300 bg-gray-100 rounded-lg shadow-lg transition-all duration-300 w-64"
//                     style={{
//                       transform: "translateY(10px)",
//                       zIndex: 10,
//                     }}
//                   >
//                     <h3 className="text-lg   mb-2">{card.title}</h3>
//                     <p className=" text-gray-700">{card.details}</p>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FlipCardSection;

// with card next
// import React, { useState } from "react";
// import { FaBrain } from "react-icons/fa6";
// import { FcCustomerSupport } from "react-icons/fc";
// import { FcBarChart } from "react-icons/fc";
// import { TbGraphFilled } from "react-icons/tb";
// import { FaRobot } from "react-icons/fa";

// const FlipCardSection = () => {
//   const cardData = [
//     {
//       title: "Actionable business and strategic insights",
//       details:
//         "We empower businesses with actionable, data-driven insights that enhance strategic decision-making. By transforming raw data into valuable intelligence, we enable organizations to implement meaningful improvements.",
//       icon: <FaBrain size={50} />,
//     },
//     {
//       title: "Early detection of potential customer issues",
//       details:
//         "Rapidly identifying customer issues is essential for effective service. We accelerate the detection cycle, enabling quicker responses to customer concerns.",
//       icon: <FcCustomerSupport size={50} />,
//     },
//     {
//       title: "Functions as an independent monitoring entity",
//       details:
//         "QaaS provides a unified approach to manage multiple vendors, driving process standardization and consistency.",
//       icon: <FcBarChart size={50} />,
//     },
//     {
//       title: "Drives continuous improvement effectively",
//       details:
//         "Traditional quality audits often fail to drive continuous improvement effectively. QaaS transforms this approach by fostering dynamic processes that evolve with your business.",
//       icon: <TbGraphFilled size={50} color="1a88cc" />,
//     },
//     {
//       title: "Accelerate Responsible AGI Deployment",
//       details:
//         "At Qualiinsight, we aim to accelerate the advancement and deployment of Artificial General Intelligence (AGI) through our innovative framework of QaaS. By integrating expert human feedback, we enhance AGI outputs, ensuring they meet the highest quality standards.",
//       icon: <FaRobot size={50} color="2A6E2A" />,
//     },
//   ];

//   const [hoveredCard, setHoveredCard] = useState(null);

//   return (
//     <section className="bg-white">
//       <h1 className="text-3xl md:text-4xl text-center pt-10  text-black">
//         Capabilities
//       </h1>

//       <div className="flex gap-6 mt-8 px-4 md:px-10">
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className="relative flex-shrink-0"
//             onMouseEnter={() => setHoveredCard(index)}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             {/* Card Section */}
//             <div
//               className={`w-[250px] h-[200px] p-4 border border-gray-200 rounded-lg shadow-xl flex flex-col items-center justify-center transition-all duration-300 ${
//                 hoveredCard !== null && hoveredCard !== index
//                   ? "blur-sm opacity-50" // Blur other cards when one is hovered
//                   : ""
//               } ${
//                 hoveredCard === index ? "z-10 relative" : "" // Bring the hovered card to the front
//               }`}
//             >
//               {card.icon}
//               <h3 className="text-lg  mt-2 text-center">
//                 {card.title}
//               </h3>
//             </div>

//             {/* Details Section - Pop-up effect */}
//             {hoveredCard === index && (
//               <div
//                 className={`absolute top-[0%] p-4 border border-gray-300 bg-gray-100 rounded-lg shadow-lg transition-all duration-300 transform scale-105 ${
//                   index === cardData.length - 1 ? "right-full" : "left-full"
//                 }`}
//                 style={{
//                   transform: "translateY(0px)", // Slight Y translation to make the details appear above
//                   zIndex: 20,
//                   width: "250px", // Maintain the width of the details section
//                 }}
//               >
//                 <h3 className="text-xl  mb-2">{card.title}</h3>
//                 <p className=" text-gray-700">{card.details}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FlipCardSection;

// import React, { useState } from "react";
// import { FaBrain } from "react-icons/fa6";
// import { FcCustomerSupport } from "react-icons/fc";
// import { FcBarChart } from "react-icons/fc";
// import { TbGraphFilled } from "react-icons/tb";
// import { FaRobot } from "react-icons/fa";

// const FlipCardSection = () => {
//   const cardData = [
//     {
//       title: "Actionable business and strategic insights",
//       details:
//         "We empower businesses with actionable, data-driven insights that enhance strategic decision-making. By transforming raw data into valuable intelligence, we enable organizations to implement meaningful improvements.",
//       icon: <FaBrain size={50} />,
//     },
//     {
//       title: "Early detection of potential customer issues",
//       details:
//         "Rapidly identifying customer issues is essential for effective service. We accelerate the detection cycle, enabling quicker responses to customer concerns.",
//       icon: <FcCustomerSupport size={50} />,
//     },
//     {
//       title: "Functions as an independent monitoring entity",
//       details:
//         "QaaS provides a unified approach to manage multiple vendors, driving process standardization and consistency.",
//       icon: <FcBarChart size={50} />,
//     },
//     {
//       title: "Drives continuous improvement effectively",
//       details:
//         "Traditional quality audits often fail to drive continuous improvement effectively. QaaS transforms this approach by fostering dynamic processes that evolve with your business.",
//       icon: <TbGraphFilled size={50} color="1a88cc" />,
//     },
//     {
//       title: "Accelerate Responsible AGI Deployment",
//       details:
//         "At Qualiinsight, we aim to accelerate the advancement and deployment of Artificial General Intelligence (AGI) through our innovative framework of QaaS. By integrating expert human feedback, we enhance AGI outputs, ensuring they meet the highest quality standards.",
//       icon: <FaRobot size={50} color="2A6E2A" />,
//     },
//   ];

//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [clickedCard, setClickedCard] = useState(null);

//   const handleCardClick = (index) => {
//     if (clickedCard === index) {
//       setClickedCard(null); // Reset if the clicked card is clicked again
//     } else {
//       setClickedCard(index); // Set the clicked card
//     }
//   };

//   return (
//     <section className="bg-white">
//       <h1 className="text-3xl md:text-4xl text-center pt-10  text-black">
//         Capabilities
//       </h1>

//       <div className="flex flex-row gap-6 mt-8 px-4 md:px-10">
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className="relative flex items-center transition-all duration-300 group"
//             onMouseEnter={() => setHoveredCard(index)}
//             onMouseLeave={() => setHoveredCard(null)}
//             onClick={() => handleCardClick(index)}
//           >
//             {/* Card Section */}
//             <div
//               className={`w-[250px] h-[200px] p-4 border border-gray-200 rounded-lg shadow-xl flex flex-col items-center justify-center transition-all duration-300 ${
//                 hoveredCard === index && clickedCard !== index
//                   ? "-translate-x-[100%]" // Move the hovered card to the left end of the screen
//                   : ""
//               } ${clickedCard === index ? "translate-x-0 opacity-100" : ""}`} // Reset clicked card position
//             >
//               {card.icon}
//               <h3 className="text-lg  mt-2 text-center">
//                 {card.title}
//               </h3>
//             </div>

//             {/* Details Section */}
//             {hoveredCard === index && clickedCard !== index && (
//               <div
//                 className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-[#e27f94] via-[#f4c1a2] to-[#ffd6e0] p-4 border border-gray-300 rounded-lg shadow-lg transition-all duration-300"
//                 style={{
//                   transform: "translateX(50%)", // Move the details to the right of the card
//                   zIndex: 20,
//                   opacity: 1, // Make the text visible
//                 }}
//               >
//                 <h3 className="text-xl  mb-2">{card.title}</h3>
//                 <p className=" text-gray-700">{card.details}</p>
//               </div>
//             )}

//             {/* If the card is clicked, show blurred background */}
//             {clickedCard === index && (
//               <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FlipCardSection;

import React from "react";
import { useNavigate } from "react-router-dom";
import { cmImg, consultingImg, qaImg } from "../assets";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";

const CardData = [
  {
    name: "Process Improvement Consulting",
  },
  {
    name: "Actionable Business and Strategic Insights",
  },
  {
    name: "Accelerate Responsible AGI Development",
  },
  {
    name: "End-to-End QA Frameworks",
  },
  {
    name: "Independent Quality Audits",
  },
  { name: "Continuous Improvement Programs" },
];

const Card = ({ data }) => {
  // const navigate = useNavigate();

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#A2CEF0",
        color: "#0000",
      }}
      contentArrowStyle={{ borderRight: "8px solid  #232631" }}
      iconStyle={{ background: "#000" }}
      // icon={
      //   <div className="flex justify-center items-center w-full h-full">
      //     <img
      //       src={data.image}
      //       alt={data.name}
      //       className="w-[60%] h-[60%] object-contain rounded-full"
      //     />
      //   </div>
      // }
    >
      <div>
        <h3 className="text-black text-xl font-bold  ">{data.name}</h3>
      </div>
    </VerticalTimelineElement>
  );
};

// const FlipCardSection = () => {
//   return (
//     <section className="my-10 h-fit">
//       <div>
//         <div className="bg-[#F4F8FC] w-full h-fit  p-5 ">
//           <h1 className="text-3xl md:text-4xl text-center  mb-5 font-bold text-black">
//             How We Resolve
//           </h1>
//           {/* <div className="rotate-45 w-60 mt-20 absolute left-[20%] bg-black h-1" />
//           <div className="-rotate-45 w-60 mt-[15.6rem] absolute left-[20%] bg-black h-1" />
//           <div className="rotate-45 w-60 mt-20 absolute right-[30%] bg-black h-1" />
//           <div className=" w-[39.5rem]  absolute right-[41.5%] bg-black h-1" />
//           <div className="-rotate-45 w-60 mt-[15.6rem]  absolute right-[30%] bg-black h-1" /> <div className="border-[2px] border-[#febf8f] mt-10 sm:mt-0  sm:w-[33rem]  p-5 rounded-3xl">
//           <div className="sm:translate-x-32 sm:-translate-y-20 h-28 bg-[#febf8f] w-28 place-content-center place-items-center rounded-full ">
//             <img src={qaImg} alt="QA image" className="w-16 h-16" />
//           </div>
//           <div>
//             {" "}
//             <p className="font-bold text-2xl mb-2">QA Framework Evolution</p>
//             <ul className="list-disc  ml-6 space-y-2">
//               <li>End-to-End QA Frameworks</li>
//               <li>Independent Quality Audits</li>
//               <li>Strategic Quality Transformation</li>
//               <li>AI-Powered Dashboard Solutions</li>
//               <li>Function as an Independent Monitoring Partner</li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-[2px] border-[#FFDE88]  mt-10 sm:mt-0 sm:w-[33rem]  p-5 rounded-3xl">
//           <div className="sm:translate-x-32 sm:-translate-y-24 h-28 bg-[#FFDE88] w-28 place-content-center place-items-center rounded-full ">
//             <img src={cmImg} alt="Improvement image" className="  w-16 h-16 " />
//           </div>
//           <div>
//             <p className="font-bold text-2xl mb-2">Continuous Improvement</p>
//             <ul className="list-disc  ml-6 space-y-2">
//               <li>Continuous Improvement Programs</li>
//               <li>Early Detection of Potential Customer Issues</li>
//               <li>Strategic Quality Transformation</li>
//             </ul>
//           </div>
//         </div> */}
//           <div className=" flex flex-col">
//             <VerticalTimeline>
//               {CardData.map((data, index) => (
//                 <Card key={`management-${index}`} data={data} />
//               ))}
//             </VerticalTimeline>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FlipCardSection;




const FlipCardSection = () => {
 const ref = React.useRef(null);
 const { scrollYProgress } = useScroll({
   target: ref,
   offset: ["start start", "end start"],
 });

 const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 2.1]);
 const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 2.1]);
 const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 2.1]);
 const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 2.1]);
 const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 2.1]);
 

  return (
    // <section className="my-10 h-fit">
    //   <div>
    //     <div className="bg-[#F4F8FC] w-full h-fit  p-5 ">
    //       <h1 className="text-3xl md:text-4xl text-center  mb-5 font-bold text-black">
    //         How We Resolve
    //       </h1>
    //       {/* <div className="rotate-45 w-60 mt-20 absolute left-[20%] bg-black h-1" />
    //       <div className="-rotate-45 w-60 mt-[15.6rem] absolute left-[20%] bg-black h-1" />
    //       <div className="rotate-45 w-60 mt-20 absolute right-[30%] bg-black h-1" />
    //       <div className=" w-[39.5rem]  absolute right-[41.5%] bg-black h-1" />
    //       <div className="-rotate-45 w-60 mt-[15.6rem]  absolute right-[30%] bg-black h-1" /> <div className="border-[2px] border-[#febf8f] mt-10 sm:mt-0  sm:w-[33rem]  p-5 rounded-3xl">
    //       <div className="sm:translate-x-32 sm:-translate-y-20 h-28 bg-[#febf8f] w-28 place-content-center place-items-center rounded-full ">
    //         <img src={qaImg} alt="QA image" className="w-16 h-16" />
    //       </div>
    //       <div>
    //         {" "}
    //         <p className="font-bold text-2xl mb-2">QA Framework Evolution</p>
    //         <ul className="list-disc  ml-6 space-y-2">
    //           <li>End-to-End QA Frameworks</li>
    //           <li>Independent Quality Audits</li>
    //           <li>Strategic Quality Transformation</li>
    //           <li>AI-Powered Dashboard Solutions</li>
    //           <li>Function as an Independent Monitoring Partner</li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="border-[2px] border-[#FFDE88]  mt-10 sm:mt-0 sm:w-[33rem]  p-5 rounded-3xl">
    //       <div className="sm:translate-x-32 sm:-translate-y-24 h-28 bg-[#FFDE88] w-28 place-content-center place-items-center rounded-full ">
    //         <img src={cmImg} alt="Improvement image" className="  w-16 h-16 " />
    //       </div>
    //       <div>
    //         <p className="font-bold text-2xl mb-2">Continuous Improvement</p>
    //         <ul className="list-disc  ml-6 space-y-2">
    //           <li>Continuous Improvement Programs</li>
    //           <li>Early Detection of Potential Customer Issues</li>
    //           <li>Strategic Quality Transformation</li>
    //         </ul>
    //       </div>
    //     </div> */}
    //       <div className=" flex flex-col">
    //         <VerticalTimeline>
    //           {CardData.map((data, index) => (
    //             <Card key={`management-${index}`} data={data} />
    //           ))}
    //         </VerticalTimeline>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div
      className="h-[100vh] bg-[#375d7c] w-full dark:border dark:border-white/[0.1] rounded-md relative pt-20 2xl:pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
};

export default FlipCardSection;
