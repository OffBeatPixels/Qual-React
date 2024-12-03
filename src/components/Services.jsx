// import React, { useState, useEffect } from "react";

// import Service1 from "../assets/Service-1.jpg";
// import Service2 from "../assets/Service-2.jpg";
// import Service3 from "../assets/Service-3.jpg";
// import graph1 from "../assets/graph1.webm";
// import Popup from "./Popup";

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

// export default function Services() {
//   return (
//     <section>
//       <div className="pb-8 pt-10">
//         {/* Section Title */}
//         <h3 className="text-4xl   mb-4 ml-20 text-left ">Project Based Services</h3>

//         {/* <video
//           src={graph1}
//           loop
//           autoPlay
//           className="absolute top-48 left-0 h-[70vh]"
//         /> */}
//         {/* Cards Section */}
//         <div className="flex  gap-3 justify-center">
//           {ServiceData.map((item) => (
//             <div
//               key={item.id}
//               className="group space-y-4 w-80 text-center bg-white shadow-2xl p-3"
//             >
//               <div className="flex justify-center items-center">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   loading="lazy"
//                   className="w-full"
//                 />
//               </div>
//               <div>
//                 <p className="text-md flex-shrink-1 text-red-600 mb-2">
//                   {item.name}
//                 </p>
//                 <p className="text-sm text-justify font-normal overflow-hidden">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








import React, { useState, useEffect } from "react";

import Service1 from "../assets/Service-1.jpg";
import Service2 from "../assets/Service-2.jpg";
import Service3 from "../assets/Service-3.jpg";
import graph1 from "../assets/graph1.webm";
import Popup from "./Popup";

const ServiceData = [
  {
    id: 1,
    name: "QA Process Design",
    img: Service1,
    description:
      "For a robust and scalable QA framework that drives elevated outcomes, QualiInsight's End-to-End QA Process Design can help you achieve your goals.Our best-in-class QA system goes beyond industry standards, enhancing operational quality, strengthening customer satisfaction, and supporting continuous improvement.",
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
                you achieve your goals.Our best-in-class QA system goes beyond
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
      "With Qualiinsight as your partner, you’ll achieve streamlined operations, enhanced customer experiences, and a resilient, agile approach to evolving business demands.We implement strategic adjustments that boost efficiency, reduce costs, and enhance your operational flexibility, ensuring you stay competitive and responsive.",
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
      "Qualiinsight’ Advanced Dashboard and AI-Driven Insights service is your comprehensive solution.With expertise in top visualization tools like Power BI, Tableau, Google Data Studio, and automated Excel, we create intuitive, customized dashboards that transform raw data into actionable insights.",
    delay: 0.4,
    text: {
      title: "Service Details",
      sections: [
        {
          content: (
            <div>
              <p>
                Qualiinsight’ Advanced Dashboard and AI-Driven Insights service
                is your comprehensive solution.With expertise in top
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
      "With Qualiinsight as your partner, you’ll not only gain insights to track real-time progress but also establish a KPI framework that includes target-setting, baselining, and seamless integration from source data to actionable dashboards.Our KPI Design and Implementation service ensures every metric is relevant, data-driven, and aligned with business goals, covering critical areas like customer satisfaction, compliance, operational efficiency, and financial performance.",
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
      "Our services establish a structured, data-driven approach that goes beyond one-time optimizations.Our framework ensures each improvement project is aligned with your organization’s strategic objectives, consistently delivering measurable benefits across all areas of your operations—from customer satisfaction and compliance to operational efficiency and cost savings.",
    delay: 0.4,
    text: {
      title: "Service Details",
      sections: [
        {
          content: (
            <div>
              <p>
                Our services establish a structured, data-driven approach that
                goes beyond one-time optimizations.Our framework ensures each
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
    <section className="mx-auto container text-center">
      <h3 className="text-4xl   pt-10 ml-20 text-left ">
        Project-Based Services:
      </h3>
      <p className="text-2xl  ml-20 text-left ">
        Delivering Tailored Solutions for Immediate Impact
      </p>
      <div className="pb-8 pt-10">
        {/* Cards 1 */}
        <div className="flex gap-10 px-40 ">
          <div className="w-1/2 text-lg text-justify hover:scale-105 duration-1000 ">
            <h1 className="text-3xl">1.Processes Aren’t Designed to Scale</h1>
            <p>
              Most workflows are built for the present, not the future.As
              businesses grow, these static processes crumble under pressure,
              limiting innovation and scalability.
            </p>
          </div>
          <img src={Service1} alt="" className="w-96 rounded-xl" />
        </div>

        {/* Cards 2 */}
        <div className="flex mt-14 gap-10 px-40">
          <img src={Service2} alt="" className="w-96 rounded-xl" />
          <div className="w-1/2 text-lg text-justify hover:scale-105 duration-1000 ">
            <h1 className="text-3xl">
              {" "}
              2.Teams Struggle with Invisible Inefficiencies
            </h1>
            <p>
              Hidden bottlenecks and redundant steps often go unnoticed,
              silently eroding productivity and driving up operational costs.
            </p>
          </div>
        </div>

        {/* Cards 3 */}
        <div className="flex mt-14 gap-10 px-40">
          <div className="w-1/2 text-lg text-justify hover:scale-105 duration-1000  ">
            <h1 className="text-3xl">
              3.Customer Experience Suffers from Operational Gaps n
            </h1>
            <p>
              Disjointed processes create inconsistent customer experiences,
              leaving businesses vulnerable to dissatisfaction and churn.
            </p>
          </div>
          <img src={Service3} alt="" className="w-96 rounded-xl" />
        </div>

        {/* Cards 4 */}
        <div className="flex mt-14 gap-10 px-40">
          <img src={Service1} alt="" className="w-96 rounded-xl" />
          <div className="w-1/2 text-lg text-justify hover:scale-105 duration-1000">
            <h1 className="text-3xl">
              {" "}
              4.Decision-Making is Based on Gut, Not Data
            </h1>
            <p>
              Without the right process metrics, leaders are forced to rely on
              intuition instead of actionable insights, leading to missed
              opportunities and reactive strategies.
            </p>
          </div>
        </div>
        {/* Cards 5 */}
        <div className="flex mt-14 gap-10 px-40">
          <div className="w-1/2 text-lg text-justify hover:scale-105 duration-1000  ">
            <h1 className="text-3xl">
              {" "}
              5.Business Agility is Stifled by Outdated Workflows
            </h1>
            <p>
              Legacy systems and rigid processes prevent businesses from
              pivoting quickly, leaving them vulnerable to market disruptions
              and competitive threats.
            </p>
          </div>
          <img src={Service3} alt="" className="w-96 rounded-xl" />
        </div>

        {/* Cards 6*/}
        <div className="flex mt-14 gap-10 px-40">
          <img src={Service1} alt="" className="w-96 rounded-xl" />
          <div className="w-1/2 text-lg text-justify hover:scale-105 duration-1000">
            <h1 className="text-3xl">
              {" "}
              6.Cross-Functional Collaboration Falls Through the Cracks
            </h1>
            <p>
              Processes that don’t integrate seamlessly across departments
              result in siloed operations, poor communication, and missed
              synergies.
            </p>
          </div>
        </div>

        {/* Cards 7 */}
        <div className="flex mt-14 gap-10 px-40">
          <div className="w-1/2 text-lg text-justify hover:scale-105 duration-1000  ">
            <h1 className="text-3xl">
              {" "}
              7.Innovation Takes a Backseat to Routine Tasks
            </h1>
            <p>
              Teams are so focused on keeping the lights on that they lack the
              bandwidth to drive transformative initiatives, stalling business
              growth.
            </p>
           
          </div>
          <img src={Service3} alt="" className="w-96 rounded-xl" />
        </div>
      </div>
    </section>
  );
}