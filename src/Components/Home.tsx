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

  function throttleScrollEvents(func: Function, limit: number): Function {
    let inThrottle: boolean;
    return function(...args: any[]) {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  const preventScroll = (event: Event): void => {
   //event.preventDefault();
   //handleScroll();
  };

  const handleScroll = throttleScrollEvents(() => {
    scroll(2);
  }, 500);

  useEffect(() => {
    const wheelListener = (event: Event) => {
      preventScroll(event);
    }

    const touchMoveListener = (event: Event) => preventScroll(event);

    window.addEventListener('wheel', wheelListener, { passive: false });
    window.addEventListener('touchmove', touchMoveListener, { passive: false });

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('wheel', wheelListener);
      window.removeEventListener('touchmove', touchMoveListener);
    };
  }, []);
  
  return (
    <div className="hero-background" ref={containerRef}>
      <Parallax pages={4} className="parallax-container" ref={parallax}>
        <ParallaxLayer onClick={() => scroll(1)} speed={1.0} className="content">
          <IntroContent />
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1, end: 1.5 }} offset={1} onClick={() => scroll(2.5)} className="parallax-section">
          <div className="content section-left">
            <AboutSection />
          </div>
        </ParallaxLayer>
        <ParallaxLayer onClick={() => scroll(0)} sticky={{ start: 2.5, end: 3.5 }} speed={0.5} className="right-parallax parallax-section">
          <div className="section-right content">
            <EngineeringSection />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
