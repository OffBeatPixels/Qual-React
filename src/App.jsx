import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Goals from "./components/Goals";

import Card from "./components/Card";
import FlipCardSection from "./components/FlipCardSection";
import Offerings from "./components/Offerings";

import { BackgroundBoxesDemo } from './components/ui/BackgroundBoxesDemo';
import Transition from "./components/Animations/Transition";
import Navbar from "./components/Navbar/Navbar";




gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
gsap.to(".scroller", {

 
  onEnter: () => gsap.to(".scroller", { 
    x: "-200%", 
    ease: "none", 
    opacity: 0, 
    duration:0.1,
    scrollTrigger: {
    trigger: ".body",
    start: "top top",
    end: "bottom top",
    markers:true,

    scrub: 2,
  }, }),
  // onLeave: () => gsap.to(".scroller", { x: "-200%", ease: "none", scrollTrigger: {
  //   trigger: ".scroller",
  //   start: "top top",
  //   end: "bottom bottom",

  //   scrub: 2,
  // }, }),
  // onEnterBack: () => gsap.to(".scroller", { x: "0%", ease: "none", scrollTrigger: {
  //   trigger: ".scroller",
  //   start: "top bottom",
  //   end: "bottom bottom",

  //   scrub: 2,
  // }, }),
});
   
})
  return (
    <div >
      {/* <div className="scroller"> */}
        <BackgroundBoxesDemo />
      {/* </div> */}
      <Goals />
      <Card />
      <FlipCardSection />
      <Offerings />
    </div>
  );
}

export default Transition(App);
