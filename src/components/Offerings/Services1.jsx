import React from "react";
import Service from "../../assets/Service1.jpg";


export default function Services1() {

  return (
    <section
      className="  h-screen flex justify-end "
      style={{
        backgroundImage: `url(${Service})`,
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        minHeight: "100%",
        // minWidth:"100%",
        backgroundBlendMode: "overlay",
        "@media (max-width: 768px)": {
          backgroundImage: "none",
        },
        backgroundSize: "cover",
      }}
    >
      {/* Section Title */}
      <div className="text-justify w-80 mt-48 mr-40">
        
        <h3 className="text-3xl text-black font-bold mb-8 ">
          Managed Services
        </h3>
        <p>
          By systematically following four key stages Assessment, Report,
          Insights, and Process Improvement, 
          we provide actionable insights and measurable enhancements, fostering
          a culture of ongoing innovation and operational excellence.
        </p>
      </div>
    </section>
  );
}
