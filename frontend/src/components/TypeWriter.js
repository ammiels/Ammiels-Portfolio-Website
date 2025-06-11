import React, { useState, useEffect, useRef } from 'react';

const TypeWriter = ({ 
  texts = [], 
  speed = 20, // Typing speed in milliseconds
  typingDelay = 500, // Delay between paragraphs in milliseconds
  className = ''
}) => {
  // Store texts in a ref to avoid dependency issues
  const textsRef = useRef(texts);
  
  // Track which paragraphs have been completed
  const [displayedTexts, setDisplayedTexts] = useState([]);
  // Current paragraph being typed
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  // Current text of paragraph being typed
  const [currentText, setCurrentText] = useState('');
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
    textsRef.current = texts;
  }, [texts]);
  
  useEffect(() => {
    const typeText = async () => {
      if (textsRef.current.length === 0) return;
      
      // If we've finished all paragraphs, mark as complete
      if (currentParagraphIndex >= textsRef.current.length) {
        setIsComplete(true);
        return;
      }
      
      const currentFullText = textsRef.current[currentParagraphIndex];
      
      // Type the current paragraph character by character
      const typeCharacter = async (index, currentString) => {
        if (index >= currentFullText.length) {
          return currentString;
        }
        
        return new Promise(resolve => {
          timeoutRef.current = setTimeout(() => {
            const newString = currentString + currentFullText.charAt(index);
            setCurrentText(newString);
            resolve(typeCharacter(index + 1, newString));
          }, speed);
        });
      };
      
      // Start typing from the beginning
      await typeCharacter(0, '');
      
      // Paragraph is complete - add it to displayed texts
      await new Promise(resolve => {
        timeoutRef.current = setTimeout(() => {
          setDisplayedTexts(prev => [...prev, currentFullText]);
          setCurrentText('');
          setCurrentParagraphIndex(prev => prev + 1);
          resolve();
        }, typingDelay);
      });
    };
    
    typeText();
  }, [currentParagraphIndex, speed, typingDelay]);
  
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