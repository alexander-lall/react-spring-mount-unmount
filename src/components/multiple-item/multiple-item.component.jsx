import { useState } from "react";
import { animated, useTransition } from "react-spring";

import "./multiple-item.styles.scss";

const MultipleItem = () => {
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: (item) => (next) =>
      next({ x: 0, y: item.y, opacity: 1, delay: item.delay }),
    leave: { x: 100, y: 800, opacity: 0 },
  });

  return (
    <div className="multiple-container">
      <button
        className="multiple-item-button"
        onClick={() => {
          setItems((items) =>
            items.length ? [] : [{ y: -100, delay: 0 }, { y: -50, delay: 200 }, { y: 0, delay: 400 }]
          );
        }}
      >
        {items.length ? "unmount" : "mount"}
      </button>
      <div className="multiple-item-container">
        {transition((style, item) =>
          // "animated" object gets animated with the "style" property
          item ? <animated.div style={style} className="multiple-item" /> : ""
        )}
      </div>
    </div>
  );
};

export default MultipleItem;
