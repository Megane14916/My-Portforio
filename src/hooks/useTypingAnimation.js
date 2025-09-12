import React, { useState, useEffect } from 'react';

export const useTypingAnimation = (textToType, { minSpeed, maxSpeed }, startAnimation) => {
  const [charIndex, setCharIndex] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    if (!startAnimation || charIndex >= textToType.length) {
      if (charIndex >= textToType.length) {
        setIsAnimationComplete(true);
      }
      return;
    }

    const randomSpeed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    const timeoutId = setTimeout(() => {
      setCharIndex(prev => prev + 1);
    }, randomSpeed);

    return () => clearTimeout(timeoutId);
  }, [charIndex, textToType, minSpeed, maxSpeed, startAnimation]);

  const displayedText = textToType.substring(0, charIndex);
  return { displayedText, isAnimationComplete };
};