import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // Correct CSS import

const ScrollProvider = ({ children }) => {
  useEffect(() => {
    const scrollContainer = document.querySelector("#scroll-container");

    if (!scrollContainer) {
      console.error("Scroll container not found!");
      return;
    }

    const locoScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      overflow:"hidden",
      
    });

    return () => {
      locoScroll.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default ScrollProvider;
