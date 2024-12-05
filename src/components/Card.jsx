// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
import { BsGraphUpArrow } from "react-icons/bs";
import { FiDatabase } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";
import { BsBoxes } from "react-icons/bs";
import { MdCenterFocusWeak } from "react-icons/md";
// import graph from "../assets/graph.webm";
// import ca from "../assets/ca.webm";
// import blocks from "../assets/blocks.webm";
// import db from "../assets/db.webm";
// import qa from "../assets/qa.webm";
// import styled from "styled-components";

// // const cardData = [
// //   {
// //     title: "Quality frameworks do not capture broader signals",
// //     description:
// //       "Current quality frameworks focus on auditing according to guidelines but often fail to capture vital signals essential for comprehensive operational insight.",
// //     icon: <FiDatabase size={50} strokeWidth="" color="black" />,
// //     // icon: <video src={db} alt="Database Icon" className="h-10" autoPlay loop />,
// //   },
// //   {
// //     title:
// //       "In a multi-vendor environment, there is often a lack of comparative analysis",
// //     description:
// //       "In a multi-vendor environment, the lack of comparative analysis impedes effective evaluation and optimization of vendor performance and service quality.",
// //     icon: <FaRegStar size={40} color="black" />,
// //     // icon: <video src={ca} alt="ca Icon" className="h-10" autoPlay loop />,
// //   },
// //   {
// //     title: "Lack of Independent assessment",
// //     description:
// //       "The lack of independent assessment is a major barrier to obtaining unbiased evaluations and ensuring strong quality assurance. ",
// //     icon: <BsGraphUpArrow size={40} color="black" />,
// //     // icon: <video src={graph} alt="Graph Icon" className="h-10" autoPlay loop />,
// //   },
// //   {
// //     title:
// //       "The current model is unable to scale beyond the requirements of a quality audit",
// //     description:
// //       "The existing framework lacks scalability beyond basic quality audits, limiting its ability to effectively address broader operational and strategic needs.",
// //     icon: <BsBoxes size={40} color="black" />,
// //     // icon: <video src={blocks} alt="blocks Icon" className="h-10" autoPlay loop />
// //   },
// //   {
// //     title:
// //       "Quality is often viewed as a cost center rather than a transformation center",
// //     description:
// //       "Quality Assurance (QA) is frequently perceived as a cost center rather than a value creator because traditional frameworks focus primarily on defect detection instead of driving transformative initiatives. This narrow approach limits QA's potential to contribute strategically to business success.",
// //     icon: <MdCenterFocusWeak size={40} color="black" />,
// //     // icon: <video src={qa} alt="QA Icon" className="h-10" autoPlay loop />,
// //   },
// // ];
// const cardData = [
//   // {
//   //   title: " Inconsistent Adoption of Improvement Initiatives",
//   //   description:
//   //     " Teams often resist new workflows or changes, resulting in fragmented efforts and a lack of measurable progress.",
//   //   icon: <FiDatabase size={50} strokeWidth="" color="black" />,
//   //   // icon: <video src={db} alt="Database Icon" className="h-10" autoPlay loop />,
//   // },
//   // {
//   //   title: " Short-Term Gains Overshadow Long-Term Sustainability",
//   //   description:
//   //     " Many improvement projects deliver immediate benefits but fail to embed a culture of sustained operational excellence.",
//   //   icon: <FaRegStar size={40} color="black" />,
//   //   // icon: <video src={ca} alt="ca Icon" className="h-10" autoPlay loop />,
//   // },
//   {
//     title:
//       " Project-Based Services: Delivering Tailored Solutions for Immediate Impact",
//     description:
//       " Lack of structured feedback mechanisms from employees, vendors, and customers prevents organizations from identifying areas of continuous improvement.",
//     icon: <BsGraphUpArrow size={40} color="black" />,
//     // icon: <video src={graph} alt="Graph Icon" className="h-10" autoPlay loop />,
//   },
//   {
//     title: " Next Gen QA - Transforming Quality into a Strategic Advantage",
//     description:
//       " Organizations gather extensive data but fail to contextualize it for actionable insights that drive impactful changes.",
//     icon: <BsBoxes size={40} color="black" />,
//     // icon: <video src={blocks} alt="blocks Icon" className="h-10" autoPlay loop />
//   },
//   {
//     title: "Continuous improvement - Transition from Transaction monitoring to Transformation ",
//     description:
//       " Improvement initiatives are often treated as standalone efforts, missing opportunities to align with broader organizational strategies and unlock transformative potential.",
//     icon: <MdCenterFocusWeak size={40} color="black" />,
//     // icon: <video src={qa} alt="QA Icon" className="h-10" autoPlay loop />,
//   },
// ];

// export default function Card() {
//   const cardRefs = useRef([]);

//   return (
//     <section className="relative bg-[#ffffff] h-fit md:h-full  text-white pt-10">
     
//       <h1 className="card-h1 text-3xl md:text-4xl text-center pt-10 text-[#000000]   relative z-20">
//         Challenges faced by the <br />
//         business teams today
//       </h1>
//       <p className="text-center w-[100%] px-2 md:w-[80%] md:left-40 text-black text-lg md:mx-14 mt-4   relative z-20">
//         Next Gen QA - Transforming Quality into a Strategic Advantage Quality
//         frameworks do not capture broader signals Current quality frameworks
//         focus on auditing according to guidelines but often fail to capture
//         vital signals essential for comprehensive operational insight.
//       </p>
//       {/* <p className="text-center w-[100%] px-2 md:w-[80%] md:left-40 text-black text-lg md:mx-14 mt-4   relative z-20">
//         Many businesses struggle to harness the full potential of Quality due to
//         outdated frameworks, <br /> insufficient comparative analysis, biased audits,
//         and a limited understanding of Quality’s diverse applications.
//       </p> */}

//       {/* SVG Background */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 1800 400"
//         className="absolute top-[70vh] md:top-80 inset-0 z-10 pointer-events-none"
//         preserveAspectRatio="none"
//       >
//         <defs>
//           {/* <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop
//               offset="0%"
//               style={{ stopColor: "#8E2DE2", stopOpacity: 1 }}
//             />
//             <stop
//               offset="100%"
//               style={{ stopColor: "#FF6A00", stopOpacity: 1 }}
//             />
//           </linearGradient> */}
//         </defs>
//         <path
//           // d="M 200 50 C 600 200, 1200 0, 1600 150"
//           d="M150 150H1521"
//           // stroke="url(#line-gradient)"
//           stroke="black"
//           fill="none"
//           strokeWidth="3"
//           strokeLinecap="round"
//         />
//       </svg>

//       {/* Card Grid */}
//       <div className="relative z-20 flex gap-4 px-4 py-10  mx-60">
//         {cardData.map((item, index) => (
//           <div
//             key={index}
//             ref={(el) => (cardRefs.current[index] = el)}
//             className="group relative flex-shrink-0 p-2 md:p-2 xl:p104 rounded-lg  w-[85%] sm:w-[70%] md:w-[40%] lg:w-52 xl:w-60 bg-[#ffffff] overflow-hidden"
//           >
//             {/* Animated Border */}
//             {/* <div className="absolute inset-0 bg-white border-1 border-gray-500  opacity-100 group-hover:bg-gradient-to-r group-hover:from-[#169A47] group-hover:via-[#1F5F5C] group-hover:to-[#042315] group-hover:animate-spin-gradient"></div>
//             <div className="absolute inset-1 bg-[#ffffff] rounded-lg"></div> */}
//             <div className="absolute inset-0 bg-white border-1 border-gray-200  opacity-100"></div>

//             {/* Card Content */}
//             <div className="relative z-10 p-4">
//               <div className=" justify-items-start">{item.icon}</div>
//               <h3 className=" leading-tight   my-2 text-black">{item.title}</h3>
//               {/* <p className="text-gray-700 text-sm">{item.description}</p> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



import React, { useState,useEffect, useRef } from "react";
import { FaBrain } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { FcBarChart } from "react-icons/fc";
import { TbGraphFilled } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";

const Card = () => {
  const cardData = [
    // {
    //   title: " Inconsistent Adoption of Improvement Initiatives",
    //   description:
    //     " Teams often resist new workflows or changes, resulting in fragmented efforts and a lack of measurable progress.",
    //   icon: <FiDatabase size={50} strokeWidth="" color="black" />,
    //   // icon: <video src={db} alt="Database Icon" className="h-10" autoPlay loop />,
    // },
    // {
    //   title: " Short-Term Gains Overshadow Long-Term Sustainability",
    //   description:
    //     " Many improvement projects deliver immediate benefits but fail to embed a culture of sustained operational excellence.",
    //   icon: <FaRegStar size={40} color="black" />,
    //   // icon: <video src={ca} alt="ca Icon" className="h-10" autoPlay loop />,
    // },
    {
      title:
        " Project-Based Services: Delivering Tailored Solutions for Immediate Impact",
      description: (
        <div className="space-y-6 w-[50vw] h-fit">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              1. Processes Aren’t Designed to Scale
            </h3>
            <p className="text-gray-600">
              Most workflows are built for the present, not the future. As
              businesses grow, these static processes crumble under pressure,
              limiting innovation and scalability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              2. Teams Struggle with Invisible Inefficiencies
            </h3>
            <p className="text-gray-600">
              Hidden bottlenecks and redundant steps often go unnoticed,
              silently eroding productivity and driving up operational costs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              3. Customer Experience Suffers from Operational Gaps
            </h3>
            <p className="text-gray-600">
              Disjointed processes create inconsistent customer experiences,
              leaving businesses vulnerable to dissatisfaction and churn.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              4. Decision-Making is Based on Gut, Not Data
            </h3>
            <p className="text-gray-600">
              Without the right process metrics, leaders are forced to rely on
              intuition instead of actionable insights, leading to missed
              opportunities and reactive strategies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              5. Business Agility is Stifled by Outdated Workflows
            </h3>
            <p className="text-gray-600">
              Legacy systems and rigid processes prevent businesses from
              pivoting quickly, leaving them vulnerable to market disruptions
              and competitive threats.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              6. Cross-Functional Collaboration Falls Through the Cracks
            </h3>
            <p className="text-gray-600">
              Processes that don’t integrate seamlessly across departments
              result in siloed operations, poor communication, and missed
              synergies.
            </p>
          </div>
        </div>
      ),

      icon: <BsGraphUpArrow size={40} color="black" />,
      // icon: <video src={graph} alt="Graph Icon" className="h-10" autoPlay loop />,
    },
    {
      title: " Next Gen QA - Transforming Quality into a Strategic Advantage",
      description: (
        <div className="space-y-6 p-4 w-[50vw] h-fit ">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              1. Quality Frameworks Do Not Capture Broader Signals
            </h3>
            <p className="text-md text-gray-600">
              Current quality frameworks focus on auditing according to
              guidelines but often fail to capture vital signals essential for
              comprehensive operational insight.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              2. Lack of Comparative Analysis in Multi-Vendor Environments
            </h3>
            <p className="text-gray-600">
              In a multi-vendor environment, the lack of comparative analysis
              impedes effective evaluation and optimization of vendor
              performance and service quality.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              3. Lack of Independent Assessment
            </h3>
            <p className="text-gray-600">
              The lack of independent assessment is a major barrier to obtaining
              unbiased evaluations and ensuring strong quality assurance.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              4. The Current Model is Unable to Scale Beyond the Requirements of
              a Quality Audit
            </h3>
            <p className="text-gray-600">
              The existing framework lacks scalability beyond basic quality
              audits, limiting its ability to effectively address broader
              operational and strategic needs.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              5. Quality is Often Viewed as a Cost Center Rather Than a
              Transformation Center
            </h3>
            <p className="text-gray-600">
              Quality Assurance (QA) is frequently perceived as a cost center
              rather than a value creator because traditional frameworks focus
              primarily on defect detection instead of driving transformative
              initiatives. This narrow approach limits QA's potential to
              contribute strategically to business success.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              6. Innovation Takes a Backseat to Routine Tasks
            </h3>
            <p className="text-gray-600">
              Teams are so focused on keeping the lights on that they lack the
              bandwidth to drive transformative initiatives, stalling business
              growth.
            </p>
          </div>
        </div>
      ),
      icon: <BsBoxes size={40} color="black" />,
      // icon: <video src={blocks} alt="blocks Icon" className="h-10" autoPlay loop />
    },
    {
      title:
        "Continuous improvement - Transition from Transaction monitoring to Transformation ",
      description: (
        <div className="space-y-6 p-6 bg-white w-[50vw] h-fit ">
          <div >
            <h3 className="text-lg font-semibold text-gray-800">
              1. Inconsistent Adoption of Improvement Initiatives
            </h3>
            <p className="text-gray-600">
              Teams often resist new workflows or changes, resulting in
              fragmented efforts and a lack of measurable progress.
            </p>
          </div>

          <div >
            <h3 className="text-lg font-semibold text-gray-800">
              2. Short-Term Gains Overshadow Long-Term Sustainability
            </h3>
            <p className="text-gray-600">
              Many improvement projects deliver immediate benefits but fail to
              embed a culture of sustained operational excellence.
            </p>
          </div>

          <div >
            <h3 className="text-lg font-semibold text-gray-800">
              3. Unstructured Feedback Channels Stall Growth
            </h3>
            <p className="text-gray-600">
              Lack of structured feedback mechanisms from employees, vendors,
              and customers prevents organizations from identifying areas of
              continuous improvement.
            </p>
          </div>

          <div >
            <h3 className="text-lg font-semibold text-gray-800">
              4. Data Without Context Limits Actionability
            </h3>
            <p className="text-gray-600">
              Organizations gather extensive data but fail to contextualize it
              for actionable insights that drive impactful changes.
            </p>
          </div>

          <div >
            <h3 className="text-lg font-semibold text-gray-800">
              5. Failure to Link Improvements to Strategic Goals
            </h3>
            <p className="text-gray-600">
              Improvement initiatives are often treated as standalone efforts,
              missing opportunities to align with broader organizational
              strategies and unlock transformative potential.
            </p>
          </div>
        </div>
      ),
      icon: <MdCenterFocusWeak size={40} color="black" />,
      // icon: <video src={qa} alt="QA Icon" className="h-10" autoPlay loop />,
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);
 const cardRef = useRef(null);

 const handleOutsideClick = (event) => {
   if (cardRef.current && !cardRef.current.contains(event.target)) {
     setHoveredCard(null); // Reset the hovered card when clicking outside
   }
 };

 useEffect(() => {
   document.addEventListener("click", handleOutsideClick);
   return () => {
     document.removeEventListener("click", handleOutsideClick);
   };
 }, []);


  return (
    <section className="bg-white mb-40">
      <h1 className="card-h1 text-3xl md:text-4xl text-center pt-10 text-[#000000]   relative z-20">
        Challenges faced by the <br />
        business teams today
      </h1>

      <div className="flex gap-4 mt-20 px-4 justify-center ">
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={hoveredCard === index ? cardRef : null}
            className="relative flex-shrink-0"
            // onMouseEnter={() => setHoveredCard(index)}
            // onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Card Section */}
            <div
              className={`w-[300px] h-[250px] p-4 border border-gray-200 rounded-lg  flex flex-col  items-center justify-center transition-all duration-300 ${
                hoveredCard !== null && hoveredCard !== index
                  ? "blur-sm opacity-50" // Blur other cards when one is hovered
                  : ""
              } ${
                hoveredCard === index ? "z-10 relative" : "" // Bring the hovered card to the front
              }`}
            >
              {card.icon}
              <h3 className="text-lg  text-center">{card.title}</h3>
              <p
                className="bg-[#dd4160] absolute top-52 text-white  p-1 rounded-lg cursor-pointer"
                onClick={() => setHoveredCard(index)}
              >
                Read More
              </p>
            </div>

            {/* Details Section - Pop-up effect */}
            {hoveredCard === index && (
              <div
                className={`absolute top-[-20%]  p-4 border border-gray-300 bg-white rounded-lg  
                  ${
                    index === cardData.length - 1 ? "right-0" : "left-0"
                    // } ${index === 1} ? "right-[10%]": "right"
                  }`}
                style={{
                  transform: "translateY(-200px)", // Slight Y translation to make the details appear above
                  zIndex: 20,
                  // width: "800px",
                  // height:"500px"
                }}
              >
                <h3 className="text-xl  ">{card.title}</h3>
                <p className="text-sm text-gray-700">{card.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;


