import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
function RoundedElement() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVariants, setCursorVariants] = useState("default");
  const elementRef = useRef(null);

  const elementHovered = () => {
    setCursorVariants("hover");
  };
  const elementLeaved = () => {
    setCursorVariants("default");
  };
  useEffect(() => {
    // @ts-ignore
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const elements = document.querySelectorAll(".hv-allowed");

    console.log(elements);
    window.addEventListener("mousemove", handleMouseMove);
    elements.forEach((element) => {
      element.addEventListener("mouseenter", elementHovered);
      element.addEventListener("mouseleave", elementLeaved);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", elementHovered);
        element.removeEventListener("mouseleave", elementLeaved);
      });
    };
  }, []);

  const variants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      opacity: 0.9,
    },
    hover: {
      height: 80,
      width: 80,
      x: position.x - 40,
      y: position.y - 40,
      opacity: 0.3,
    },
  };
  return (
    <motion.div
      ref={elementRef}
      variants={variants}
      animate={cursorVariants}
      style={{
        mixBlendMode: "difference",
      }}
      className="follower pointer-events-none fixed left-0 top-0 z-50 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
    />
  );
}

export default RoundedElement;
