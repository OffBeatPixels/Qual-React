import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Goals = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".g2",
      { opacity: 0, x: -200 },
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
      { opacity: 0, x: -200 },
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

    tl.from(".goals-section p", {
      opacity: 0,
      y: -200,
      duration: 2,
      delay: 1,
    });
  }, []);

  return (
    <section
      className=" bg-cover bg-no-repeat py-10"
      style={{ backgroundImage: "url('/path/to/goals-bg.webp')" }}
    >
      <p className="w-1/2 text-2xl py-5 mx-auto text-center">
        Transforming excellence from a goal to your daily reality with
        Qualiinsight's QaaS.
      </p>
      <div className="goals flex flex-row justify-center gap-10 w-full">
        {/* Circle 1 */}
        <div
          className="g1 w-1/5 min-h-[300px] rounded-full border-t-[3px] border-b-[3px]  border-r-[10px] border-l-[0px] border-blue-600 flex items-center justify-center"
          style={{ boxShadow: "10px 0px 0px 0px rgba(29, 78, 216, 0.5)" }} // Blue shadow on the right
        >
          <div className="g1-box flex flex-row items-center">
            <h1 className="text-[20vh] text-blue-600  bg-transparent">1</h1>
            <p className="text-2xl text-center">Supercharge Quality</p>
          </div>
        </div>

        {/* Circle 2 */}
        <div
          className="g2 w-1/5 min-h-[300px] ml-8 rounded-full border-t-[3px] border-b-[3px]  border-r-[10px] border-l-[0px]  border-pink-500 flex items-center justify-center"
          style={{ boxShadow: "10px 0px 0px 0px rgba(236, 72, 153, 0.5)" }} // Pink shadow on the right
        >
          <div className="g1-box flex flex-row items-center">
            <h1 className="text-[20vh] bg-transparent text-pink-500">2</h1>
            <p className="text-2xl text-left ">
              Product Identification & Customization
            </p>
          </div>
        </div>

        {/* Circle 3 */}
        <div
          className="g3 w-1/5 min-h-[300px] ml-8 rounded-full border-t-[3px] border-b-[3px]  border-r-[10px] border-l-[0px] border-green-600 flex items-center justify-center"
          style={{ boxShadow: "10px 0px 0px 0px rgba(34, 197, 94, 0.5)" }} // Green shadow on the right
        >
          <div className="g1-box flex flex-row items-center">
            <h1 className="text-[20vh] bg-transparent text-green-600">3</h1>
            <p className="text-2xl text-left">
              Custom AGI training & deployment
            </p>
          </div>
        </div>
      </div>

      <p className="w-1/2 text-2xl pt-10 mx-auto text-center">
        We embed top-tier quality into every product, service, and process,
        transforming your business.
      </p>
    </section>
  );
};

export default Goals;
