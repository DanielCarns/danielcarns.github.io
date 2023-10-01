import React from "react";
import { useSpring, animated } from "@react-spring/web";

export default function AboutSection() {
  return (
    <div className="content px-5">
      <h2 className="numbered-heading">About Me</h2>
      <p className="summary">
        Welcome! In the digital realm, I wear many hats - a mobile app
        developer, a full-stack engineer, and a cloud technology enthusiast.
        With 5+ years of hands-on experience, I'm dedicated to creating and delivering 
        quality software solutions. I've had the privilege of 
        working across various industries including healthcare, robotics, consulting, and fitness. 
        This cross-industry experience has equipped me with a unique perspective and adaptable skill set.
      </p>
    </div>
  );
}
