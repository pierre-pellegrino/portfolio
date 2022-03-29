import React, { useEffect, useState } from 'react';
import {
  globalWrapper,
  titleWrapper,
  titleShadow,
} from '/styles/Home.module.scss'

const HomeTitle = () => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  const handleMouseMove = (e) => {
      setXPos(-(Math.round(e.clientX / window.innerWidth * 10) -5));
      setYPos((Math.round(e.clientY / window.innerHeight * 10)) -5);
  }


  return (
    <main className={globalWrapper} onMouseMove={(e) => handleMouseMove(e)}>
      <div className={titleWrapper}>
        <span className={titleShadow} style={{left: `${xPos}px`, bottom: `${yPos}px`}}>
          pierre pellegrino
        </span>
        <h1>
          pierre pellegrino
        </h1>
      </div>
    </main>
  );
};

export default HomeTitle;