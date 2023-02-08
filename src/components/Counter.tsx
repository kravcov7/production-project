import React from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
  return (
    <div className={classes.button}>
      <button>increment</button>
    </div>
  );
};
