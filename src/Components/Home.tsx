import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import IntroContent from "./IntroContent";
import AboutSection from "./AboutSection";
import EngineeringSection from "./EngineeringSection";
import starsSvg from '../assets/stars.svg'
export default function Home() {
  const parallax = useRef<IParallax>(null)

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }

  return (
      <Parallax pages={5} className="parallax-container" style={{ top: '0', left: '0' }} ref={parallax}>
       <ParallaxLayer
        offset={0}
        speed={0.05}
        factor={5}
        style={{
          backgroundImage: `url(${starsSvg})`,
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
          overscrollBehavior: 'none',
          opacity: '80%'
        }}
      >
        </ParallaxLayer>
        <ParallaxLayer onClick={() => scroll(1)} speed={2} className="content">
          <IntroContent />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1, end: 1.5 }} speed={0.25} offset={1} onClick={() => scroll(3)} className="parallax-section">
          <div className="col-12 col-md-auto content">
            <AboutSection />
          </div>
        </ParallaxLayer>
        <ParallaxLayer onClick={() => scroll(0)} sticky={{ start: 2.25, end: 3 }} offset={2.25} speed={0.5} className="parallax-section">
          <div className="col-12 col-md-auto content">
            <EngineeringSection />
          </div>
        </ParallaxLayer>
      </Parallax>
  );
}
