import React from 'react';
import ProfileItem from '../ProfileItem/ProfileItem';
import {
  headerWrapper,
  headerWrapperInformations,
  leftArrow
} from './header.module.scss'
import {
  mb1,
  tac,
} from "../../styles/variables.module.scss";
import Arrow from 'components/Arrow/Arrow';
import Link from "next/link";

const Header = ({data}) => {


  return (
    <div className={`${headerWrapper} ${mb1}`}>
      <div className={leftArrow}>
        <Link href="/">
          <a><Arrow /></a>
        </Link>
      </div>
      <h1 className={mb1}>Pierre Pellegrino</h1>
      <h2 className={`${tac} ${mb1}`}> Développeur Front-End </h2>

      <ul className={headerWrapperInformations}>
        {data.map((item, key) => {
          return <ProfileItem icon={item.icon} content={item.content} key={key}/>
        })}
      </ul>
    </div>
  );
};

export default Header;