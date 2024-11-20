import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { SiCodeblocks } from "react-icons/si";
import { FaBox } from "react-icons/fa";
import graph from "../assets/graph.webm"
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
    // icon: <FaDatabase size={30} color="21605D" />,
    icon: <video src={db} alt="Database Icon" className="h-10" autoPlay loop />,
  },
  {
    title:
      "In a multi-vendor environment, there is often a lack of comparative analysis",
    description:
      "In a multi-vendor environment, the lack of comparative analysis impedes effective evaluation and optimization of vendor performance and service quality.",
    // icon: <FaRegStarHalfStroke size={30} color="21605D" />,
    icon: <video src={ca} alt="ca Icon" className="h-10" autoPlay loop />,
  },
  {
    title: "Lack of Independent assessment",
    description:
      "The lack of independent assessment is a major barrier to obtaining unbiased evaluations and ensuring strong quality assurance. ",
    // icon: <BsFillFileBarGraphFill size={30} color="21605D" />,
    icon: <video src={graph} alt="Graph Icon" className="h-10" autoPlay loop />,
  },
  {
    title:
      "The current model is unable to scale beyond the requirements of a quality audit",
    description:
      "The existing framework lacks scalability beyond basic quality audits, limiting its ability to effectively address broader operational and strategic needs.",
    // icon: <SiCodeblocks size={30} color="21605D" />,
    icon: (
      <video src={blocks} alt="blocks Icon" className="h-10" autoPlay loop />
    ),
  },
  {
    title:
      "Quality is often viewed as a cost center rather than a transformation center",
    description:
      "Quality Assurance (QA) is frequently perceived as a cost center rather than a value creator because traditional frameworks focus primarily on defect detection instead of driving transformative initiatives. This narrow approach limits QA's potential to contribute strategically to business success.",
    // icon: <FaBox size={30} color="21605D" />,
    icon: <video src={qa} alt="QA Icon" className="h-10" autoPlay loop />,
  },
];

export default function Card() {
  const cardRefs = useRef([]);

  // useEffect(() => {
  //   if (window.innerWidth > 768) {
  //     cardRefs.current.forEach((card, index) => {
  //       if (index % 2 !== 0 ) {
  //         gsap.to(card, { y: 100, opacity: 1, duration: 1, delay: index * 0.2 });
  //       } else {
  //         gsap.to(card, {
  //           x: 0,opacity: 1,
  //           duration: 1,
  //           delay: index * 0.2,
  //         });
  //       }
  //       gsap.to(card, { x: -10, opacity: 1, duration: 1, delay: index * 0.2 });
  //     });
  //   }
  //   gsap.from(".card-h1", {
  //     y: -20,
  //     opacity: 0,
  //     duration: 1,
  //     ease: "bounce",
  //     scrollTrigger: {
  //       trigger: ".card-section",
  //       scroller:"body",
  //       start:"top 80%",
  //       end:"top 80%",
  //       // markers:true
  //     },
  //   });
  // }, []);

  return (
    <section className="relative bg-[#ffffff] h-fit md:h-full py-10 text-white">
      <h1 className="card-h1 text-3xl md:text-4xl text-center text-[#000000] font-bold relative z-20">
        Challenges faced by the <br />
        business teams today
      </h1>

      <p className="text-center text-black text-lg md:mx-14 mt-4 mb-10 font-semibold relative z-20">
        Many businesses struggle to harness the full potential of Quality due to
        outdated frameworks, insufficient comparative analysis, <br /> biased
        audits, and a limited understanding of Quality’s diverse applications.
      </p>

      {/* SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1800 400"
        className="absolute top-[70vh] md:top-80 inset-0 z-10 pointer-events-none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#8E2DE2", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FF6A00", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M 200 50 C 600 200, 1200 0, 1600 150"
          stroke="url(#line-gradient)"
          fill="none"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>

      {/* Card Grid */}
      <div className="relative z-20 flex overflow-x-auto gap-4 px-4 py-10 lg:px-3 xl:px-20 2xl:mx-60">
        {cardData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="group relative flex-shrink-0 p-2 md:p-2 xl:p104 rounded-lg  w-[85%] sm:w-[70%] md:w-[40%] lg:w-52 xl:w-60 bg-[#ffffff] overflow-hidden"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 bg-white border-8 blur-sm opacity-100 group-hover:bg-gradient-to-r group-hover:from-[#169A47] group-hover:via-[#1F5F5C] group-hover:to-[#042315] group-hover:animate-spin-gradient"></div>
            <div className="absolute inset-1 bg-[#ffffff] rounded-lg"></div>

            {/* Card Content */}
            <div className="relative z-10 p-4">
              <div className="mb-5 justify-items-center">{item.icon}</div>
              <h3 className=" leading-tight font-bold mb-2 text-black">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

