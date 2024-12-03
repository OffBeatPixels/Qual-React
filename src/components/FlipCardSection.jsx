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
//                 {/* <p className="text-sm text-gray-600">{card.description}</p> */}
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
//                 <p className="text-sm px-4 text-center">{card.details}</p>
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
//                     <p className="text-sm text-gray-700">{card.details}</p>
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
//                 <p className="text-sm text-gray-700">{card.details}</p>
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
//                 <p className="text-sm text-gray-700">{card.details}</p>
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



//I am spliting cards data in two array because i cant apply the logice on each row beacuse every cards getting palced in first cards potions so if you can do it please go ahead 
import React, { useState } from "react";
import { FaBrain } from "react-icons/fa";
import { FcCustomerSupport, FcBarChart } from "react-icons/fc";
import { TbGraphFilled } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";
import Capabilites from "./Capabilites";

// Default fallback data for cardGroups
const defaultCardGroups = {
  group1: [
    {
      title: "End-to-End QA Frameworks",
      details:
        " Design and implement scalable Quality Assurance frameworks that go beyond compliance to capture vital signals and drive operational excellence.",
      icon: <FaBrain size={50} />,
    },
    {
      title: " Process Improvement Consulting",
      details:
        "Identify inefficiencies, streamline workflows, and realign processes to strategic business objectives, boosting efficiency and effectiveness.",
      icon: <FcCustomerSupport size={50} />,
    },
    {
      title: " KPI Development and Implementation",
      details:
        " Establish tailored Key Performance Indicators (KPIs) that provide actionable insights, enabling smarter decision-making and measurable outcomes.",
      icon: <FcBarChart size={50} />,
    },
    {
      title: "AI-Powered Dashboard Solutions",
      details:
        " Leverage cutting-edge visualization tools and predictive analytics to transform raw data into meaningful insights, driving informed strategies and proactive decision-making.",
      icon: <TbGraphFilled size={50} color="1a88cc" />,
    },
  ],
  // group2: [
  //   {
  //     title: " Continuous Improvement Programst",
  //     details:
  //       " Embed a culture of ongoing innovation with structured initiatives that empower teams to identify and implement impactful changes, ensuring long-term growth.",
  //     icon: <FaRobot size={50} color="2A6E2A" />,
  //   },

  //   {
  //     title: " Independent Quality Audits",
  //     details:
  //       "Audits Provide unbiased, third-party evaluations to enhance accountability, improve trust, and deliver actionable recommendations for sustained quality enhancement.",
  //     icon: <FaRobot size={50} color="2A6E2A" />,
  //   },
  //   {
  //     title: "  Vendor and Process Scalability Solutions",
  //     details:
  //       " Develop adaptive frameworks that scale effortlessly with your business, ensuring consistency and quality across all operations.",
  //     icon: <FaRobot size={50} color="2A6E2A" />,
  //   },
  //   {
  //     title: " Strategic Quality Transformation",
  //     details:
  //       " Shift quality from being a cost center to a growth enabler by integrating it into core business strategies, driving innovation, efficiency, and competitive advantage.",
  //     icon: <FaRobot size={50} color="2A6E2A" />,
  //   },
  // ],
  // group3: [
  //   {
  //     title: " Actionable Business and Strategic Insights",
  //     details:
  //       "Generate insights that empower businesses to make data-driven decisions, address key challenges, and achieve strategic objectives.",
  //     icon: <FaRobot size={50} color="2A6E2A" />,
  //   },
  //   {
  //     title: "  Function as an Independent Monitoring Partners",
  //     details:
  //       "  Operate as a neutral, independent monitoring function to provide unbiased insights, improve transparency, and maintain accountability.",
  //     icon: <FaRobot size={50} color="2A6E2A" />,
  //   },
  //   {
  //     title: " Early Detection of Potential Customer Issuess",
  //     details:
  //       " Utilize advanced monitoring and predictive analytics to identify and address customer pain points before they escalate.",
  //     icon: <FaRobot size={50} color="2A6E2A" />,
  //   },
  //   {
  //     title: "Accelerate Responsible AGI Development",
  //     details:
  //       " Leverage expertise in advanced analytics and ethical practices to accelerate the development and deployment of Responsible Artificial General Intelligence (AGI) solutions.",
  //     icon: <FaRobot size={50} color="2A6E2A" />,
  //   },
  //   {
  //     title: " Drive Continuous Improvement Effectively",
  //     details:
  //       " Implement a structured, iterative approach to foster a culture of improvement, ensuring sustained operational excellence and adaptability.",
  //     icon: <FaRobot size={50} color="2A6E2A" />,
  //   },
  // ],
};

const FlipCardSection = ({ cardGroups = defaultCardGroups }) => {
  const [groupData, setGroupData] = useState(cardGroups);
  const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card

  // Handle card hover: Moves hovered card to the first position within each group
  const handleCardHover = (groupKey, index) => {
    const newGroupData = { ...groupData };
    const cardData = newGroupData[groupKey];

    if (index !== null) {
      const newCardData = [...cardData];
      const [hoveredCardData] = newCardData.splice(index, 1); // Remove hovered card
      newCardData.unshift(hoveredCardData); // Add it to the first position
      newGroupData[groupKey] = newCardData; // Update the group data
      setGroupData(newGroupData); // Update the state for this group
      setHoveredCard({ groupKey, index: 0 }); // Track hovered card now at first position
    }
  };

  // Handle mouse leave: Reset the order to the original
  const handleMouseLeave = (groupKey) => {
    setGroupData(cardGroups); // Restore original order for all groups
    setHoveredCard(null); // Reset hovered card
  };

  // Ensure that groupData is an object before calling Object.keys()
  if (!groupData || typeof groupData !== "object") return null;

  return (
    <section className="bg-white">
      <h1 className="text-3xl md:text-4xl text-center pt-10 font-bold text-black">
        Capabilities
      </h1>

      {/* Render each group */}
      {Object.keys(groupData).map((groupKey) => (
        <div
          key={groupKey}
          className="grid grid-cols-4  gap-6 mt-8  md:mx-10 overflow-hidden"
        >
          {groupData[groupKey].map((card, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 transition-all duration-700 group"
              onMouseEnter={() => handleCardHover(groupKey, index)}
              onMouseLeave={() => handleMouseLeave(groupKey)}
            >
              {/* Card Section */}
              <div
                className={`w-[250px] h-[200px] p-4 border border-gray-200 rounded-lg flex flex-col items-center justify-center transition-all duration-700 ${
                  index === 0
                    ? "z-20 translate-x-0 scale-100 opacity-100" // Highlight hovered card
                    : "translate-x-0 scale-100 opacity-100"
                }`}
              >
                {card.icon}
                <h3 className="text-lg mt-2 text-center">{card.title}</h3>
              </div>
              {/* Details Section - Pop-up effect */}
              {hoveredCard &&
                hoveredCard.groupKey === groupKey &&
                hoveredCard.index === index && (
                  <div
                    className="absolute top-0 left-0 p-4 border-2 opacity-100  bg-white border-[#fff6de] rounded-lg shadow-lg transition-all duration-700 "
                    style={{
                      zIndex: 50, // Ensure the details are in front
                      width: "800px", // Width of details section
                      height: "200px",
                      transform: "translateX(35%)", // Show details on the right of the hovered card
                    }}
                  >
                    <h3 className="text-xl mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-700">{card.details}</p>
                  </div>
                )}
              {/* If the card is clicked, show blurred background */}
              {groupData === index && (
                <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
              )}
            </div>
          ))}
        </div>
      ))}
      <Link to="/capabilites" className="bg-[#8FABC3] rounded-md p-2 justify-center items-center m-14">
     
        Read More
      </Link>
    </section>
  );
};

export default FlipCardSection;

