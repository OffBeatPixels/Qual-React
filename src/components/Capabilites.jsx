 


//I am spliting cards data in two array because i cant apply the logice on each row beacuse every cards getting palced in first cards potions so if you can do it please go ahead 
import React, { useState } from "react";
import { FaBrain } from "react-icons/fa";
import { FcCustomerSupport, FcBarChart } from "react-icons/fc";
import { TbGraphFilled } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import { MdManageSearch } from "react-icons/md";

// Default fallback data for cardGroups
// const defaultCardGroups = {
//    group1: [
//     {
//       title: " Process Improvement Consulting",
//       details:
//         "Identify inefficiencies, streamline workflows, and realign processes to strategic business objectives, boosting efficiency and effectiveness.",
//       icon: <FcCustomerSupport size={50} />,
//     },
//     {
//       title: " KPI Development and Implementation",
//       details:
//         " Establish tailored Key Performance Indicators (KPIs) that provide actionable insights, enabling smarter decision-making and measurable outcomes.",
//       icon: <FcBarChart size={50} />,
//     },
//     {
//       title: " Actionable Business and Strategic Insights",
//       details:
//         "Generate insights that empower businesses to make data-driven decisions, address key challenges, and achieve strategic objectives.",
//       icon: <FaRobot size={50} color="2A6E2A" />,
//     },
//     {
//       title: "  Vendor and Process Scalability Solutions",
//       details:
//         " Develop adaptive frameworks that scale effortlessly with your business, ensuring consistency and quality across all operations.",
//       icon: <FaRobot size={50} color="2A6E2A" />,
//     },
//       {
//         title: "Accelerate Responsible AGI Development",
//         details:
//           " Leverage expertise in advanced analytics and ethical practices to accelerate the development and deployment of Responsible Artificial General Intelligence (AGI) solutions.",
//         icon: <FaRobot size={50} color="2A6E2A" />,
//       },
//   ],
 
//   group2: [
//     {
//       title: "End-to-End QA Frameworks",
//       details:
//         " Design and implement scalable Quality Assurance frameworks that go beyond compliance to capture vital signals and drive operational excellence.",
//       icon: <FaBrain size={50} />,
//     },
//     {
//       title: " Independent Quality Audits",
//       details:
//         "Audits Provide unbiased, third-party evaluations to enhance accountability, improve trust, and deliver actionable recommendations for sustained quality enhancement.",
//       icon: <FaRobot size={50} color="2A6E2A" />,
//     },
//     {
//       title: " Strategic Quality Transformation",
//       details:
//         " Shift quality from being a cost center to a growth enabler by integrating it into core business strategies, driving innovation, efficiency, and competitive advantage.",
//       icon: <FaRobot size={50} color="2A6E2A" />,
//     },
//     {
//       title: "  Function as an Independent Monitoring Partners",
//       details:
//         "  Operate as a neutral, independent monitoring function to provide unbiased insights, improve transparency, and maintain accountability.",
//       icon: <FaRobot size={50} color="2A6E2A" />,
//     },
//     {
//       title: "AI-Powered Dashboard Solutions",
//       details:
//         " Leverage cutting-edge visualization tools and predictive analytics to transform raw data into meaningful insights, driving informed strategies and proactive decision-making.",
//       icon: <TbGraphFilled size={50} color="1a88cc" />,
//     },
//   ],
//   group3: [
//     {
//       title: " Continuous Improvement Programst",
//       details:
//         " Embed a culture of ongoing innovation with structured initiatives that empower teams to identify and implement impactful changes, ensuring long-term growth.",
//       icon: <FaRobot size={50} color="2A6E2A" />,
//     },

//     {
//       title: " Early Detection of Potential Customer Issuess",
//       details:
//         " Utilize advanced monitoring and predictive analytics to identify and address customer pain points before they escalate.",
//       icon: <FaRobot size={50} color="2A6E2A" />,
//     },
//       {
//         title: " Strategic Quality Transformation",
//         details:
//           " Shift quality from being a cost center to a growth enabler by integrating it into core business strategies, driving innovation, efficiency, and competitive advantage.",
//         icon: <FaRobot size={50} color="2A6E2A" />,
//       },
//   ],
// };

const defaultCardGroups = {
  consulting: [
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
      title: " Actionable Business and Strategic Insights",
      details:
        "Generate insights that empower businesses to make data-driven decisions, address key challenges, and achieve strategic objectives.",
      icon: <MdManageSearch size={50} color="2A6E2A" />,
    },
    {
      title: "  Vendor and Process Scalability Solutions",
      details:
        " Develop adaptive frameworks that scale effortlessly with your business, ensuring consistency and quality across all operations.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
    {
      title: "Accelerate Responsible AGI Development",
      details:
        " Leverage expertise in advanced analytics and ethical practices to accelerate the development and deployment of Responsible Artificial General Intelligence (AGI) solutions.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
  ],
  qaFrameworkEvolution: [
    {
      title: "End-to-End QA Frameworks",
      details:
        " Design and implement scalable Quality Assurance frameworks that go beyond compliance to capture vital signals and drive operational excellence.",
      icon: <FaBrain size={50} />,
    },
    {
      title: " Independent Quality Audits",
      details:
        "Audits Provide unbiased, third-party evaluations to enhance accountability, improve trust, and deliver actionable recommendations for sustained quality enhancement.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
    {
      title: " Strategic Quality Transformation",
      details:
        " Shift quality from being a cost center to a growth enabler by integrating it into core business strategies, driving innovation, efficiency, and competitive advantage.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
    {
      title: "  Function as an Independent Monitoring Partners",
      details:
        "  Operate as a neutral, independent monitoring function to provide unbiased insights, improve transparency, and maintain accountability.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
    {
      title: "AI-Powered Dashboard Solutions",
      details:
        " Leverage cutting-edge visualization tools and predictive analytics to transform raw data into meaningful insights, driving informed strategies and proactive decision-making.",
      icon: <TbGraphFilled size={50} color="1a88cc" />,
    },
  ],
  continuousImprovement: [
    {
      title: " Continuous Improvement Programst",
      details:
        " Embed a culture of ongoing innovation with structured initiatives that empower teams to identify and implement impactful changes, ensuring long-term growth.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
    {
      title: " Early Detection of Potential Customer Issuess",
      details:
        " Utilize advanced monitoring and predictive analytics to identify and address customer pain points before they escalate.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
    {
      title: " Strategic Quality Transformation",
      details:
        " Shift quality from being a cost center to a growth enabler by integrating it into core business strategies, driving innovation, efficiency, and competitive advantage.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
  ],
};


// const Capabilites = ({ cardGroups = defaultCardGroups }) => {
//   const [groupData, setGroupData] = useState(cardGroups);
//   const [hoveredCard, setHoveredCard] = useState(null); // Track hovered card

//   // Handle card hover: Moves hovered card to the first position within each group
//   const handleCardHover = (groupKey, index) => {
//     const newGroupData = { ...groupData };
//     const cardData = newGroupData[groupKey];

//     if (index !== null) {
//       const newCardData = [...cardData];
//       const [hoveredCardData] = newCardData.splice(index, 1); // Remove hovered card
//       newCardData.unshift(hoveredCardData); // Add it to the first position
//       newGroupData[groupKey] = newCardData; // Update the group data
//       setGroupData(newGroupData); // Update the state for this group
//       setHoveredCard({ groupKey, index: 0 }); // Track hovered card now at first position
//     }
//   };

//   // Handle mouse leave: Reset the order to the original
//   const handleMouseLeave = (groupKey) => {
//     setGroupData(cardGroups); // Restore original order for all groups
//     setHoveredCard(null); // Reset hovered card
//   };

//   // Ensure that groupData is an object before calling Object.keys()
//   if (!groupData || typeof groupData !== "object") return null;

//   return (
//     <section className="bg-white">
//       <h1 className="text-3xl md:text-4xl text-center pt-10  text-black">
//         Capabilities
//       </h1>

//       <h1 className="text-3xl md:text-4xl text-left px-10  text-black">
//         Consulting
//       </h1>
//       <h1 className="text-3xl md:text-4xl text-left px-10  text-black">
//         QA Framework Evolution
//       </h1>
//       <h1 className="text-3xl md:text-4xl text-left px-10  text-black">
//         Continuous Improvement
//       </h1>

//       {/* Render each group */}
//       {Object.keys(groupData).map((groupKey) => (
//         <div
//           key={groupKey}
//           className="grid grid-cols-4  gap-6 mt-8  md:mx-10 overflow-hidden"
//         >
//           {groupData[groupKey].map((card, index) => (
//             <div
//               key={index}
//               className="relative flex-shrink-0 transition-all duration-700 group"
//               onMouseEnter={() => handleCardHover(groupKey, index)}
//               onMouseLeave={() => handleMouseLeave(groupKey)}
//             >
//               {/* Card Section */}
//               <div
//                 className={`w-[250px] h-[200px] p-4 border border-gray-200 rounded-lg flex flex-col items-center justify-center transition-all duration-700 ${
//                   index === 0
//                     ? "z-20 translate-x-0 scale-100 opacity-100" // Highlight hovered card
//                     : "translate-x-0 scale-100 opacity-100"
//                 }`}
//               >
//                 {card.icon}
//                 <h3 className="text-lg mt-2 text-center">{card.title}</h3>
//               </div>
//               {/* Details Section - Pop-up effect */}
//               {hoveredCard &&
//                 hoveredCard.groupKey === groupKey &&
//                 hoveredCard.index === index && (
//                   <div
//                     className="absolute top-0 left-0 p-4 border-2 opacity-100  bg-white border-[#fff6de] rounded-lg shadow-lg transition-all duration-700 "
//                     style={{
//                       zIndex: 50, // Ensure the details are in front
//                       width: "800px", // Width of details section
//                       height: "200px",
//                       transform: "translateX(35%)", // Show details on the right of the hovered card
//                     }}
//                   >
//                     <h3 className="text-xl mb-2">{card.title}</h3>
//                     <p className="text-sm text-gray-700">{card.details}</p>
//                   </div>
//                 )}
//               {/* If the card is clicked, show blurred background */}
//               {groupData === index && (
//                 <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
//               )}
//             </div>
//           ))}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Capabilites;

const Capabilites = ({ cardGroups = defaultCardGroups }) => {
  const [activeSection, setActiveSection] = useState("consulting");

  return (
    <section className="bg-white">
      <h1 className="text-3xl md:text-4xl text-center pt-5 text-black">
        Capabilities
      </h1>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-40 mt-6">
        <button
          className={`px-6 py-2 rounded-t-xl border-t-2 border-l-2 border-r-2 ${
            activeSection === "consulting"
              ? "bg-gray-300 text-black"
              : "bg-white "
          }`}
          onClick={() => setActiveSection("consulting")}
        >
          Consulting
        </button>
        <button
          className={`px-6 py-2 rounded-t-xl border-t-2 border-l-2 border-r-2 ${
            activeSection === "qaFrameworkEvolution"
              ? "bg-gray-300 text-black"
              : "bg-white"
          }`}
          onClick={() => setActiveSection("qaFrameworkEvolution")}
        >
          QA Framework Evolution
        </button>
        <button
          className={`px-6 py-2 rounded-t-xl border-t-2 border-l-2 border-r-2 ${
            activeSection === "continuousImprovement"
              ? "bg-gray-300 text-black"
              : "bg-white"
          }`}
          onClick={() => setActiveSection("continuousImprovement")}
        >
          Continuous Improvement
        </button>
      </div>

      {/* Sections */}
      <div className="z-auto">
        {activeSection === "consulting" && (
          <div>
            <div className="grid grid-cols-3 shadow-small gap-6 rounded-xl p-10 md:mx-10">
              {cardGroups.consulting.map((card, index) => (
                <Card key={index} card={card} />
              ))}
            </div>
          </div>
        )}

        {activeSection === "qaFrameworkEvolution" && (
          <div>
            <div className="grid grid-cols-3 shadow-small rounded-xl p-10 gap-6 md:mx-10">
              {cardGroups.qaFrameworkEvolution.map((card, index) => (
                <Card key={index} card={card} />
              ))}
            </div>
          </div>
        )}

        {activeSection === "continuousImprovement" && (
          <div>
            <div className="grid grid-cols-3 shadow-small p-10 rounded-xl gap-6 md:mx-10">
              {cardGroups.continuousImprovement.map((card, index) => (
                <Card key={index} card={card} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default Capabilites;

// Card Component for Reusability
const Card = ({ card }) => (
  <div className="relative flex-shrink-0  transition-all duration-700 group">
    <div className="w-[300px] h-[200px] px-3 border border-gray-200 rounded-lg flex flex-col items-center  transition-all duration-700">
      <span className="py-2" >{card.icon}</span>
      <h3 className="text-sm  text-center">{card.title}</h3>
      <p className="text-xs pt-3 text-justify text-gray-600 ">{card.details}</p>
    </div>
  </div>
);

