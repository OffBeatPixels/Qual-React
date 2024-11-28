import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { BsGraphUpArrow } from "react-icons/bs";
import { FiDatabase } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa6";
import { BsBoxes } from "react-icons/bs";
import { MdCenterFocusWeak } from "react-icons/md";
import graph from "../assets/graph.webm";
import ca from "../assets/ca.webm";
import blocks from "../assets/blocks.webm";
import db from "../assets/db.webm";
import qa from "../assets/qa.webm";
import styled from "styled-components";

const cardData = [
  {
    title: "Quality frameworks do not capture broader signals",
    description:
      "Current quality frameworks focus on auditing according to guidelines but often fail to capture vital signals essential for comprehensive operational insight.",
    icon: <FiDatabase size={50} strokeWidth="" color="black" />,
    // icon: <video src={db} alt="Database Icon" className="h-10" autoPlay loop />,
  },
  {
    title:
      "In a multi-vendor environment, there is often a lack of comparative analysis",
    description:
      "In a multi-vendor environment, the lack of comparative analysis impedes effective evaluation and optimization of vendor performance and service quality.",
    icon: <FaRegStar size={40} color="black" />,
    // icon: <video src={ca} alt="ca Icon" className="h-10" autoPlay loop />,
  },
  {
    title: "Lack of Independent assessment",
    description:
      "The lack of independent assessment is a major barrier to obtaining unbiased evaluations and ensuring strong quality assurance. ",
    icon: <BsGraphUpArrow size={40} color="black" />,
    // icon: <video src={graph} alt="Graph Icon" className="h-10" autoPlay loop />,
  },
  {
    title:
      "The current model is unable to scale beyond the requirements of a quality audit",
    description:
      "The existing framework lacks scalability beyond basic quality audits, limiting its ability to effectively address broader operational and strategic needs.",
    icon: <BsBoxes size={40} color="black" />,
    // icon: <video src={blocks} alt="blocks Icon" className="h-10" autoPlay loop />
  },
  {
    title:
      "Quality is often viewed as a cost center rather than a transformation center",
    description:
      "Quality Assurance (QA) is frequently perceived as a cost center rather than a value creator because traditional frameworks focus primarily on defect detection instead of driving transformative initiatives. This narrow approach limits QA's potential to contribute strategically to business success.",
    icon: <MdCenterFocusWeak size={40} color="black" />,
    // icon: <video src={qa} alt="QA Icon" className="h-10" autoPlay loop />,
  },
];

export default function Card() {
  const cardRefs = useRef([]);

  return (
    <section className="relative bg-[#ffffff] h-fit md:h-full  text-white pt-10">
      {/*   {/* <div className="flex mx-auto h-px w-[80%] md:w-[30%] justify-center">
         
         
         
        <div className="flex-grow h-2px bg-black"></div>
        <span className="h-[2px] ml-2 bg-black">....</span>
        <span className="h-[2px] ml-2 bg-black">....</span>
        <span className="h-[2px] ml-2 bg-black">....</span>
      </div> */}
      <h1 className="card-h1 text-3xl md:text-4xl text-center pt-10 text-[#000000]   relative z-20">
        Challenges faced by the <br />
        business teams today
      </h1>
      <p className="text-center w-[100%] px-2 md:w-[80%] md:left-40 text-black text-lg md:mx-14 mt-4   relative z-20">
        Many businesses struggle to harness the full potential of Quality due to
        outdated frameworks, <br /> insufficient comparative analysis, biased audits,
        and a limited understanding of Quality’s diverse applications.
      </p>

      {/* SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1800 400"
        className="absolute top-[70vh] md:top-80 inset-0 z-10 pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          {/* <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#8E2DE2", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FF6A00", stopOpacity: 1 }}
            />
          </linearGradient> */}
        </defs>
        <path
          // d="M 200 50 C 600 200, 1200 0, 1600 150"
          d="M150 150H1521"
          // stroke="url(#line-gradient)"
          stroke="black"
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Card Grid */}
      <div className="relative z-20 flex overflow-x-auto md:overflow-hidden gap-4 px-4 py-10 lg:px-3 xl:px-20 2xl:mx-60">
        {cardData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="group relative flex-shrink-0 p-2 md:p-2 xl:p104 rounded-lg  w-[85%] sm:w-[70%] md:w-[40%] lg:w-52 xl:w-60 bg-[#ffffff] overflow-hidden"
          >
            {/* Animated Border */}
            {/* <div className="absolute inset-0 bg-white border-1 border-gray-500  opacity-100 group-hover:bg-gradient-to-r group-hover:from-[#169A47] group-hover:via-[#1F5F5C] group-hover:to-[#042315] group-hover:animate-spin-gradient"></div>
            <div className="absolute inset-1 bg-[#ffffff] rounded-lg"></div> */}
            <div className="absolute inset-0 bg-white border-1 border-gray-200  opacity-100"></div>

            {/* Card Content */}
            <div className="relative z-10 p-4">
              <div className=" justify-items-start">{item.icon}</div>
              <h3 className=" leading-tight   my-2 text-black">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
