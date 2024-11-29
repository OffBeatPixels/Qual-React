"use client";
import React from "react";
import { Boxes } from "./Background-boxes";
import { cn } from "../lib/utils";
import { Link } from "react-scroll";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import Banner from "../../assets/Service1.jpg";
import Goals from './../Goals';


export function BackgroundBoxesDemo() {
  
  return (
    <div
      className="h-[90vh]  relative w-full bg-gradient-to-b from-[#b6d5f0] via-[#ffffff] to-[#ffffff] overflow-hidden text-black text-justify flex flex-col justify-center"
      style={{
        // backgroundImage: `url(${Banner})`,
        backgroundPosition: window.innerWidth < 640 ? " " : "top",
        backgroundSize: window.innerWidth < 640 ? "150% 50%" : "contain",
        // backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}
      {/* <Boxes /> */}
      {/* <h1
        className={cn(
          "text-3xl md:text-5xl  md:top-0  text-center   md:left-[25%]   relative z-20 "
        )}
      > */}
      <h1 className="text-3xl md:text-5xl   text-center  relative z-20 ">
        Quality in your DNA, <br />
        not just your SLA
      </h1>

      <p className="text-wrap   text-center text-lg mt-8    relative z-20">
        Unlock Revenue, Minimize Costs, Elevate Customer Experience <br /> &
        <br />
        Accelerate AGI Implementation <br /> with <br /> Quality Insights!
      </p>
      <Link
        to="goals-section" // Target id of Goals section
        smooth={true}
        duration={700}
        className="mx-auto mt-10 cursor-pointer"
      >
        <MdKeyboardDoubleArrowDown color="153A55" size={40} />
      </Link>
    </div>
  );
}
