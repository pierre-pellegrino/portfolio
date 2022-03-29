import React from 'react';
import Arrow from '../Arrow/Arrow';
import WorkCard from '../WorkCard/WorkCard';
import {
  workWrapper,
  leftArrow,
} from "./work.module.scss";
import works from "../../data/works-en.js";

const Work = () => {
  const handleScrollToHome = () => {
    window.scroll(0,0);
  }

  return (
    <div className={workWrapper}>      
      {works.map(project => {
        return (
          <WorkCard 
            key={project.id}
            project={project}
          />
        )
      })}

      <div className={leftArrow} onClick={() => handleScrollToHome()} style={{transform: "rotate(180deg)"}}>
        <Arrow />
      </div>
    </div>
  );
};

export default Work;