import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/logo.webp"
import { FaCalendarCheck } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
gsap.registerPlugin(ScrollTrigger);

import {
    goals1,
    goals2,
    goals3,
    goals4,
    goals5,}
     from "../assets/index"

const hoverContent = [
  {
    heading: "Process Consulting: ",
    subHeading: " Optimize Processes, Maximize Impact",
    text: ` Transform workflows and eliminate inefficiencies with tailored process improvement consulting for sustainable operational excellence.`,
    position: "top-[35%] right-0",
  },
  {
    heading: "Elevate Quality:",
    subHeading: "Redefine Standards, Deliver Excellence",
    text: ` Implement world-class QA frameworks that exceed industry benchmarks, ensuring operational consistency, compliance, and customer satisfaction.`,
    position: "top-[10%] right-40",
  },
  {
    heading: "Insights That Empower:",
    subHeading: "Measure, Predict, Transform",
    text: ` Leverage data-driven KPI design and AI-powered dashboards to gain actionable insights and predictive analytics for smarter decisions.`,
    position: "top-[60%] right-24",
  },
  {
    heading: "Continuously Innovate:",
    subHeading: "Build a Future-Ready Organization",
    text: ` Embed a culture of continuous improvement with robust frameworks, innovation councils, and benefit measurement strategies.`,
    position: "top-[60%] left-10",
  },
  {
    heading: "AI at Your Fingertips:",
    subHeading: "Tailored Training, Seamless Deployment",
    text: ` Equip your teams with custom AI/AGI training and deployment solutions to drive agility, scalability, and sustained growth.`,
    position: "top-[25%] left-0",
  },
];
// const Goals = () => {
//     const [focusElement, setFocusElement] = useState(0);
//   const images = [goals1, goals2, goals3, goals4, goals5];
//    const info = ["Delhi", "Mumbai", "Bengaluru", "Kolkata"];
//   const [hover ,setHover] =useState(null)

// // const handleHover =()=>{
// // setHovered(true)
// // }

//   // useEffect(() => {
//   //   const tl = gsap.timeline();
//   //   if (window.innerWidth > 768) {
//   //     tl.fromTo(
//   //       ".g2",
//   //       { opacity: 0, x: -100 },
//   //       {
//   //         opacity: 1,
//   //         x: 0,
//   //         scrollTrigger: {
//   //           trigger: ".goals",
//   //           scroller: "body",
//   //           start: "top 70%",
//   //           end: "top 50%",
//   //           scrub: 2,
//   //         },
//   //       }
//   //     ).fromTo(
//   //       ".g3",
//   //       { opacity: 0, x: -100 },
//   //       {
//   //         opacity: 1,
//   //         x: 0,
//   //         scrollTrigger: {
//   //           trigger: ".goals",
//   //           scroller: "body",
//   //           start: "top 40%",
//   //           end: "top 20%",
//   //           scrub: 2,
//   //         },
//   //       }
//   //     );
//   //   } else {
//   //     tl.fromTo(
//   //       ".g2",
//   //       { opacity: 0, y: -200 },
//   //       {
//   //         opacity: 1,
//   //         y: 0,
//   //         scrollTrigger: {
//   //           trigger: ".goals",
//   //           scroller: "body",
//   //           start: "top 70%",
//   //           end: "top 50%",
//   //           scrub: 2,
//   //         },
//   //       }
//   //     ).fromTo(
//   //       ".g3",
//   //       { opacity: 0, y: -100 },
//   //       {
//   //         opacity: 1,
//   //         y: 0,
//   //         scrollTrigger: {
//   //           trigger: ".goals",
//   //           scroller: "body",
//   //           start: "top 40%",
//   //           end: "top 20%",
//   //           scrub: 2,
//   //         },
//   //       }
//   //     );
//   //   }

//   //   // tl.from(".goals-section p", {
//   //   //   opacity: 0,
//   //   //   y: -200,
//   //   //   duration: 2,
//   //   //   delay: 1,
//   //   // });
//   // }, []);



//   return (
//     <section
//       id="goals-section"
//       className=" relative  pb-20 bg-cover bg-no-repeat   "
//     >
//       <p className="w-full text-4xl  pb-5  text-center">
//         <span className="text-[#296fa8]"> Transforming excellence</span> from a
//         goal to your <br />
//         daily reality with{" "}
//         <span className="text-[#CF7300]">Qualiinsight's QaaS</span>.
//       </p>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         xmlSpace="preserve"
//         viewBox="0 0 500 500"
//         className="w-[52vw] mx-auto font-extrabold relative"
//         onClick={() => {
//           setHover(null);
//         }}
//       >
//         <g id="objects">
//           <linearGradient
//             id="SVGID_00000057124258817781132330000000700500648578427833_"
//             x1="250.093"
//             x2="250.093"
//             y1="322"
//             y2="184.727"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0.041" stopColor="#94ABC3"></stop>
//             <stop offset="1" stopColor="#94ABC3"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000057124258817781132330000000700500648578427833_)"
//             d="M319.095 248.053c0 38.11-30.893 69.002-69.002 69.002s-69.002-30.892-69.002-69.002c0-38.108 30.894-69.001 69.002-69.001 38.109 0 69.002 30.892 69.002 69.001"
//           ></path>
//           <linearGradient
//             id="SVGID_00000030457618418328388150000018171444825362933640_"
//             x1="250.092"
//             x2="250.092"
//             y1="300.237"
//             y2="161.959"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0.025" stopColor="#FFF"></stop>
//             <stop offset="0.995" stopColor="#EBEBEB"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000030457618418328388150000018171444825362933640_)"
//             d="M250.093 307.179c-32.603 0-59.126-26.523-59.126-59.126s26.523-59.124 59.126-59.124 59.125 26.523 59.125 59.124-26.523 59.126-59.125 59.126"
//           ></path>
//           <text
//             fill="#"
//             fontFamily="Raleway-extrabold"
//             fontSize="16"
//             className="font-bold "
//             transform="translate(192 245)"
//           >
//             Transformation
//           </text>
//           <text
//             fill="#"
//             fontFamily="BebasNeueBold"
//             fontSize="16"
//             className="font-bold "
//             transform="translate(206.885 263)"
//           >
//             Excellence
//           </text>

//           <linearGradient
//             id="SVGID_00000106834035774230130410000010904847904469769344_"
//             x1="248.35"
//             x2="248.35"
//             y1="11.781"
//             y2="139.485"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0.01" stopColor="#173B59"></stop>
//             <stop offset="0.995" stopColor="#173B59"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000106834035774230130410000010904847904469769344_)"
//             d="m175.94 135.987 8.393 25.048c18.243-13.767 40.934-21.942 65.499-21.942 21.064 0 40.747 6.015 57.434 16.407l21.22-15.715 14.485-69.851c-72.535-16.946-139.199 9.215-189.241 52.509z"
//           ></path>
//           <linearGradient
//             id="SVGID_00000016761777589817062670000005128897954270990744_"
//             x1="274.628"
//             x2="274.628"
//             y1="-29.741"
//             y2="113.894"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0.73" stopColor="#4d7089"></stop>
//             <stop offset="0.959" stopColor="#4d7089"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000016761777589817062670000005128897954270990744_)"
//             d="M328.793 83.968c0 29.914-24.25 54.164-54.164 54.164s-54.166-24.25-54.166-54.164 24.251-54.165 54.166-54.165 54.164 24.251 54.164 54.165"
//           ></path>
//           <linearGradient
//             id="SVGID_00000057849495223537003290000001742971586585805730_"
//             x1="274.628"
//             x2="274.628"
//             y1="132.268"
//             y2="43.541"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0" stopColor="#173B59"></stop>
//             <stop offset="0.995" stopColor="#90ADC3"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000057849495223537003290000001742971586585805730_)"
//             d="M328.793 80.683c0 29.915-24.25 54.166-54.164 54.166s-54.166-24.251-54.166-54.166 24.251-54.164 54.166-54.164 54.164 24.25 54.164 54.164"
//           ></path>
//           <linearGradient
//             id="SVGID_00000066501729883196824310000008671108144723330700_"
//             x1="274.627"
//             x2="274.627"
//             y1="37.311"
//             y2="138.999"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0.025" stopColor="#FFF"></stop>
//             <stop offset="0.995" stopColor="#EBEBEB"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000066501729883196824310000008671108144723330700_)"
//             d="M274.629 124.964c-24.418 0-44.282-19.865-44.282-44.281 0-24.415 19.864-44.28 44.282-44.28 24.415 0 44.279 19.864 44.279 44.28 0 24.417-19.864 44.281-44.279 44.281"
//             onMouseEnter={() => {
//               setHover(1);
//             }}
//           ></path>
//           {/* Elevate Quality Icon */}
//           <g>
//             <path
//               transform="translate(262, 45)"
//               d="M12,24c-1.611,0-3.131-.667-4.217-1.82-1.578,.043-3.129-.555-4.269-1.694-1.139-1.14-1.741-2.686-1.695-4.269C-.582,14.068-.582,9.932,1.819,7.783c-.046-1.583,.556-3.129,1.695-4.269,1.141-1.14,2.686-1.752,4.269-1.695,2.148-2.402,6.286-2.402,8.434,0,1.571-.057,3.128,.555,4.269,1.694,1.139,1.14,1.741,2.686,1.695,4.269,2.401,2.149,2.401,6.285,0,8.434,.046,1.583-.556,3.129-1.695,4.269-1.141,1.14-2.696,1.738-4.269,1.695-1.086,1.153-2.605,1.82-4.217,1.82Zm-3.563-4.897c.493,0,.962,.243,1.244,.662,1.031,1.628,3.608,1.628,4.639,0,.337-.499,.937-.752,1.53-.634,.92,.178,1.857-.108,2.515-.767,.657-.658,.944-1.598,.767-2.515-.114-.591,.135-1.193,.634-1.529,1.628-1.031,1.628-3.609,0-4.64-.499-.336-.748-.938-.634-1.529,.178-.917-.109-1.857-.767-2.515-.658-.658-1.595-.944-2.515-.767-.587,.12-1.193-.134-1.53-.634-1.031-1.628-3.608-1.628-4.639,0-.336,.499-.937,.752-1.53,.634-.919-.178-1.856,.109-2.515,.767-.657,.658-.944,1.598-.767,2.515,.114,.591-.135,1.193-.634,1.529-1.628,1.031-1.628,3.609,0,4.64,.499,.336,.748,.938,.634,1.529-.178,.917,.109,1.857,.767,2.515,.659,.658,1.596,.945,2.515,.767,.095-.019,.191-.028,.286-.028Zm4.563-3.905l4-3.58c.617-.552,.67-1.501,.118-2.118-.553-.617-1.501-.671-2.118-.117l-4.049,3.638c-.031-.032-1.989-1.671-1.989-1.671-.635-.531-1.583-.447-2.112,.188-.532,.636-.447,1.582,.188,2.113l1.847,1.544c.558,.531,1.286,.822,2.06,.822,.8,0,1.551-.311,2.056-.819Z"
//             />
//           </g>
//           <text transform="translate(243.863 96.013)">
//             <tspan
//               x="8"
//               y="-7"
//               fill="#"
//               fontFamily="Raleway-Medium"
//               fontSize="13"
//               className="font-bold leading-6"
//             >
//               Elevate
//             </tspan>
//             <tspan
//               x="7"
//               y="10"
//               fill="#"
//               fontFamily="Raleway-Medium"
//               fontSize="13"
//               className="font-bold leading-6"
//             >
//               Quality
//             </tspan>
//           </text>

//           <linearGradient
//             id="SVGID_00000013902993248744404930000004420467486649866411_"
//             x1="482.953"
//             x2="482.953"
//             y1="426.095"
//             y2="553.8"
//             gradientTransform="rotate(72.002 652.252 293.749)"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0" stopColor="#FFCB52"></stop>
//             <stop offset="0.995" stopColor="#FBB03B"></stop>
//           </linearGradient>
//           <path
//             fill="#ffde88"
//             d="m333.58 143.148-21.229 15.721c18.731 13.098 33.517 32.15 41.108 55.514 6.51 20.033 6.872 40.611 2.144 59.693l21.504 15.324 70.907-7.808c-6.297-74.224-51.779-129.54-108.417-163.753z"
//           ></path>
//           <path
//             fill="#FDBA44"
//             d="M430.287 272.444c-28.449 9.244-59.007-6.325-68.252-34.774-9.244-28.453 6.326-59.009 34.776-68.253s59.008 6.326 68.251 34.778c9.245 28.449-6.325 59.006-34.775 68.249"
//           ></path>
//           <linearGradient
//             id="SVGID_00000105428721375541725320000006430454305858360716_"
//             x1="368.444"
//             x2="442.797"
//             y1="246.355"
//             y2="205.595"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0" stopColor="#F6E4B6"></stop>
//             <stop offset="0.995" stopColor="#F6E4B6"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000105428721375541725320000006430454305858360716_)"
//             d="M433.41 271.43c-28.449 9.243-59.007-6.324-68.251-34.776-9.244-28.45 6.325-59.008 34.777-68.251 28.448-9.245 59.007 6.325 68.25 34.776 9.246 28.449-6.325 59.007-34.776 68.251"
//           ></path>
//           <linearGradient
//             id="SVGID_00000030466137117452520440000013328663639851290805_"
//             x1="509.229"
//             x2="509.229"
//             y1="451.628"
//             y2="553.312"
//             gradientTransform="rotate(72.002 652.252 293.749)"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0.025" stopColor="#FFF"></stop>
//             <stop offset="0.995" stopColor="#EBEBEB"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000030466137117452520440000013328663639851290805_)"
//             d="M374.56 233.601c-7.545-23.222 5.208-48.253 28.431-55.798 23.221-7.545 48.252 5.209 55.796 28.43 7.546 23.221-5.208 48.251-28.431 55.797-23.22 7.544-48.253-5.21-55.796-28.429"
//             onMouseEnter={() => {
//               setHover(2);
//             }}
//           ></path>
//           <text transform="translate(392.908 232)">
//             <tspan
//               x="-5"
//               y="0"
//               fill="#"
//               fontFamily="Raleway-Medium"
//               fontSize="13"
//               className="font-bold leading-6"
//             >
//               Process
//             </tspan>
//             <tspan
//               x="-10"
//               y="14"
//               fill="#"
//               fontFamily="Raleway-LightItalic"
//               fontSize="13"
//               className="font-bold leading-6"
//             >
//               consulting
//             </tspan>
//           </text>
//           {/* <path
//             fill="none"
//             stroke="#FBB03B"
//             strokeLinecap="round"
//             strokeMiterlimit="10"
//             d="M431.733 199.023c-.328.517-1.041.616-1.474.184l-6.05-6.048c-.431-.432-.331-1.145.184-1.472a5.32 5.32 0 0 1 6.604.737 5.324 5.324 0 0 1 .736 6.599zm-1.85 19.93a1.85 1.85 0 0 1-1.648 2.673 1.85 1.85 0 0 1-1.653-1.021l-1.552-3.097a13.65 13.65 0 0 1-8.412 2.891c-.052 0-.101-.007-.15-.007a13.66 13.66 0 0 1-8.632-3.185l-1.704 3.398a1.85 1.85 0 0 1-1.653 1.021 1.848 1.848 0 0 1-1.649-2.673l2.36-4.701a13.6 13.6 0 0 1-2.286-7.564c0-7.509 6.072-13.623 13.565-13.706.05 0 .099-.007.15-.007 7.563 0 13.716 6.154 13.716 13.714a13.63 13.63 0 0 1-2.587 8.001zm-3.245-12.265c0-5.527-4.493-10.02-10.021-10.02-.052 0-.101.006-.15.007-5.457.083-9.87 4.538-9.87 10.013s4.413 9.933 9.87 10.014c.05.001.099.008.15.008 5.528 0 10.021-4.495 10.021-10.022zm-10.021-5.11a1 1 0 0 0-.15.015 1.05 1.05 0 0 0-.903 1.038v4l-4.26 5.008a1.06 1.06 0 0 0 .121 1.489 1.057 1.057 0 0 0 1.488-.119l3.555-4.183.822-.97c.232-.193.384-.48.384-.806v-4.419a1.056 1.056 0 0 0-1.057-1.053zm-14.264-9.155a5.32 5.32 0 0 0-.684 6.686c.314.476 1.008.51 1.409.107l6.061-6.062c.432-.43.332-1.138-.182-1.465a5.314 5.314 0 0 0-6.604.734z"
//           ></path> */}
//           {/* Streamline Icon */}
//           <path
//             transform="translate(405, 190)"
//             d="M24,23c0,.552-.448,1-1,1H3c-1.654,0-3-1.346-3-3V1C0,.448,.448,0,1,0s1,.448,1,1V21c0,.551,.449,1,1,1H23c.552,0,1,.448,1,1Zm-3-18h-4c-.552,0-1,.448-1,1s.448,1,1,1h3.563l-4.857,4.707c-.377,.378-1.036,.378-1.413,0-.041-.04-1.239-.893-1.239-.893-1.138-1.073-3.077-1.033-4.162,.051l-4.586,4.414c-.398,.383-.41,1.016-.027,1.414,.197,.204,.458,.307,.721,.307,.25,0,.5-.093,.693-.279l4.6-4.428c.377-.378,1.036-.378,1.413,0,.041,.04,1.239,.893,1.239,.893,1.139,1.074,3.076,1.036,4.164-.054l4.89-4.74v3.607c0,.552,.448,1,1,1s1-.448,1-1v-4c0-1.654-1.346-3-3-3Z"
//           />

//           <linearGradient
//             id="SVGID_00000147911194658856914340000011550493519070322062_"
//             x1="949.943"
//             x2="949.943"
//             y1="331.922"
//             y2="459.624"
//             gradientTransform="rotate(143.998 652.637 294.139)"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0.005" stopColor="#98D14B"></stop>
//             <stop offset="1" stopColor="#8CC63F"></stop>
//           </linearGradient>
//           <path
//             fill="#ec7f2a"
//             d="m375.481 295.285-21.512-15.332c-6.668 21.861-20.218 41.811-40.093 56.252-17.041 12.381-36.5 19.085-56.108 20.484l-7.931 25.186 29.337 65.025c68.645-28.927 107.199-89.275 122.236-153.714z"
//           ></path>
//           <path
//             fill="#a05114"
//             d="M282.398 427.214c-17.583-24.201-12.218-58.075 11.983-75.657 24.202-17.585 58.074-12.219 75.657 11.982 17.584 24.201 12.219 58.074-11.983 75.657-24.201 17.584-58.074 12.219-75.657-11.982"
//           ></path>
//           <linearGradient
//             id="SVGID_00000064349524463935817650000001679465107559759749_"
//             x1="291.178"
//             x2="364.036"
//             y1="345.303"
//             y2="449.216"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0" stopColor="#df6708"></stop>
//             <stop offset="1" stopColor="#df6708"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000064349524463935817650000001679465107559759749_)"
//             d="M284.329 429.87c-17.583-24.2-12.22-58.073 11.982-75.657s58.075-12.219 75.659 11.984c17.582 24.199 12.218 58.072-11.984 75.656-24.201 17.586-58.074 12.218-75.657-11.983"
//           ></path>
//           <linearGradient
//             id="SVGID_00000008866913459198499520000009042352339712490142_"
//             x1="976.22"
//             x2="976.22"
//             y1="357.451"
//             y2="459.139"
//             gradientTransform="rotate(143.998 652.637 294.139)"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0.025" stopColor="#FFF"></stop>
//             <stop offset="0.995" stopColor="#EBEBEB"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000008866913459198499520000009042352339712490142_)"
//             d="M302.121 362.21c19.754-14.353 47.501-9.957 61.852 9.797 14.352 19.753 9.957 47.499-9.796 61.85-19.753 14.353-47.498 9.958-61.851-9.795-14.351-19.753-9.957-47.502 9.795-61.852"
//             onMouseEnter={() => {
//               setHover(3);
//             }}
//           ></path>
//           <text transform="translate(298 408)">
//             <tspan
//               x="-10"
//               y="3"
//               fill="#"
//               fontFamily="Raleway-Medium"
//               fontSize="13"
//               className="font-bold leading-6"
//             >
//               Insights That
//             </tspan>
//             <tspan
//               x="1"
//               y="18"
//               fill="#"
//               fontFamily="Raleway-LightItalic"
//               fontSize="13"
//               className="font-bold leading-6"
//             >
//               Empower
//             </tspan>
//           </text>
//           {/* Insights icon */}
//           {/* <g
//             stroke="#DF6708"
//             strokeMiterlimit="10"
//             transform="translate(52, 312)"
//           >
//             <path
//               fill="none"
//               d="m282.911 66.238.188-.308q.208-.343.388-.709.118-.234.228-.473l.041-.104a8 8 0 0 0 .358-.968l-.015-.002a9.8 9.8 0 0 0 .414-2.826c0-5.461-4.425-9.888-9.887-9.888-5.461 0-9.887 4.427-9.887 9.888 0 .983.148 1.931.415 2.826l-.014.002c.093.328.218.65.357.968q.018.051.044.105.108.237.227.471.181.363.388.709.093.155.185.308c.036.052.067.107.101.158 1.328 2.099 3.054 3.941 3.168 5.509 0 .926-.286 2.254 1.509 2.254h7.015c1.795 0 1.509-1.328 1.509-2.254.116-1.568 1.841-3.41 3.169-5.509.036-.05.067-.105.099-.157z"
//             ></path>
//             <path
//               fill="#DF6708"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m270.095 79.739 9.068-2.918M270.095 82.657l9.068-2.918M270.095 85.575l9.068-2.918"
//             ></path>
//             <path
//               fill="none"
//               d="M275.898 74.69c-.142-6.678-.52-10.758 3.404-13.478 2.274-1.575 3.291 2.455-.74 2.245-5.288-.277-5.766-4.908-3.935-4.908 1.833 0 1.353 4.631-3.933 4.908-4.031.209-3.015-3.82-.741-2.245 3.924 2.72 3.545 6.799 3.405 13.478"
//             ></path>
//             <path
//               fill="#FFF"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m256.678 68.532 5.538-1.911M256.21 56.716l5.603 1.706M262.777 46.882l3.53 4.673M273.87 42.786l.11 5.856M285.254 45.991l-3.355 4.802M292.578 55.277l-5.534 1.914M293.045 67.094l-5.605-1.706"
//             ></path>
//           </g> */}

//           <path
//             transform="translate(315,367)"
//             d="m21.867,23.988l-5.944-5.943c-1.707,1.263-3.759,1.956-5.923,1.956C4.486,20,0,15.514,0,10S4.484.002,9.996,0c.001,0,.003,0,.004,0C12.112,0,14.071.662,15.687,1.785l-1.977,2.29c-1.077-.677-2.346-1.075-3.709-1.075h0c-3.859,0-7,3.14-7,7,0,.638.093,1.252.254,1.84l4.64-5.568,3.521,3.521L19.859.014l2.27,1.961-10.555,12.221-3.479-3.479-3.294,3.954c1.282,1.426,3.135,2.33,5.2,2.33,1.876,0,3.638-.732,4.961-2.062,0,0,0-.002.001-.002,1.056-1.061,1.723-2.405,1.947-3.858l2.837-3.285c.161.711.254,1.448.254,2.207,0,2.163-.692,4.216-1.955,5.924l5.944,5.943-2.121,2.121Z"
//           />

//           <linearGradient
//             id="SVGID_00000148632012637901452470000013411009166135448491_"
//             x1="1004.312"
//             x2="1004.312"
//             y1="-142.037"
//             y2="-14.329"
//             gradientTransform="rotate(-143.998 652.803 293.965)"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0" stopColor="#a2cef0"></stop>
//             <stop offset="0.99" stopColor="#a2cef0"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000148632012637901452470000013411009166135448491_)"
//             d="m243.739 382.149 7.937-25.196c-22.854.413-46.015-6.31-65.889-20.749-17.041-12.382-29.431-28.816-36.822-47.031l-26.403.24-52.776 47.995c48.722 56.346 118.031 74.364 183.963 68.753z"
//           ></path>
//           <path
//             fill="#005C99"
//             d="M89.504 334.391c17.584-24.202 51.457-29.567 75.658-11.984 24.203 17.584 29.567 51.457 11.983 75.658-17.585 24.202-51.456 29.566-75.657 11.981-24.202-17.582-29.566-51.454-11.984-75.655"
//           ></path>
//           <linearGradient
//             id="SVGID_00000116222237849713517740000015774619034395347125_"
//             x1="167.089"
//             x2="90.944"
//             y1="323.111"
//             y2="420.756"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0" stopColor="#a2cef0"></stop>
//             <stop offset="0.99" stopColor="#a2cef0"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000116222237849713517740000015774619034395347125_)"
//             d="M87.574 337.047c17.582-24.202 51.456-29.567 75.657-11.983 24.202 17.584 29.566 51.456 11.983 75.657s-51.455 29.568-75.658 11.983c-24.201-17.583-29.566-51.458-11.982-75.657"
//           ></path>
//           <linearGradient
//             id="SVGID_00000116224391923178364480000017855644972235112616_"
//             x1="1030.589"
//             x2="1030.589"
//             y1="-116.505"
//             y2="-14.818"
//             gradientTransform="rotate(-143.998 652.803 293.965)"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0.025" stopColor="#FFF"></stop>
//             <stop offset="0.995" stopColor="#EBEBEB"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000116224391923178364480000017855644972235112616_)"
//             d="M157.421 333.06c19.753 14.352 24.148 42.099 9.795 61.852-14.351 19.753-42.097 24.146-61.848 9.796-19.754-14.352-24.149-42.098-9.798-61.851s42.099-24.149 61.851-9.797"
//             onMouseEnter={() => {
//               setHover(4);
//             }}
//           ></path>
//           <text transform="translate(94 380)">
//             <tspan
//               x="-5"
//               y="0"
//               fill="#"
//               fontFamily="Raleway-Medium"
//               fontSize="13"
//               className="font-bold leading-6"
//               fil
//             >
//               Continuously
//             </tspan>
//             <tspan
//               x="10"
//               y="14"
//               fill="#"
//               fontFamily="Raleway-LightItalic"
//               fontSize="13"
//               className="font-bold leading-6"
//             >
//               Innovate
//             </tspan>
//           </text>
//           {/* Innovate icon */}
//           <path
//             transform="translate(-130, 40) scale(0.8)"
//             d="M321.919 383.426a6.23 6.23 0 0 1 12.46 0 6.23 6.23 0 0 1-12.46 0m4.171-15.453c-.568 0-.899.526-1.028 1.03l-.376 1.5a13.4 13.4 0 0 0-3.22 1.336l-1.331-.796c-.244-.146-.539-.253-.817-.253a.88.88 0 0 0-.64.253l-2.911 2.914c-.401.403-.243.986 0 1.455l.792 1.319a13.3 13.3 0 0 0-1.344 3.232l-1.488.371c-.505.129-1.029.462-1.029 1.028v4.124c0 .569.524.867 1.029 1.028l1.488.373c.309 1.146.76 2.228 1.344 3.232l-.792 1.317c-.267.449-.401 1.054 0 1.457l2.911 2.912a.85.85 0 0 0 .617.247c.281 0 .579-.109.84-.247l1.331-.796a13.3 13.3 0 0 0 3.22 1.337l.376 1.5c.129.502.46 1.029 1.028 1.029h4.121c.567 0 .868-.527 1.031-1.029l.373-1.5a13.3 13.3 0 0 0 3.223-1.337l1.324.796c.264.138.563.247.844.247a.83.83 0 0 0 .614-.247l2.913-2.912c.404-.403.265-1.008 0-1.457l-.793-1.317a13.3 13.3 0 0 0 1.344-3.232l1.488-.373c.506-.161 1.029-.459 1.029-1.028v-4.124c0-.566-.523-.899-1.029-1.028l-1.488-.371a13.3 13.3 0 0 0-1.344-3.232l.793-1.319c.243-.469.404-1.052 0-1.455l-2.913-2.914a.87.87 0 0 0-.635-.253c-.283 0-.577.107-.823.253l-1.324.796c-1-.577-2.08-1.028-3.223-1.336l-.373-1.5c-.163-.504-.464-1.03-1.031-1.03z"
//           ></path>

//           <linearGradient
//             id="SVGID_00000120558455080001094180000016548163872611061151_"
//             x1="569.867"
//             x2="569.867"
//             y1="-339.607"
//             y2="-211.912"
//             gradientTransform="rotate(-72.002 652.4 293.61)"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0" stopColor="#cf7300"></stop>
//             <stop offset="1" stopColor="#cf7300"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000120558455080001094180000016548163872611061151_)"
//             d="m120.416 283.698 26.417-.241c-7.456-21.605-8.219-45.712-.627-69.075 6.508-20.033 18.311-36.893 33.35-49.552l-8.389-25.037-61.954-35.362c-38.531 63.749-34.251 135.232-8.54 196.204z"
//           ></path>
//           <path
//             fill="#9b5803"
//             d="M118.178 122.252c28.449 9.245 44.02 39.801 34.776 68.252s-39.802 44.02-68.252 34.776-44.021-39.802-34.775-68.252c9.243-28.451 39.801-44.02 68.251-34.776"
//           ></path>
//           <linearGradient
//             id="SVGID_00000137844659689160833590000003634343677492981133_"
//             x1="145.7"
//             x2="23.868"
//             y1="189.126"
//             y2="147.023"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0" stopColor="#cf7300"></stop>
//             <stop offset="1" stopColor="#cf7300"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000137844659689160833590000003634343677492981133_)"
//             d="M115.054 121.237c28.45 9.244 44.021 39.801 34.777 68.252s-39.802 44.02-68.253 34.775c-28.449-9.243-44.02-39.801-34.775-68.251 9.243-28.45 39.801-44.02 68.251-34.776"
//           ></path>
//           <linearGradient
//             id="SVGID_00000127760472586825139650000015736683582679625372_"
//             x1="596.144"
//             x2="596.144"
//             y1="-314.08"
//             y2="-212.397"
//             gradientTransform="rotate(-72.002 652.4 293.61)"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop offset="0.025" stopColor="#FFF"></stop>
//             <stop offset="0.995" stopColor="#EBEBEB"></stop>
//           </linearGradient>
//           <path
//             fill="url(#SVGID_00000127760472586825139650000015736683582679625372_)"
//             d="M140.43 186.435c-7.545 23.221-32.575 35.974-55.796 28.429-23.222-7.544-35.976-32.575-28.431-55.796s32.574-35.975 55.795-28.43c23.223 7.545 35.977 32.576 28.432 55.797"
//             onMouseEnter={() => {
//               setHover(5);
//             }}
//           ></path>
//           <text transform="translate(67 175)">
//             <tspan
//               x="-3"
//               y="-3"
//               fill="#"
//               fontFamily="Raleway-Medium"
//               fontSize="13"
//               className="font-bold leading-6"
//             >
//               AI insights
//             </tspan>
//             <tspan
//               x="8"
//               y="11"
//               fill="#"
//               fontFamily="Raleway-LightItalic"
//               fontSize="13"
//               className="font-bold leading-6"
//             >
//               at your
//             </tspan>
//             <tspan
//               x="0"
//               y="25"
//               fill="#"
//               fontFamily="Raleway-LightItalic"
//               fontSize="13"
//               className="font-bold leading-6"
//             >
//               Fingertips
//             </tspan>
//           </text>
//           {/* Fingertips icon */}
//           {/* <g
//             fill="none"
//             stroke="#cf7300"
//             strokeLinecap="round"
//             strokeMiterlimit="10"
//           >
//             <path d="M103.936 156.136a6.527 6.527 0 1 1-2.515-2.549"></path>
//             <path d="M108.81 151.261a13.23 13.23 0 0 1 2.686 8.011c0 7.339-5.947 13.287-13.286 13.287-7.337 0-13.284-5.948-13.284-13.287s5.947-13.287 13.284-13.287a13.2 13.2 0 0 1 8.076 2.736M112.45 145.088l-14.213 14.211M110.301 141.613l-.662 6.286M113.111 138.802l-.662 6.285M115.923 147.237l-6.284.662M118.735 144.425l-6.286.662"></path>
//           </g> */}

//           {/* <path
//             transform="translate(85,140)"
//             d="m9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5c0,1.025-.617,1.906-1.5,2.291v2.327c-.322-.073-.655-.118-1-.118s-.678.045-1,.118v-2.327c-.883-.386-1.5-1.266-1.5-2.291Zm-3.758,6.169l2.303,1.733c.106-.706.396-1.351.82-1.886l-1.929-1.452c.042-.182.065-.37.065-.565,0-1.381-1.119-2.5-2.5-2.5s-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5c.452,0,.876-.121,1.242-.331Zm8.258,7.792v-5.355c0-.996-.681-1.92-1.664-2.08-1.253-.204-2.336.758-2.336,1.973v9.817c-1.076-.886-2.111-1.752-2.145-1.784-.922-.861-2.373-.813-3.235.109-.863.923-.819,2.372.098,3.23l1.821,1.628h16.462v-4l-9-3.538Zm1.927-6.225l2.236-1.625c.387.245.845.388,1.337.388,1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5c0,.156.015.307.042.455l-1.997,1.451c.439.514.749,1.141.882,1.831Z"
//           /> */}
//           <g transform="translate(85,134)">
//             <TbHandClick size={25} />
//           </g>
//         </g>
//       </svg>
//       {/* Render Hover Content Dynamically */}
//       {hover !== null && (
//         <div
//           className={`absolute w-96 text-justify p-5 bg-white rounded-2xl border-2 ${
//             hoverContent[hover - 1].position
//           }`}
//         >
//           <p className="sm:text-[18px] text-[14px] font-bold  ">
//             {" "}
//             {hoverContent[hover - 1].heading}
//           </p>
//           <p className="sm:text-[16px] text-[12px] font-semibold  ">
//             {" "}
//             {hoverContent[hover - 1].subHeading}
//           </p>
//           {hoverContent[hover - 1].text}
//         </div>
//       )}

//       <p className="md:w-1/2 text-xl md:text-2xl pt-10 mx-auto text-center">
//         We embed <span className="text-[#DA3357]">top-tier</span> quality into
//         every product, service, and process, creating a foundation for
//         <span className="text-[#DA3357]"> operational excellence</span>,{" "}
//         <span className="text-[#DA3357]">measurable outcomes</span>, and{" "}
//         <span className="text-[#DA3357]">transformative business growth</span>
//       </p>
//       <div className="carousel flex">
//         <FancyCarousel
//           images={images}
//           carouselRadius={400}
//           peripheralImageRadius={100}
//           centralImageRadius={200}
//           focusElementStyling={{ border: "2px solid #ba4949" }}
//           autoRotateTime={3}
//           borderWidth={4}
//           borderHexColor={"1c364f"}
//           setFocusElement={setFocusElement}
//         />
//         <div className="mt-40">
//           <p> {info[focusElement]} </p>
//         </div>
//       </div>
//     </section>
//   );
// };
const Goals = () => {
  const [focusElement, setFocusElement] = useState(0);
  const images = [goals1, goals2, goals3, goals4, goals5];

  return (
    <section
      id="goals-section"
      className="relative min-h-fit  p-24 bg-center bg-no-repeat bg-white"
      style={{
        // zIndex: -1,
      }}
    >
      {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[focusElement]})`,
          opacity: 0.3, // Set the opacity of the background image
          zIndex: -1,
        }}
      ></div> */}

      <div className="relative  container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-1">
          {/* Carousel Section */}
          <div className="w-full md:w-1/2  flex justify-center">
            <FancyCarousel
              images={images}
              carouselRadius={200}
              peripheralImageRadius={50}
              centralImageRadius={80}
              focusElementStyling={{ border: "2px solid #ba4949" }}
             
              borderWidth={3}
              borderHexColor={"1c364f"}
              setFocusElement={setFocusElement}
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="p-6 bg-white ml-40 mb-40 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-xl font-semibold text-gray-800">
                {hoverContent[focusElement].heading}
              </h2>
              <h3 className="text-lg text-gray-600 mt-2">
                {hoverContent[focusElement].subHeading}
              </h3>
              <p className="text-gray-700 mt-4">
                {hoverContent[focusElement].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Goals;
