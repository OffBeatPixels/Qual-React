import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PixiComponent = () => {
  const canvasRef = useRef(null);
  const rippleContainerRef = useRef(null);

  useEffect(() => {
    // Get the canvas context for later use
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Helper function to draw the ripple effect
    const createRipple = (x, y) => {
      const ripple = {
        x: x,
        y: y,
        radius: 0,
        opacity: 1,
      };

      // Animation for ripple effect using GSAP
      gsap.to(ripple, {
        duration: 1.5,
        radius: 150, // Final radius size of the ripple
        opacity: 0, // Fade out the ripple
        ease: "power2.out", // Ease out the animation
        onUpdate: () => {
          drawRipple(ripple);
        },
        onComplete: () => {
          // Ensure to clean up after ripple is done
        },
      });
    };

    // Function to draw the ripple on the canvas
    const drawRipple = (ripple) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame
      ctx.beginPath();
      ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 255, 0, ${ripple.opacity})`; // Green with fading opacity
      ctx.fill();
    };

    // Event listener for mouse clicks to trigger the ripple effect
    window.addEventListener("click", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      createRipple(x, y);
    });

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("click", createRipple);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <canvas ref={canvasRef} className="absolute top-0 left-0" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl font-bold">
        <h1>Welcome to Our Landing Page</h1>
      </div>
    </div>
  );
};

export default PixiComponent;
