import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated, useScroll} from "@react-spring/web";
import IntroContent from "./IntroContent";
import AboutSection from "./AboutSection";
import EngineeringSection from "./EngineeringSection";

export default function Home() {
  const parallax = useRef<IParallax>(null)
  const containerRef = React.useRef<HTMLDivElement>(null!)

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }

  return (
    <div className="page-container" ref={containerRef}>
      <Parallax pages={4} className="parallax-container" ref={parallax}>
        <ParallaxLayer onClick={() => scroll(1)} speed={0.05} className="content">
          <IntroContent />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1, end: 2.5 }} offset={1} onClick={() => scroll(2.5)} className="parallax-section">
          <div className="col-12 col-md-auto content section-left">
            <AboutSection />
          </div>
        </ParallaxLayer>
        <ParallaxLayer onClick={() => scroll(0)} sticky={{ start: 2.5, end: 3 }} speed={0.5} className="right-parallax parallax-section">
          <div className="section-right content">
            <EngineeringSection />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
