import React, { useState, useEffect } from "react";
import { FcCustomerSupport, FcBarChart } from "react-icons/fc";
import { MdManageSearch } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import Service1 from "../../assets/Service-1.jpg";
import Service2 from "../../assets/Service-2.jpg";
import Service3 from "../../assets/Service-3.jpg";
import graph1 from "../../assets/graph1.webm";
import Popup from "../Popup";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Transition from "../Animations/Transition";
import { Card } from "./Services2";

// const ServiceData = [
//   {
//     id: 1,
//     name: "QA Process Design",
//     img: Service1,
//     description:
//       "For a robust and scalable QA framework that drives elevated outcomes, QualiInsight's End-to-End QA Process Design can help you achieve your goals.Our best-in-class QA system goes beyond industry standards, enhancing operational quality, strengthening customer satisfaction, and supporting continuous improvement.",
//     delay: 0.4,
//     text: {
//       title: "Service Details",
//       sections: [
//         {
//           content: (
//             <div>
//               <p>
//                 For a robust and scalable QA framework that drives elevated
//                 outcomes, QualiInsight's End-to-End QA Process Design can help
//                 you achieve your goals.Our best-in-class QA system goes beyond
//                 industry standards, enhancing operational quality, strengthens
//                 customer satisfaction, and supports continuous improvement.
//               </p>
//             </div>
//           ),
//         },
//       ],
//     },
//   },
//   {
//     id: 2,
//     name: "Process Improvement Consulting",
//     img: Service2,
//     description:
//       "With Qualiinsight as your partner, you’ll achieve streamlined operations, enhanced customer experiences, and a resilient, agile approach to evolving business demands.We implement strategic adjustments that boost efficiency, reduce costs, and enhance your operational flexibility, ensuring you stay competitive and responsive.",
//     delay: 0.4,
//     text: {
//       title: "Service Details",
//       sections: [
//         {
//           content: (
//             <div>
//               <p>
//                 With Qualiinsight as your partner, you’ll achieve streamlined
//                 operations, enhanced customer experiences, and a resilient,
//                 agile approach to evolving business demands.
//               </p>
//               <p>
//                 We implement strategic adjustments that boost efficiency, reduce
//                 costs, and enhance your operational flexibility, ensuring you
//                 stay competitive and responsive.
//               </p>
//             </div>
//           ),
//         },
//       ],
//     },
//   },
//   {
//     id: 3,
//     name: "Advanced Dashboard Design",
//     img: Service1,
//     description:
//       "Qualiinsight’ Advanced Dashboard and AI-Driven Insights service is your comprehensive solution.With expertise in top visualization tools like Power BI, Tableau, Google Data Studio, and automated Excel, we create intuitive, customized dashboards that transform raw data into actionable insights.",
//     delay: 0.4,
//     text: {
//       title: "Service Details",
//       sections: [
//         {
//           content: (
//             <div>
//               <p>
//                 Qualiinsight’ Advanced Dashboard and AI-Driven Insights service
//                 is your comprehensive solution.With expertise in top
//                 visualization tools like Power BI, Tableau, Google Data Studio,
//                 and automated Excel, we create intuitive, customized dashboards
//                 that transform raw data into actionable insights.
//               </p>
//             </div>
//           ),
//         },
//       ],
//     },
//   },
//   {
//     id: 4,
//     name: "KPI Design and Implementation",
//     img: Service3,
//     description:
//       "With Qualiinsight as your partner, you’ll not only gain insights to track real-time progress but also establish a KPI framework that includes target-setting, baselining, and seamless integration from source data to actionable dashboards.Our KPI Design and Implementation service ensures every metric is relevant, data-driven, and aligned with business goals, covering critical areas like customer satisfaction, compliance, operational efficiency, and financial performance.",
//     delay: 0.4,
//     text: {
//       title: "Service Details",
//       sections: [
//         {
//           content: (
//             <div>
//               <p>
//                 With Qualiinsight as your partner, you’ll not only gain insights
//                 to track real-time progress but also establish a KPI framework
//                 that includes target-setting, baselining, and seamless
//                 integration from source data to actionable dashboards.
//               </p>
//               <p>
//                 Our KPI Design and Implementation service ensures every metric
//                 is relevant, data-driven, and aligned with business goals,
//                 covering critical areas like customer satisfaction, compliance,
//                 operational efficiency, and financial performance.
//               </p>
//             </div>
//           ),
//         },
//       ],
//     },
//   },
//   {
//     id: 5,
//     name: "Continuous Improvement Initiatives",
//     img: Service2,
//     description:
//       "Our services establish a structured, data-driven approach that goes beyond one-time optimizations.Our framework ensures each improvement project is aligned with your organization’s strategic objectives, consistently delivering measurable benefits across all areas of your operations—from customer satisfaction and compliance to operational efficiency and cost savings.",
//     delay: 0.4,
//     text: {
//       title: "Service Details",
//       sections: [
//         {
//           content: (
//             <div>
//               <p>
//                 Our services establish a structured, data-driven approach that
//                 goes beyond one-time optimizations.Our framework ensures each
//                 improvement project is aligned with your organization’s
//                 strategic objectives, consistently delivering measurable
//                 benefits across all areas of your operations—from customer
//                 satisfaction and compliance to operational efficiency and cost
//                 savings.
//               </p>
//             </div>
//           ),
//         },
//       ],
//     },
//   },
// ];

const consulting = [
  {
    title: " Process Improvement Consulting",
    details:
      "Identify inefficiencies, streamline workflows, and realign processes to strategic business objectives, boosting efficiency and effectiveness.",
    icon: <FcCustomerSupport size={50} />,
  },
  {
    title: " KPI Development and Implementation",
    details:
      " Establish tailored Key Performance Indicators (KPIs) that provide actionable insights, enabling smarter decision-making and measurable outcomes.",
    icon: <FcBarChart size={50} />,
  },
  {
    title: " Actionable Business and Strategic Insights",
    details:
      "Generate insights that empower businesses to make data-driven decisions, address key challenges, and achieve strategic objectives.",
    icon: <MdManageSearch size={50} color="2A6E2A" />,
  },
  {
    title: "  Vendor and Process Scalability Solutions",
    details:
      " Develop adaptive frameworks that scale effortlessly with your business, ensuring consistency and quality across all operations.",
    icon: <FaRobot size={50} color="2A6E2A" />,
  },
  {
    title: "Accelerate Responsible AGI Development",
    details:
      " Leverage expertise in advanced analytics and ethical practices to accelerate the development and deployment of Responsible Artificial General Intelligence (AGI) solutions.",
    icon: <FaRobot size={50} color="2A6E2A" />,
  },
];

function Services1() {
  return (
    <section className="  text-center bg-gradient-to-b from-[#ffffff]  to-[#ffffff]">
      <h3 className="text-4xl   pt-10  text-center ">Project-Based Services</h3>
      <p className="text-2xl py-5  text-center ">
        Delivering Tailored Solutions for Immediate Impact
      </p>
      <div>
        <div className="grid grid-cols-3  gap-5 shadow-small rounded-xl p-10 md:mx-10">
          {consulting.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Transition(Services1);
