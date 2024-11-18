import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { SiCodeblocks } from "react-icons/si";
import { FaBox } from "react-icons/fa";

const cardData = [
  {
    title: "Quality frameworks do not capture broader signals",
    description:
      "Current quality frameworks focus on auditing according to guidelines but often fail to capture vital signals essential for comprehensive operational insight.",
    icon: <FaDatabase size={30} color="21605D" />,
  },
  {
    title:
      "In a multi-vendor environment, there is often a lack of comparative analysis",
    description:
      "In a multi-vendor environment, the lack of comparative analysis impedes effective evaluation and optimization of vendor performance and service quality.",
    icon: <FaRegStarHalfStroke size={30} color="21605D" />,
  },
  {
    title: "Lack of Independent assessment",
    description:
      "The lack of independent assessment is a major barrier to obtaining unbiased evaluations and ensuring strong quality assurance. ",
    icon: <BsFillFileBarGraphFill size={30} color="21605D" />,
  },
  {
    title:
      "The current model is unable to scale beyond the requirements of a quality audit",
    description:
      "The existing framework lacks scalability beyond basic quality audits, limiting its ability to effectively address broader operational and strategic needs.",
    icon: <SiCodeblocks size={30} color="21605D" />,
  },
  {
    title:
      "Quality is often viewed as a cost center rather than a transformation center",
    description:
      "Quality Assurance (QA) is frequently perceived as a cost center rather than a value creator because traditional frameworks focus primarily on defect detection instead of driving transformative initiatives.",
    icon: <FaBox size={30} color="21605D" />,
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
    <section className="  bg-[#ffffff] h-fit md:h-full py-10 text-white   ">
      <h1 className="card-h1 text-3xl md:text-4xl  text-center text-[#000000] font-bold relative z-20">
        Challenges faced by the <br />
        business teams today
      </h1>
      <p className="text-center text-black  text-lg md:mx-14 my-10  font-semibold relative z-20">
        Many businesses struggle to harness the full potential of Quality due to
        outdated frameworks, insufficient comparative analysis, biased
        audits, and a limited understanding of Quality`s diverse applications.
      </p>
      <div className="flex flex-col items-center text-center  justify-center gap-4 px-14  lg:mr-3  lg:px-3 xl:px-20 2xl:mx-60   md:mt-10 md:flex-row   md:pb-10 md:grid md:grid-cols-2 lg:grid-cols-5">
        {cardData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="p-2 md:p-2  xl:p-4   rounded-lg border h-96 w-full  lg:w-52 xl:w-60 border-gray-200 shadow-md bg-[#ffffff]"
          >
            <div className="top-0 mx-20 mb-5 text-center">{item.icon}</div>
            <h3 className="text-lg font-bold mb-2 text-black">{item.title}</h3>
            <p className="text-gray-700 text-sm ">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
