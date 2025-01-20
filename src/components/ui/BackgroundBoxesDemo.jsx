"use client";
import React from "react";
import { Boxes } from "./Background-boxes";
import { cn } from "../lib/utils";
import { Link } from "react-scroll";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import {motion} from "framer-motion"
import { HeroHighlight, Highlight } from "../ui/hero-highlight"
import Banner from "../../assets/Service1.jpg";
import Goals from './../Goals';



export function BackgroundBoxesDemo () {
  
  return (
    // <div
    //   className="h-[90vh]  relative w-full bg-gradient-to-b from-[#b6d5f0] via-[#ffffff] to-[#ffffff] overflow-hidden text-black text-justify flex flex-col justify-center"
    //   style={{
    //     // backgroundImage: `url(${Banner})`,
    //     backgroundPosition: window.innerWidth < 640 ? " " : "top",
    //     backgroundSize: window.innerWidth < 640 ? "150% 50%" : "contain",
    //     // backgroundSize: "contain",
    //     backgroundRepeat: "no-repeat",
    //     position: "relative",
    //   }}
    // >
    //   {/* <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}
    //   {/* <Boxes /> */}
    //   {/* <h1
    //     className={cn(
    //       "text-3xl md:text-5xl  md:top-0  text-center   md:left-[25%]   relative z-20 "
    //     )}
    //   > */}
    //   <h1 className="text-3xl md:text-6xl   text-center  relative z-20 ">
    //     Quality in our <span className="text-[#DA3357]">DNA</span>, <br />
    //     not just your <span className="text-[#DA3357]">SLA</span>
    //   </h1>

    //   <p className="text-wrap   text-center text-2xl mt-8    relative z-20">
    //     Unlock Revenue, Minimize Costs, Elevate Customer Experience <br /> &
    //     Accelerate AI Implementation with{" "}
    //     <span className="text-[#DA3357]">Quality Insights!</span>
    //   </p>
    //   <Link
    //     to="goals-section" // Target id of Goals section
    //     smooth={true}
    //     duration={700}
    //     className="mx-auto mt-10 cursor-pointer"
    //   >
    //     <MdKeyboardDoubleArrowDown color="153A55" size={40} />
    //   </Link>
    // </div>
    <HeroHighlight className="h-[90vh]  relative w-full bg-gradient-to-b from-[#b6d5f0] via-[#ffffff] to-[#ffffff] overflow-hidden text-black text-justify flex flex-col justify-center">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        // className="text-3xl md:text-6xl   text-center  relative z-20 "
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Quality in our
        <Highlight className="text-black dark:text-white">DNA</Highlight> <br />
        not just your
        <Highlight className="text-black dark:text-white">SLA</Highlight>
      </motion.h1>

      <p className="text-wrap   text-center text-2xl mt-8    relative ">
        Unlock Revenue, Minimize Costs, Elevate Customer Experience <br /> &
        Accelerate AI Implementation with{" "}
        <span className="text-[#DA3357]">Quality Insights!</span>
      </p>
      <Link
        to="goals-section" // Target id of Goals section
        smooth={true}
        duration={700}
        className="mx-auto mt-10 cursor-pointer"
      >
        <MdKeyboardDoubleArrowDown color="153A55" size={40} />
      </Link>
    </HeroHighlight>
  );
}
