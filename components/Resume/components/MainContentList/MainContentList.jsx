import React from 'react';
import {
  mainContentList,
  mainContentListSubpart
} from './main-content-list.module.scss';
import {
  date
} from '../../styles/variables.module.scss'

const MainContentList = ({title, content}) => {
  return (
    <div className={mainContentList}>
      <h2>{title}</h2>

      {content.map((entry, key) => {
        return (
          !entry.hidden && (
            <div key={key} className={mainContentListSubpart}>
              <h5>{entry.title}</h5>
              {entry.date && <p className={date}>{entry.date}</p>}
              {entry.content.map((item, index) => {
                return <p key={index}>{item}</p>
              })}
            </div>
          )
        )
      })}

    </div>
  );
};

export default MainContentList;