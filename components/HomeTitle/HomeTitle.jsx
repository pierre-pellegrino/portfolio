import React, { useState } from 'react';
import Arrow from '../Arrow/Arrow';
import {
  titleWrapper,
  titleShadow,
  homeTitle,
  rightArrow,
  subtitle,
  textAnim
} from '/styles/Home.module.scss';

const HomeTitle = ({h3}) => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  const handleScroll = (x,y) => {
    window.scroll(x,y);
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
      <p className={subtitle}>{h3}</p>
      <div className={textAnim}>
        <p>
          I create websites using&nbsp;
        </p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>NextJS</li>
          </ul>
      </div>

      <div className={rightArrow} onClick={() => handleScroll(window.innerWidth,0)}>
        <Arrow />
      </div>
    </main>
  );
};

export default HomeTitle;