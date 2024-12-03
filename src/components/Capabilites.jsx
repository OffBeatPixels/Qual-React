 


//I am spliting cards data in two array because i cant apply the logice on each row beacuse every cards getting palced in first cards potions so if you can do it please go ahead 
import React, { useState } from "react";
import { FaBrain } from "react-icons/fa";
import { FcCustomerSupport, FcBarChart } from "react-icons/fc";
import { TbGraphFilled } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";

// Default fallback data for cardGroups
const defaultCardGroups = {
  
  group2: [
    {
      title: " Continuous Improvement Programst",
      details:
        " Embed a culture of ongoing innovation with structured initiatives that empower teams to identify and implement impactful changes, ensuring long-term growth.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },

    {
      title: " Independent Quality Audits",
      details:
        "Audits Provide unbiased, third-party evaluations to enhance accountability, improve trust, and deliver actionable recommendations for sustained quality enhancement.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
    {
      title: "  Vendor and Process Scalability Solutions",
      details:
        " Develop adaptive frameworks that scale effortlessly with your business, ensuring consistency and quality across all operations.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
    {
      title: " Strategic Quality Transformation",
      details:
        " Shift quality from being a cost center to a growth enabler by integrating it into core business strategies, driving innovation, efficiency, and competitive advantage.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
  ],
  group3: [
    {
      title: " Actionable Business and Strategic Insights",
      details:
        "Generate insights that empower businesses to make data-driven decisions, address key challenges, and achieve strategic objectives.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
    {
      title: "  Function as an Independent Monitoring Partners",
      details:
        "  Operate as a neutral, independent monitoring function to provide unbiased insights, improve transparency, and maintain accountability.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
    {
      title: " Early Detection of Potential Customer Issuess",
      details:
        " Utilize advanced monitoring and predictive analytics to identify and address customer pain points before they escalate.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
    {
      title: "Accelerate Responsible AGI Development",
      details:
        " Leverage expertise in advanced analytics and ethical practices to accelerate the development and deployment of Responsible Artificial General Intelligence (AGI) solutions.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
    {
      title: " Drive Continuous Improvement Effectively",
      details:
        " Implement a structured, iterative approach to foster a culture of improvement, ensuring sustained operational excellence and adaptability.",
      icon: <FaRobot size={50} color="2A6E2A" />,
    },
  ],
};

const Capabilites = ({ cardGroups = defaultCardGroups }) => {
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
    </section>
  );
};

export default Capabilites;

