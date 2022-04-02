import React from 'react';
import {
  mainContentProfile,
} from '../MainContentList/main-content-list.module.scss';

const MainContentProfile = ({title, content}) => {
  return (
    <div className={mainContentProfile}>
      <h2>{title}</h2>
      {content.map((entry, key) => {
        return <p key={key}>{entry}</p>
      })}
    </div>
  );
};

export default MainContentProfile;