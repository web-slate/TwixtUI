import React, { useEffect, useState } from 'react';

const HIDE_AFTER_SECONDS = 250;
const INCREASE_INTERVAL = 1000;

const PageProgressLine = ({ loadingColor = '#3490dc', completionColor = '#38c172' }) => {
  const [width, setWidth] = useState(10);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setWidth(prevWidth => {
        const newWidth = prevWidth + 10;
        const reachedMaximum = newWidth >= 100;

        if (reachedMaximum) {
          clearInterval(interval);
          // Set timeout to hide the progress bar after `HIDE_AFTER_SECONDS` micro seconds
          setTimeout(() => setIsVisible(false), HIDE_AFTER_SECONDS);
        }
        return newWidth;
      });
    }, INCREASE_INTERVAL); // Adjust time for progression

    return () => clearInterval(interval);
  }, []);

  const getBackgroundColor = (width) => {
    if (width < 100) {
      return loadingColor; // Softer blue Color while loading
    }
    return completionColor; // Softer green Color when finished
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="progress-loader fixed top-0 left-0 h-1"
      style={{ width: `${width}%`, backgroundColor: getBackgroundColor(width) }}
    ></div>
  );
};

export default PageProgressLine;
