import { useSpring, animated } from "@react-spring/web";
import TypingText from "./TypingText";

export default function AboutSection() {
  return (
    <div className="content px-5">
      <h2 className="numbered-heading">
        <TypingText text="About Me" />
      </h2>
        <p className="summary">
          <TypingText 
          typingRate={10}
          showCursor={false}
            text="Welcome! In the digital realm, I wear many hats - a full-stack
          engineer, mobile developer, cloud practitioner, and IoT novice. With
          5+ years of hands-on experience, I'm dedicated to creating and
          delivering quality software solutions. I've had the privilege of
          working across various industries including healthcare, robotics,
          consulting, and fitness. This cross-industry experience has equipped
          me with a unique perspective and adaptable skill set."
          ></TypingText>
        </p>
    </div>
  );
}
