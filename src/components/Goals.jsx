import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Goals = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    if (window.innerWidth > 768) {
      tl.fromTo(
        ".g2",
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: ".goals",
            scroller: "body",
            start: "top 70%",
            end: "top 50%",
            scrub: 2,
          },
        }
      ).fromTo(
        ".g3",
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: ".goals",
            scroller: "body",
            start: "top 40%",
            end: "top 20%",
            scrub: 2,
          },
        }
      );
    } else {
      tl.fromTo(
        ".g2",
        { opacity: 0, y: -200 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".goals",
            scroller: "body",
            start: "top 70%",
            end: "top 50%",
            scrub: 2,
          },
        }
      ).fromTo(
        ".g3",
        { opacity: 0, y: -100 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".goals",
            scroller: "body",
            start: "top 40%",
            end: "top 20%",
            scrub: 2,
          },
        }
      );
    }

    // tl.from(".goals-section p", {
    //   opacity: 0,
    //   y: -200,
    //   duration: 2,
    //   delay: 1,
    // });
  }, []);

 return (
   <section
     className=" relative bg-cover bg-no-repeat py-10  "
     style={{ backgroundImage: "url('/path/to/goals-bg.webp')" }}
   >
     {/* <div className="flex mx-auto w-[50%] justify-center">
       <span className="h-px w-40 border-t-2 border-dotted border-black"></span>
       <div className="flex-grow h-2px bg-black"></div>
       <span className="h-px w-40 border-t-2 border-dotted border-black"></span>
     </div> */}
    

     <div className="flex mx-auto h-px w-[30%] text-white justify-center">
       <span className="h-[2px] mr-2 bg-black">....</span>
       <span className="h-[2px] mr-2 bg-black">....</span>
       <span className="h-[2px] mr-2 bg-black">....</span>
       <div className="flex-grow h-[2px] bg-black">   </div>
       <span className="h-[2px] ml-2 bg-black">....</span>
       <span className="h-[2px] ml-2 bg-black">....</span>
       <span className="h-[2px] ml-2 bg-black">....</span>
     </div>
     <p className="w-full text-2xl font-bold py-5 my-5 text-center">
       Transforming excellence from a goal to your daily reality with
       Qualiinsight's QaaS.
     </p>

     <div className="goals flex flex-col md:flex-row items-center justify-center gap-10 w-full">
       {/* Circle 1 */}
       <div className="g1 w-52 md:w-72 min-h-[200px] lg:min-h-[300px] rounded-full border-t-[3px] border-b-[3px] border-r-[10px] border-l-[0px] border-[#169A47] flex items-center justify-center">
         <div className="g1-box flex flex-row items-center">
           <h1 className="text-[20vh] text-[#169A47] bg-transparent">1</h1>
           <p className="lg:text-2xl text-left font-bold">
             Supercharge Quality
           </p>
         </div>
       </div>

       {/* Circle 2 */}
       <div className="g2 w-52 md:w-72 min-h-[200px] lg:min-h-[300px] ml-8 rounded-full border-t-[3px] border-b-[3px] border-r-[10px] border-l-[0px] border-[#1F5F5C] flex items-center justify-center">
         <div className="g1-box flex flex-row items-center">
           <h1 className="text-[20vh] bg-transparent text-[#1F5F5C]">2</h1>
           <p className="lg:text-2xl text-left font-bold">
             Product Identification & Customization
           </p>
         </div>
       </div>

       {/* Circle 3 */}
       <div className="g3 w-52 md:w-72 min-h-[200px] lg:min-h-[300px] ml-8 rounded-full border-t-[3px] border-b-[3px] border-r-[10px] border-l-[0px] border-[#042315] flex items-center justify-center">
         <div className="g1-box flex flex-row items-center">
           <h1 className="text-[20vh] bg-transparent text-[#042315]">3</h1>
           <p className="lg:text-2xl text-left font-bold">
             Custom AGI training & deployment
           </p>
         </div>
       </div>
     </div>

     <p className="md:w-1/2 text-xl md:text-2xl pt-10 mx-auto text-center">
       We embed top-tier quality into every product, service, and process,
       transforming your business.
     </p>
   </section>
 );

};

export default Goals;
