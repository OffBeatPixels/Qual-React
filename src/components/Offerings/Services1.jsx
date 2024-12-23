import React from "react";
import Service from "../../assets/mg.gif";
import Transition from "../Animations/Transition";

 function Services1() {
  return (
    <section
      className=" mx-28 mt-10  flex justify-end "
      style={{
        backgroundImage: `url(${Service})`,
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        height: "70vh",

        // minWidth:"100%",
        backgroundBlendMode: "overlay",
        "@media (max-width: 768px)": {
          backgroundImage: "none",
        },
        backgroundSize: "contain",
      }}
    >
      {/* Section Title */}
      <div className="text-wrap h-10 w-[40%] mt-32 mr-20">
        <h3 className="text-3xl text-black text-justify  mb-8 ">Managed Services</h3>
        <p>
          By systematically following four key stages Assessment, Report,
          Insights, and Process Improvement, we provide actionable insights and
          measurable enhancements, fostering a culture of ongoing innovation and
          operational excellence.
        </p>
      </div>
    </section>
  );
}


export default Transition(Services1)