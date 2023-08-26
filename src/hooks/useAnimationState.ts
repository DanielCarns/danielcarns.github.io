import { useState, useEffect } from 'react';

type AnimationStateReturn = [
  boolean, // shouldAnimate
  () => void // handleAnimationEnd
];

function useAnimationState(storageKey: string): AnimationStateReturn {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const hasAnimated = localStorage.getItem(storageKey);
    if (!hasAnimated) {
      setShouldAnimate(true);
    }
  }, [storageKey]);

  const handleAnimationEnd = () => {
    localStorage.setItem(storageKey, 'true');
    setShouldAnimate(false);
  };

  return [shouldAnimate, handleAnimationEnd];
}

export default useAnimationState;