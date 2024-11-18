"use client";
import React from "react";
import { Boxes } from "./Background-boxes";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa6";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden text-black flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1
        className={cn(
          "md:text-6xl text-3xl  text-center font-bold relative z-20 "
        )}
      >
        Quality in your DNA, <br />
        not just your SLA
      </h1>
      <p className="text-center text-xl mt-8  font-semibold relative z-20">
        Unlock Revenue, Minimize Costs, Elevate Customer Experience <br /> &{" "}
        <br />
        Accelerate AGI Implementation <br /> with <br />
        Quality Insights!
      </p>
      <Link className=" md:flex gap-2 md:my-8 mt-2 p-2 md:py-3 md:px-5 md:text-lg bg-[#d33e5f] text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition duration-300 relative z-20">
       Scroll Down to  Learn More
      </Link>
    </div>
  );
}
