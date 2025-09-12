import React, { useState, useEffect } from 'react';

export const useJapaneseTypingAnimation = (wordSegments, { typingSpeed, conversionDelay }, startAnimation) => {
  // --- State Hooks ---
  const [wordIndex, setWordIndex] = useState(0);
  const [hiraIndex, setHiraIndex] = useState(0);
  const [romaIndex, setRomaIndex] = useState(0);
  const [step, setStep] = useState('typing');
  
  const [finalText, setFinalText] = useState('');
  const [activeText, setActiveText] = useState('');
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  // --- Main Animation Logic ---
  useEffect(() => {
    if (!startAnimation || wordIndex >= wordSegments.length) {
      if (wordIndex >= wordSegments.length) {
          setIsAnimationComplete(true);
      }
      return;
    }

    const currentWord = wordSegments[wordIndex];
    const baseText = wordSegments.slice(0, wordIndex).map(seg => seg.kanji).join('');
    setFinalText(baseText);

    let timeoutId;

    if (step === 'typing') {
      const confirmedHiraganaInWord = currentWord.segments.slice(0, hiraIndex).map(s => s.hiragana).join('');
      if (hiraIndex < currentWord.segments.length) {
        const currentHiraSegment = currentWord.segments[hiraIndex];
        if (romaIndex < currentHiraSegment.romaji.length) {
          const randomSpeed = Math.random() * (typingSpeed.max - typingSpeed.min) + typingSpeed.min;
          timeoutId = setTimeout(() => {
            setRomaIndex(prev => prev + 1);
          }, randomSpeed);
          const nextRomaIndex = romaIndex + 1;
          if (nextRomaIndex === currentHiraSegment.romaji.length) {
            setActiveText(confirmedHiraganaInWord + currentHiraSegment.hiragana);
          } else {
            setActiveText(confirmedHiraganaInWord + currentHiraSegment.romaji.substring(0, nextRomaIndex));
          }
        } else {
          setHiraIndex(prev => prev + 1);
          setRomaIndex(0);
        }
      } else {
        setStep('converting');
      }
    } else if (step === 'converting') {
      setActiveText(currentWord.hiragana);
      timeoutId = setTimeout(() => {
        setStep('confirming');
      }, conversionDelay);
    } else if (step === 'confirming') {
      setActiveText(currentWord.kanji);
      timeoutId = setTimeout(() => {
        setWordIndex(prev => prev + 1);
        setHiraIndex(0);
        setRomaIndex(0);
        setStep('typing');
      }, conversionDelay * 1.5);
    }
    return () => clearTimeout(timeoutId);
  }, [wordIndex, hiraIndex, romaIndex, step, wordSegments, typingSpeed, conversionDelay, startAnimation]);

  const isConverting = !isAnimationComplete && (step === 'typing' || step === 'converting');
  return { finalText, activeText, isConverting, isAnimationComplete };
};