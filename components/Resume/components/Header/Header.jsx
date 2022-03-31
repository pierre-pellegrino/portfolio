import React from 'react';
import ProfileItem from '../ProfileItem/ProfileItem';
import {
  headerWrapper,
  headerWrapperInformations
} from './header.module.scss'
import {
  mb1,
  tac,
} from "../../styles/variables.module.scss";

const Header = ({data}) => {
  return (
    <div className={`${headerWrapper} ${mb1}`}>
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