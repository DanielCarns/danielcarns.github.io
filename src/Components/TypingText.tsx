import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import PropTypes from "prop-types";
import { useInView } from 'react-intersection-observer';

type TypingTextProps = {
  text: string;
  cursorBlinkRate?: number;
  isInView?: boolean;
  typingRate?: number;
  showCursor?: boolean;
};

const TypingText: React.FC<TypingTextProps> = ({
  text,
  cursorBlinkRate = 1000,
  typingRate = 100,
  showCursor = true,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const cursorAnimation = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    loop: true,
    config: { duration: cursorBlinkRate },
  });

  useEffect(() => {
    if (inView) {
      let index = 0;
      const timer = setInterval(() => {
        setDisplayedText((oldText) => text.substring(0, index));
        index++;
        if (index > text.length) clearInterval(timer);
      }, typingRate);

      return () => clearInterval(timer);
    }
  }, [inView, text]);

  return (
    <div style={{ display: "flex", alignItems: "center" }} ref={ref}>
      <span>{displayedText}</span>
      <animated.span style={cursorAnimation}>_</animated.span>
    </div>
  );
};

TypingText.propTypes = {
  text: PropTypes.string.isRequired,
  isInView: PropTypes.bool,
  cursorBlinkRate: PropTypes.number,
};

export default TypingText;
