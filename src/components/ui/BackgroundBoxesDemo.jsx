"use client";
import React from "react";
import { Boxes } from "./Background-boxes";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";


export function BackgroundBoxesDemo() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-400 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-400 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-6xl text-xl text-white text-center   font-bold relative z-20")}>
        Quality in your DNA, <br />not just your SLA
      </h1>
      <p className="text-center text-xl mt-5 text-white font-semibold relative z-20">
        Unlock Revenue, Minimize Costs, Elevate Customer Experience and <br />
        Accelerate AGI Implementation with Quality Insights!
      </p>
      {/* <Link to="/learn-more"> Learn More</Link> */}
      <button className="inline-block my-8 py-3 px-6 text-lg bg-[#d33e5f] text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition duration-300 relative z-20">
        Learn More
      </button>
    </div>
  );
}
