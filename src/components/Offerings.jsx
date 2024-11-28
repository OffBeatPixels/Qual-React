import React from 'react'
import graph1 from "../assets/graph1.webm";
import { Link } from 'react-router-dom';
import Services from './Services';
import Services1 from './Offerings/Services1';

export default function Offerings() {
  return (
    <div>
      <div>
        <h1 className="text-3xl md:text-4xl text-center mt-24 pb-14   text-black">
          Offerings
        </h1>
        <div className="grid grid-cols-3 px-10">
          <video src={graph1} loop autoPlay className=" h-[70vh]" />

          <div className=" mt-10">
            <Link to="/services" className="text-3xl hover:text-blue-500 ">
              Text about Project Based Services
            </Link>
            <p>
              <ol className="list-disc leading-10">
                <li>QA Process Design</li>
                <li>Process Improvement Consulting</li>
                <li>Advanced Dashboard Design</li>
                <li>KPI Design and Implementation</li>
                <li>Continuous Improvement Initiatives</li>
              </ol>
            </p>
          </div>
          <div className=" mt-10">
            <Link to="/services1" className="text-3xl hover:text-blue-500 ">
                Text about Managed Services
              </Link>
            <p >
              {" "}
              
              By systematically following four key stages Assessment, Report,
              Insights, and Process Improvement, we provide actionable insights
              and measurable enhancements, fostering a culture of ongoing
              innovation and operational excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
