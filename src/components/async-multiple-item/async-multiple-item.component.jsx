import { useState } from "react";
import { animated, useTransition } from "react-spring";

import "./async-multiple-item.styles.scss";

const AsyncMultipleItem = () => {
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: { x: -100, y: 800, opacity: 0, width: 10, height: 10 },
    enter: item => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay });
      await next({ x: 0, width: 100, height: 100 });
    },
    leave: { x: 100, y: 800, opacity: 0 },
  });

  return (
    <div className="async-multiple-container">
      <button
        className="async-multiple-item-button"
        onClick={() => {
          setItems((items) =>
            items.length ? [] : [{ y: -100, delay: 0 }, { y: -50, delay: 200 }, { y: 0, delay: 400 }]
          );
        }}
      >
        {items.length ? "unmount" : "mount"}
      </button>
      <div className="async-multiple-item-container">
        {transition((style, item) =>
          // "animated" object gets animated with the "style" property
          item ? <animated.div style={style} className="async-multiple-item" /> : ""
        )}
      </div>
    </div>
  );
};

export default AsyncMultipleItem;
