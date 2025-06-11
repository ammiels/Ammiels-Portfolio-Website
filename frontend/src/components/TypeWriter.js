import React, { useState, useEffect, useRef } from 'react';

const TypeWriter = ({ 
  texts = [], 
  speed = 20, // Even faster typing speed for better UX
  typingDelay = 500, // Shorter delay between paragraphs
  className = ''
}) => {
  // Track which paragraphs have been completed
  const [displayedTexts, setDisplayedTexts] = useState([]);
  // Current paragraph being typed
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  // Current text of paragraph being typed
  const [currentText, setCurrentText] = useState('');
  // Cursor position in current paragraph
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  // Is typing completed
  const [isComplete, setIsComplete] = useState(false);
  
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Clear any existing timeout when component unmounts
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    // Do nothing if we have no texts
    if (texts.length === 0) return;
    
    // If we've finished all paragraphs, mark as complete
    if (currentParagraphIndex >= texts.length) {
      setIsComplete(true);
      return;
    }

    const currentFullText = texts[currentParagraphIndex];
    
    // If we haven't finished typing the current paragraph
    if (currentCharIndex < currentFullText.length) {
      timeoutRef.current = setTimeout(() => {
        setCurrentText(prev => prev + currentFullText[currentCharIndex]);
        setCurrentCharIndex(prevIndex => prevIndex + 1);
      }, speed);
    } else {
      // Paragraph is complete - add it to displayed texts
      timeoutRef.current = setTimeout(() => {
        setDisplayedTexts(prev => [...prev, currentText]);
        setCurrentText('');
        setCurrentCharIndex(0);
        setCurrentParagraphIndex(prev => prev + 1);
      }, typingDelay);
    }
  }, [currentParagraphIndex, currentCharIndex, texts, speed, typingDelay, currentText]);

  return (
    <div className={className}>
      {/* Display already typed paragraphs */}
      {displayedTexts.map((text, index) => (
        <p key={index} className="mb-6">{text}</p>
      ))}
      
      {/* Display currently typing paragraph */}
      {!isComplete && (
        <p>
          {currentText}
          <span className="typing-cursor">|</span>
        </p>
      )}
    </div>
  );
};

export default TypeWriter;