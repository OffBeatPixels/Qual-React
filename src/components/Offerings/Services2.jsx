// import React from "react";
// import Service from "../../assets/mg.gif";


//  function Services2() {
//   return (
//     <section
//       className=" mx-28 mt-10  flex justify-end "
//       style={{
//         backgroundImage: `url(${Service})`,
//         backgroundRepeat: "no-repeat",
//         // backgroundPosition: "center",
//         height: "70vh",

//         // minWidth:"100%",
//         backgroundBlendMode: "overlay",
//         "@media (max-width: 768px)": {
//           backgroundImage: "none",
//         },
//         backgroundSize: "contain",
//       }}
//     >
//       {/* Section Title */}
//       <div className="text-wrap h-10 w-[40%] mt-32 mr-20">
//         <h3 className="text-3xl text-black text-justify  mb-8 ">Managed Services</h3>
//         <p>
//           By systematically following four key stages Assessment, Report,
//           Insights, and Process Improvement, we provide actionable insights and
//           measurable enhancements, fostering a culture of ongoing innovation and
//           operational excellence.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Transition(Services2)
import React, { useState } from "react";
import { FaBrain } from "react-icons/fa";
import { TbGraphFilled } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import Transition from "../Animations/Transition";
const defaultCardGroups = {
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
  // continuousImprovement: [
  //   {
  //     title: " Continuous Improvement Programst",
  //     details:
  //       " Embed a culture of ongoing innovation with structured initiatives that empower teams to identify and implement impactful changes, ensuring long-term growth.",
  //     icon: <FaRobot size={50} color="2A6E2A" />,
  //   },
  //   {
  //     title: " Early Detection of Potential Customer Issuess",
  //     details:
  //       " Utilize advanced monitoring and predictive analytics to identify and address customer pain points before they escalate.",
  //     icon: <FaRobot size={50} color="2A6E2A" />,
  //   },
  //   {
  //     title: " Strategic Quality Transformation",
  //     details:
  //       " Shift quality from being a cost center to a growth enabler by integrating it into core business strategies, driving innovation, efficiency, and competitive advantage.",
  //     icon: <FaRobot size={50} color="2A6E2A" />,
  //   },
  // ],
};

const Services2 = ({ cardGroups = defaultCardGroups }) => {
  const [activeSection, setActiveSection] = useState("qaFrameworkEvolution");

  return (
    <section className="bg-white">
      <h1 className="text-3xl md:text-4xl text-center py-5 text-black">
        Managed Services
      </h1>

      {/* Navigation Buttons */}
      {/* <div className="flex justify-center gap-40 mt-6">
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
      </div> */}

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
            <div className="grid grid-cols-4 shadow-small  rounded-xl p-10 gap-6 md:mx-10">
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

export default Transition(Services2);

// Card Component for Reusability
export const Card = ({ card }) => (
  <div className="relative flex-shrink-0  transition-all duration-700 group">
    <div className="w-[300px] h-[200px] px-3 border border-gray-200 rounded-lg flex flex-col items-center  transition-all duration-700">
      <span className="py-2">{card.icon}</span>
      <h3 className="text-sm  text-center">{card.title}</h3>
      <p className="text-xs pt-3 text-justify text-gray-600 ">{card.details}</p>
    </div>
  </div>
);
