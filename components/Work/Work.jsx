import React from 'react';
import Arrow from '../Arrow/Arrow';
import WorkCard from '../WorkCard/WorkCard';
import {
  workWrapper,
  leftArrow,
  light
} from "./work.module.scss";
import worksen from "../../data/works-en.js";
import worksfr from "../../data/works-fr.js";
import { useAtom } from 'jotai';
import { lightTheme } from 'store';
import Link from "next/link";


const Work = ({locale, mobile}) => {
  const [theme] = useAtom(lightTheme);
  const handleScrollToHome = () => {
    window.scroll(0,0);
  }
  const works = locale == "fr" ? worksfr : worksen;

  return (
    <div className={`${theme && light} ${workWrapper}`}>
      {works.map(project => {
        return (
          <WorkCard 
            key={project.id}
            project={project}
            mobile={mobile}
          />
        )
      })}

      {mobile ? (
        <Link href="/">
          <a><div className={leftArrow} style={{transform: "rotate(180deg)"}}>
            <Arrow />
          </div></a>
        </Link>
      ) : (
        <div className={leftArrow} onClick={() => handleScrollToHome()} style={{transform: "rotate(180deg)"}}>
          <Arrow />
        </div>
      )}
    </div>
  );
};

export default Work;