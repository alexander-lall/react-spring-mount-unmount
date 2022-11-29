import { useState } from "react";
import { animated, useTransition } from "react-spring";

import './single-item.styles.scss';

const SingleItem = () => {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 800, opacity: 0 },
  });

  return (
    <div className="single-container">
      <button
        className="single-item-button"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {isVisible ? "unmount" : "mount"}
      </button>
      <div className="single-item-container">
        {transition((style, item) =>
          // "animated" object gets animated with the "style" property
          item ? <animated.div style={style} className="single-item" /> : ""
        )}
      </div>
    </div>
  );
};

export default SingleItem;
