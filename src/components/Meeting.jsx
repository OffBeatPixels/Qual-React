"use client";
import React from "react";
import { Boxes } from "./ui/Background-boxes";
import { cn } from "./lib/utils";
import { Link } from "react-router-dom";

export function Meeting() {
  return (
    <div className="h-[50vh] mt-10 relative w-full overflow-hidden  flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1
        className={cn(
          "md:text-4xl text-xl text-black text-center font-bold relative z-20 "
        )}
      >
        See how Qualiinsight can help <br /> your business and quality teams
      </h1>
      <Link
        to="/contact"
        className="inline-block my-8 py-3 px-6 text-lg bg-[#d33e5f] text-white
        font-semibold rounded-lg shadow-lg hover:bg-red-600 transition
        duration-300 relative z-20"
      >
        Book A Meeting
      </Link>
    </div>
  );
}
