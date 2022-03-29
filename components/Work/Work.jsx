import React from 'react';
import WorkCard from '../WorkCard/WorkCard';
import {
  workWrapper,
} from "./work.module.scss";

const Work = () => {
  return (
    <div className={workWrapper}>      
      <WorkCard />
    </div>
  );
};

export default Work;