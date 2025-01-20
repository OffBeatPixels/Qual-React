import React from "react";
import graph1 from "../assets/graph1.webm";
import { Link } from "react-router-dom";
import Services from "./Offerings/Services1";
import Services2 from "./Offerings/Services2";

export default function Offerings() {
  return (
    <div className="">
      <div>
        <h1 className="text-3xl md:text-4xl text-center py-14   text-black">
          Offerings
        </h1>
        <div className="grid grid-cols-3 ">
          <video src={graph1} loop autoPlay className=" h-fit " />

          <div className=" mt-10">
            <Link
              to="/services1"
              className="text-3xl text-white p-2 rounded-lg bg-[#5f5f5f] transition-all duration-300 hover:border-y-2 hover:border-[#DD4160]  hover:text-black"
            >
              Project Based Services
            </Link>

            <p>
              <ol className="list-disc mt-5 leading-10">
                <li>QA Process Design</li>
                <li>Process Improvement Consulting</li>
                <li>Advanced Dashboard Design</li>
                <li>KPI Design and Implementation</li>
                <li>Continuous Improvement Initiatives</li>
              </ol>
            </p>
          </div>
          <div className=" mt-10 ">
            <Link
              to="/Services2"
              className="text-3xl text-white p-2 rounded-lg bg-[#5f5f5f] transition-all duration-300 hover:border-y-2 hover:border-[#DD4160]  hover:text-black"
            >
              Managed Services
            </Link>
            <p>
              <ol className="list-disc mt-5 leading-10">
                <li>Assessment: Evaluate the current state.</li>
                <li>Report: Share key findings.</li>
                <li>Insights: Provide actionable recommendations.</li>
                <li>Improvement: Enhance processes for excellence.</li>
              </ol>
              {/* By systematically following four key stages Assessment, Report,
              Insights, and Process Improvement, we provide actionable insights
              and measurable enhancements, fostering a culture of ongoing
              innovation and operational excellence. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
