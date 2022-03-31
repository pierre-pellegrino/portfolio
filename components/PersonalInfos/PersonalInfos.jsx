import React from 'react';
import {
  personalInfosWrapper,
  topArrow,
} from './personalinfos.module.scss';
import Arrow from "components/Arrow/Arrow";

const PersonalInfos = () => {
  const handleScroll = (x,y) => {
    window.scroll(x,y);
  }

  return (
    <div className={personalInfosWrapper}>
      <div className={topArrow} onClick={() => handleScroll(0, 0)}>
        <Arrow />
      </div>
    </div>
  );
};

export default PersonalInfos;