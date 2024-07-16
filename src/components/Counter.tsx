import { VFC, useState } from "react";
import classes from "./Counter.module.scss";
export const Counter: VFC = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={classes.btn}>
      <h1>{count}</h1>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement} disabled={count === 0}>
        DECREMENT
      </button>
    </div>
  );
};
