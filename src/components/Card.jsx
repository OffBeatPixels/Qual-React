import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FcBullish } from "react-icons/fc";
import { FaDatabase } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { SiCodeblocks } from "react-icons/si";
import { FaBox } from "react-icons/fa";
const cardData = [
  {
    title: "Lack of Independent assessment",
    description:
      "The lack of independent assessment is a major barrier to obtaining unbiased evaluations and ensuring strong quality assurance.",
    icon: <FcBullish size={30} color="F87171" />,
  },
  {
    title: "Quality frameworks do not capture broader signals",
    description:
      "Current quality frameworks focus on auditing according to guidelines but often fail to capture vital signals essential for comprehensive operational insight.",
    icon: <FaDatabase size={30} color="green" />,
  },
  {
    title:
      "In a multi-vendor environment, there is often a lack of comparative analysis",
    description:
      "In a multi-vendor environment, the lack of comparative analysis impedes effective evaluation and optimization of vendor performance and service quality.",
    icon: <FaRegStarHalfStroke size={30} color="blue" />,
  },
  {
    title:
      "The current model is unable to scale beyond the requirements of a quality audit",
    description:
      "The existing framework lacks scalability beyond basic quality audits, limiting its ability to effectively address broader operational and strategic needs.",
    icon: <SiCodeblocks size={30} color="violet" />,
  },
  {
    title:
      "Quality is often viewed as a cost center rather than a transformation center",
    description:
      "Quality Assurance (QA) is frequently perceived as a cost center rather than a value creator because traditional frameworks focus primarily on defect detection instead of driving transformative initiatives.",
    icon: <FaBox size={30} color="violet" />,
  },
];

export default function Card() {
  const cardRefs = useRef([]);

  useEffect(() => {
    if (window.innerWidth > 768) {
      cardRefs.current.forEach((card, index) => {
        if (index % 2 === 0 ) {
          gsap.to(card, { y: 200, opacity: 1, duration: 1, delay: index * 0.2 });
        } else {
          gsap.to(card, { x: 0, opacity: 1, duration: 1, delay: index * 0.2 });
        }
        gsap.to(card, { x: -15, opacity: 1, duration: 1, delay: index * 0.2 });
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-600 h-fit md:h-[100vh] gap-4 p-4  md:flex-row md:justify-between md:gap-4 md:pb-32 md:grid md:grid-cols-2 lg:grid-cols-5">
      {cardData.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="p-4 rounded-lg border h-fit w-full md:w-56 xl:w-72 mx-2 border-gray-200 shadow-md bg-white"
        >
          <div className="top-0 right-52">{item.icon}</div>
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p className="text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
