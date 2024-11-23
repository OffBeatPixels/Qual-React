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
//       <h1 className=" md:text-4xl text-3xl text-center  text-black font-bold relative z-20">
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
//                 <h3 className="text-xl w-full md:w-48 font-bold ">
//                   {card.title}
//                 </h3>
//                 {/* <p className="text-sm text-gray-600">{card.description}</p> */}
//                 <button className=" mt-2 text-black font-bold py-2 px-4 rounded">
//                   {/* <HiCursorArrowRipple /> */}
//                 </button>
//               </div>

//               {/* Back of Card */}
//               <div className="back flex flex-col rounded-2xl items-center justify-center">
//                 {/* <h3 className="text-xl font-bold mb-2">{card.title}</h3> */}
//                 <p className="text-[13px] font-semibold">{card.details}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FlipCardSection;









import React, { useState } from "react";
import { FaBrain } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { TbGraphFilled } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";

const FlipCardSection = () => {
  const cardData = [
    {
      title: "Actionable business and strategic insights",
      details:
        "We empower businesses with actionable, data-driven insights that enhance strategic decision-making. By transforming raw data into valuable intelligence, we enable organizations to implement meaningful improvements.",
      icon: <FaBrain size={50} />,
    },
    {
      title: "Early detection of potential customer issues",
      details:
        "Rapidly identifying customer issues is essential for effective service. We accelerate the detection cycle, enabling quicker responses to customer concerns.",
      icon: <FcCustomerSupport size={50} />,
    },
    {
      title: "Functions as an independent monitoring entity",
      details:
        "QaaS provides a unified approach to manage multiple vendors, driving process standardization and consistency.",
      icon: <FcBarChart size={50} />,
    },
    {
      title: "Drives continuous improvement effectively",
      details:
        "Traditional quality audits often fail to drive continuous improvement effectively. QaaS transforms this approach by fostering dynamic processes that evolve with your business.",
      icon: <TbGraphFilled size={50} color="1a88cc" />,
    },
    {
      title: "Accelerate Responsible AGI Deployment",
      details:
        "At Qualiinsight, we aim to accelerate the advancement and deployment of Artificial General Intelligence (AGI) through our innovative framework of QaaS. By integrating expert human feedback, we enhance AGI outputs, ensuring they meet the highest quality standards.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
  ];

  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="bg-white ">
      <div className="flex mx-auto h-px w-[30%] text-white justify-center">
        <span className="h-[2px] mr-2 bg-black">....</span>
        <span className="h-[2px] mr-2 bg-black">....</span>
        <span className="h-[2px] mr-2 bg-black">....</span>
        <div className="flex-grow h-[2px] bg-black"> </div>
        <span className="h-[2px] ml-2 bg-black">....</span>
        <span className="h-[2px] ml-2 bg-black">....</span>
        <span className="h-[2px] ml-2 bg-black">....</span>
      </div>
      <h1 className="text-3xl md:text-4xl text-center pt-10 font-bold text-black">
        Capabilities
      </h1>

      <div className="flex flex-wrap justify-center gap-6 mt-8 px-4 md:px-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="group perspective w-[300px] h-[250px] sm:w-[300px] sm:h-[250px] md:w-[190px]  xl:w-[230px] lg:h-[280px] relative"
          >
            <div
              className={`relative w-full h-full transform transition-transform duration-500 transform-style-3d ${
                flippedCards[index] ? "rotate-y-180" : ""
              }`}
              onMouseEnter={() => handleFlip(index)}
              onMouseLeave={() => handleFlip(index)}
            >
              {/* Front Side */}
              <div className="absolute w-full h-full bg-white border border-gray-200 rounded-lg shadow-xl backface-hidden flex flex-col items-center justify-center">
                {card.icon}
                <h3 className="text-lg font-bold mt-2 text-center px-2">
                  {card.title}
                </h3>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full bg-gray-100 border border-gray-200 rounded-lg shadow-lg backface-hidden flex items-center justify-center transform rotate-y-180">
                <p className="text-sm px-4 text-center">{card.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlipCardSection;
