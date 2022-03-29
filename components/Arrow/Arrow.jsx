import React from 'react';
import {
  arrowWrapper,
  arrow,
  line,
} from "./arrow.module.scss";

const Arrow = () => {
  return (
    <div className={arrowWrapper}>
      <span className={line}>
      </span>
      <span className={arrow}>
      </span>
      <span className={arrow}>
      </span>
    </div>
  );
};

export default Arrow;