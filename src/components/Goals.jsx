import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Goals = () => {
  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   if (window.innerWidth > 768) {
  //     tl.fromTo(
  //       ".g2",
  //       { opacity: 0, x: -100 },
  //       {
  //         opacity: 1,
  //         x: 0,
  //         scrollTrigger: {
  //           trigger: ".goals",
  //           scroller: "body",
  //           start: "top 70%",
  //           end: "top 50%",
  //           scrub: 2,
  //         },
  //       }
  //     ).fromTo(
  //       ".g3",
  //       { opacity: 0, x: -100 },
  //       {
  //         opacity: 1,
  //         x: 0,
  //         scrollTrigger: {
  //           trigger: ".goals",
  //           scroller: "body",
  //           start: "top 40%",
  //           end: "top 20%",
  //           scrub: 2,
  //         },
  //       }
  //     );
  //   } else {
  //     tl.fromTo(
  //       ".g2",
  //       { opacity: 0, y: -200 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         scrollTrigger: {
  //           trigger: ".goals",
  //           scroller: "body",
  //           start: "top 70%",
  //           end: "top 50%",
  //           scrub: 2,
  //         },
  //       }
  //     ).fromTo(
  //       ".g3",
  //       { opacity: 0, y: -100 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         scrollTrigger: {
  //           trigger: ".goals",
  //           scroller: "body",
  //           start: "top 40%",
  //           end: "top 20%",
  //           scrub: 2,
  //         },
  //       }
  //     );
  //   }

  //   // tl.from(".goals-section p", {
  //   //   opacity: 0,
  //   //   y: -200,
  //   //   duration: 2,
  //   //   delay: 1,
  //   // });
  // }, []);

  return (
    <section id="goals-section" className=" relative bg-cover bg-no-repeat   ">
      {/* <div className="flex mx-auto h-px w-[80%] md:w-[30%] text-white justify-center">
        
        
        
       <div className="flex-grow h-[2px] bg-black"> </div>
       <span className="h-[2px] ml-2 bg-black">....</span>
       <span className="h-[2px] ml-2 bg-black">....</span>
       <span className="h-[2px] ml-2 bg-black">....</span>
     </div> */}
      <p className="w-full text-4xl  pb-5  text-center">
        Transforming excellence from a goal to your <br />
        daily reality with Qualiinsight's QaaS.
      </p>

      <div className="goals flex flex-col md:flex-row items-center justify-center  w-full">
        {/* Circle 1 */}
        <div className="g1 w-68  min-h-[200px] lg:min-h-[250px] rounded-full border-t-[3px] border-b-[3px] border-r-[10px] border-l-[0px] border-[#C16523] flex items-center justify-center">
          <div className="g1-box flex flex-row items-center">
            <h1 className="text-[15vh] text-[#C16523] bg-transparent">1</h1>
            <p className="text-xs text-left ">
              <strong>
                {" "}
                "Elevate Quality: Redefine Standards, Deliver Excellence"
              </strong>
              Implement world-class QA frameworks that exceed industry
              benchmarks, ensuring operational consistency, compliance, and
              customer satisfaction.
            </p>
          </div>
        </div>

        {/* Circle 2 */}
        <div className="g2 w-68  min-h-[200px] lg:min-h-[250px] ml-8 rounded-full border-t-[3px] border-b-[3px] border-r-[10px] border-l-[0px] border-[#8FABC3] flex items-center justify-center">
          <div className="g1-box flex flex-row items-center">
            <h1 className="text-[15vh] bg-transparent text-[#8FABC3]">2</h1>
            <p className="text-xs text-left ">
              "Streamline Success: Optimize Processes, Maximize Impact"
              Transform workflows and eliminate inefficiencies with tailored
              process improvement consulting for sustainable operational
              excellence.
            </p>
          </div>
        </div>

        {/* Circle 3 */}
        <div className="g3 w-68  min-h-[200px] lg:min-h-[250px] ml-8 rounded-full border-t-[3px] border-b-[3px] border-r-[10px] border-l-[0px] border-[#EDC05F] flex items-center justify-center">
          <div className="g1-box flex flex-row items-center">
            <h1 className="text-[15vh] bg-transparent text-[#EDC05F]">3</h1>
            <p className="text-xs text-left ">
              "Insights That Empower: Measure, Predict, Transform" Leverage
              data-driven KPI design and AI-powered dashboards to gain
              actionable insights and predictive analytics for smarter
              decisions.
            </p>
          </div>
        </div>

        {/* Circle 4 */}
        <div className="g3 w-68  min-h-[200px] lg:min-h-[250px] ml-8 rounded-full border-t-[3px] border-b-[3px] border-r-[10px] border-l-[0px] border-[#EDC05F] flex items-center justify-center">
          <div className="g1-box flex flex-row items-center">
            <h1 className="text-[15vh] bg-transparent text-[#EDC05F]">4</h1>
            <p className="text-xs text-left ">
              "Continuously Innovate: Build a Future-Ready Organization" Embed a
              culture of continuous improvement with robust frameworks,
              innovation councils, and benefit measurement strategies.
            </p>
          </div>
        </div>
        {/* Circle 5 */}
        <div className="g3 w-68  min-h-[200px] lg:min-h-[250px] ml-8 rounded-full border-t-[3px] border-b-[3px] border-r-[10px] border-l-[0px] border-[#EDC05F] flex items-center justify-center">
          <div className="g1-box flex flex-row items-center">
            <h1 className="text-[15vh] bg-transparent text-[#EDC05F]">5</h1>
            <p className="text-xs text-left ">
              "AI at Your Fingertips: Tailored Training, Seamless Deployment"
              Equip your teams with custom AI/AGI training and deployment
              solutions to drive agility, scalability, and sustained growth.
            </p>
          </div>
        </div>
      </div>

      <p className="md:w-1/2 text-xl md:text-2xl pt-10 mx-auto text-center">
        We embed top-tier quality into every product, service, and process,
        creating a foundation for operational excellence, measurable outcomes,
        and transformative business growth
      </p>
    </section>
  );
};

export default Goals;
