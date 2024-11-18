// import React from "react";

// const Info = () => {
//   return (
//     <section classNameName="flex ">
//       <svg
//         id="connected-circles"
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 1800 300" // Adjusted viewBox to fit a horizontal layout
//         preserveAspectRatio="xMidYMid meet"
//       >
//         <defs>
//           <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <stop
//               offset="0%"
//               style={{ stopColor: "#8E2DE2", stopOpacity: 1 }}
//             />
//             <stop
//               offset="100%"
//               style={{ stopColor: "#FF6A00", stopOpacity: 1 }}
//             />
//           </linearGradient>
//         </defs>

//         <path
//           id="path"
//           d="M 100 150 Q 250 100, 450 150 T 800 150 T 1280 150 Q 1500 150, 1700 150"
//           stroke="url(#gradient)"
//           fill="none"
//           strokeWidth="5"
//         />

//         <circle
//           classNameName="circle1"
//           cx="100"
//           cy="150"
//           r="20"
//           fill="white"
//           stroke="url(#gradient)"
//           strokeWidth="5"
//         />
//         <circle
//           classNameName="circle2"
//           cx="500"
//           cy="150"
//           r="20"
//           fill="white"
//           stroke="url(#gradient)"
//           strokeWidth="5"
//         />
//         <circle
//           classNameName="circle3"
//           cx="900"
//           cy="150"
//           r="20"
//           fill="white"
//           stroke="url(#gradient)"
//           strokeWidth="5"
//         />
//         <circle
//           classNameName="circle4"
//           cx="1300"
//           cy="150"
//           r="20"
//           fill="white"
//           stroke="url(#gradient)"
//           strokeWidth="5"
//         />
//         <circle
//           classNameName="circle5"
//           cx="1700"
//           cy="150"
//           r="20"
//           fill="white"
//           stroke="url(#gradient)"
//           strokeWidth="5"
//         />
//       </svg>
//     </section>
    
import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';

const Info = () => {
  useEffect (()=>{
    gsap.to(".circle1", {
      y: -200,
      duration: 2,
      ease: "bounce.out",
    });

    gsap.to(".circle3", {
      y: -200,
      duration: 2,
      ease: "bounce.out",
    });

    gsap.to(".circle5", {
      y: -200,
      duration: 2,
      ease: "bounce.out",
    });

    // gsap.to("#curve", {
    //     x: -200,
    //     y: 100,
    //     // rotate: 10,
    // })
  })
  return (
    <section className="info flex justify-center items-center h-screen w-screen bg-transparent overflow-visible relative">
      <svg
        id="connected-circles"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1800 200"
        preserveAspectRatio="xMidYMid meet"
        className="w-4/5 h-full overflow-visible"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#8E2DE2", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FF6A00", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          id="path"
          d="M 142 -12 q 26 26 455 386 L 1042 5 T 1488 374 L 1829 13"
          stroke="url(#gradient)"
          fill="none"
          strokeWidth="5"
        />
        {/* <path id="path" d="M 100 5 Q 120 0, 350 150 T 800 100 T 1280 200 Q 1500 300, 1700 10" stroke="url(#gradient)" fill="none" strokeWidth="5"  /> */}
        <circle
          className="circle1"
          cx="100"
          cy="200"
          r="80"
          fill="white"
          stroke="url(#gradient)"
          strokeWidth="5"
        />
        <circle
          className="circle2"
          cx="500"
          cy="200"
          r="80"
          fill="white"
          stroke="url(#gradient)"
          strokeWidth="5"
        />
        <circle
          className="circle3"
          cx="950"
          cy="200"
          r="80"
          fill="white"
          stroke="url(#gradient)"
          strokeWidth="5"
        />
        <circle
          className="circle4"
          cx="1400"
          cy="200"
          r="80"
          fill="white"
          stroke="url(#gradient)"
          strokeWidth="5"
        />
        <circle
          className="circle5"
          cx="1700"
          cy="200"
          r="80"
          fill="white"
          stroke="url(#gradient)"
          strokeWidth="5"
        />
      </svg>
    </section>
  );
};

export default Info;

//   );
// };

// export default Info;
