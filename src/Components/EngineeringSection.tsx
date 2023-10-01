import React from "react";
import { useSpring, animated } from "@react-spring/web";

export default function AboutSection() {
  return (
    <div className="content px-5">
      <h2 className="numbered-heading">Engineering</h2>
      <p className="summary">
        I've worked for a variety of clients including CoachMePlus, HowardHanna, 
        Horizontal Wireline, and more. My areas of expertise are in mobile development (both native and React Native),
        Node, Docker, and AWS infrastructure.
        I'm most interested in working more with Kubernetes,  
      </p>
    </div>
  );
}
