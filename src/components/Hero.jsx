import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play();
      videoElement.muted = true; // Mute the video
      videoElement.loop = true; // Loop the video
    }
  }, []);

  return (
    <div className="relative w-screen h-[70vh] overflow-hidden ">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
      >
        <source src="src/assets/BG.mp4" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 flex items-center left-16  text-left text-white z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl   leading-tight">
            Quality in your DNA, <br /> not just your SLA
          </h1>
          <p className="text-lg md:text-2xl  mx-auto">
            Unlock Revenue, Minimize Costs, Elevate Customer Experience and{" "}
            <br />
            Accelerate AGI Implementation with Quality Insights!
          </p>
          <div>
            <a
              href="#about"
              className="inline-block py-3 px-6 text-lg bg-red-500 text-black   rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
