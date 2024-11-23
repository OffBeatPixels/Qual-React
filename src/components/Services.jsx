import React, { useState, useEffect } from "react";

import Service1 from "../assets/Service-1.jpg"
import Service2 from "../assets/Service-2.jpg"
import Service3 from "../assets/Service-3.jpg"
import graph1 from "../assets/graph1.webm"
import Popup from "./Popup";

const ServiceData = [
  {
    id: 1,
    name: "QA Process Design",
    img: Service1,
    description:
      "For a robust and scalable QA framework that drives elevated outcomes, QualiInsight's End-to-End QA Process Design can help you achieve your goals. Our best-in-class QA system goes beyond industry standards, enhancing operational quality, strengthening customer satisfaction, and supporting continuous improvement.",
    delay: 0.4,
    text: {
      title: "Service Details",
      sections: [
        {
          content: (
            <div>
              <p>
                For a robust and scalable QA framework that drives elevated
                outcomes, QualiInsight's End-to-End QA Process Design can help
                you achieve your goals. Our best-in-class QA system goes beyond
                industry standards, enhancing operational quality, strengthens
                customer satisfaction, and supports continuous improvement.
              </p>
            </div>
          ),
        },
      ],
    },
  },
  {
    id: 2,
    name: "Process Improvement Consulting",
    img: Service2,
    description:
      "With Qualiinsight as your partner, you’ll achieve streamlined operations, enhanced customer experiences, and a resilient, agile approach to evolving business demands. We implement strategic adjustments that boost efficiency, reduce costs, and enhance your operational flexibility, ensuring you stay competitive and responsive.",
    delay: 0.4,
    text: {
      title: "Service Details",
      sections: [
        {
          content: (
            <div>
              <p>
                With Qualiinsight as your partner, you’ll achieve streamlined
                operations, enhanced customer experiences, and a resilient,
                agile approach to evolving business demands.
              </p>
              <p>
                We implement strategic adjustments that boost efficiency, reduce
                costs, and enhance your operational flexibility, ensuring you
                stay competitive and responsive.
              </p>
            </div>
          ),
        },
      ],
    },
  },
  {
    id: 3,
    name: "Advanced Dashboard Design",
    img: Service1,
    description:
      "Qualiinsight’ Advanced Dashboard and AI-Driven Insights service is your comprehensive solution. With expertise in top visualization tools like Power BI, Tableau, Google Data Studio, and automated Excel, we create intuitive, customized dashboards that transform raw data into actionable insights.",
    delay: 0.4,
    text: {
      title: "Service Details",
      sections: [
        {
          content: (
            <div>
              <p>
                Qualiinsight’ Advanced Dashboard and AI-Driven Insights service
                is your comprehensive solution. With expertise in top
                visualization tools like Power BI, Tableau, Google Data Studio,
                and automated Excel, we create intuitive, customized dashboards
                that transform raw data into actionable insights.
              </p>
            </div>
          ),
        },
      ],
    },
  },
  {
    id: 4,
    name: "KPI Design and Implementation",
    img: Service3,
    description:
      "With Qualiinsight as your partner, you’ll not only gain insights to track real-time progress but also establish a KPI framework that includes target-setting, baselining, and seamless integration from source data to actionable dashboards. Our KPI Design and Implementation service ensures every metric is relevant, data-driven, and aligned with business goals, covering critical areas like customer satisfaction, compliance, operational efficiency, and financial performance.",
    delay: 0.4,
    text: {
      title: "Service Details",
      sections: [
        {
          content: (
            <div>
              <p>
                With Qualiinsight as your partner, you’ll not only gain insights
                to track real-time progress but also establish a KPI framework
                that includes target-setting, baselining, and seamless
                integration from source data to actionable dashboards.
              </p>
              <p>
                Our KPI Design and Implementation service ensures every metric
                is relevant, data-driven, and aligned with business goals,
                covering critical areas like customer satisfaction, compliance,
                operational efficiency, and financial performance.
              </p>
            </div>
          ),
        },
      ],
    },
  },
  {
    id: 5,
    name: "Continuous Improvement Initiatives",
    img: Service2,
    description:
      "Our services establish a structured, data-driven approach that goes beyond one-time optimizations. Our framework ensures each improvement project is aligned with your organization’s strategic objectives, consistently delivering measurable benefits across all areas of your operations—from customer satisfaction and compliance to operational efficiency and cost savings.",
    delay: 0.4,
    text: {
      title: "Service Details",
      sections: [
        {
          content: (
            <div>
              <p>
                Our services establish a structured, data-driven approach that
                goes beyond one-time optimizations. Our framework ensures each
                improvement project is aligned with your organization’s
                strategic objectives, consistently delivering measurable
                benefits across all areas of your operations—from customer
                satisfaction and compliance to operational efficiency and cost
                savings.
              </p>
            </div>
          ),
        },
      ],
    },
  },
];


export default function Services() {
 
  return (
    <section>
      <div className="pb-8 pt-10">
        {/* Section Title */}
        <h3 className="text-3xl font-bold mb-8 text-left ml-14">
          Project Based Services
        </h3>

        <video
          src={graph1}
          loop
          autoPlay
          className="absolute top-48 left-0 h-[70vh]"
        />
        {/* Cards Section */}
        <div className="grid  grid-cols-2 ml-[40%] gap-5">
          {ServiceData.map((item, index) => (
            <div
              key={item.id}
              className="group space-y-4 w-80 text-center bg-white shadow-2xl p-3"
              // style={{
              //   gridColumn: index < 2 ? `span 1 / span 1` : undefined, // 2 cards in the first row
              //   gridRow: index < 2 ? `1` : `2`, // Explicitly place 3 cards in the second row
              //   justifySelf: index < 2 ? "left" : "center", // Align the first-row cards to the right
              // }}
            >
              <div className="flex justify-center items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-md font-bold text-red-600 mb-2">
                  {item.name}
                </p>
                <p className="text-sm text-justify font-normal overflow-hidden">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
