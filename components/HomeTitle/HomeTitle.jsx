import React, { useState } from 'react';
import Arrow from '../Arrow/Arrow';
import {
  titleWrapper,
  titleShadow,
  homeTitle,
  rightArrow,
  bottomArrow
} from '/styles/Home.module.scss';

const HomeTitle = ({h3}) => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  const handleScrollToWork = () => {
    window.scroll(window.innerWidth,0);
  }

  const handleMouseMove = (e) => {
      setXPos(-(Math.round(e.clientX / window.innerWidth * 10) -5));
      setYPos((Math.round(e.clientY / window.innerHeight * 10)) -5);
  }

  return (
    <main className={homeTitle} onMouseMove={(e) => handleMouseMove(e)}>
      <div className={titleWrapper}>
        <h1>
          pierre pellegrino
        </h1>
        <span className={titleShadow} style={{left: `${xPos}px`, bottom: `${yPos}px`}}>
          pierre pellegrino
        </span>
      </div>
      <h3>{h3}</h3>

      <div className={rightArrow} onClick={() => handleScrollToWork()}>
        <Arrow />
      </div>
      <div className={bottomArrow} onClick={() => handleScrollToWork()} style={{transform: "rotate(90deg)"}}>
        <Arrow />
      </div>
    </main>
  );
};

export default HomeTitle;