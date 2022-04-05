import React from 'react';
import {
  profileItem,
} from './profile-item.module.scss';

const ProfileItem = ({icon, content}) => {
  return (
      <li className={profileItem}>
        <span>{icon}</span> 
        <div dangerouslySetInnerHTML={{__html: content}} />
      </li>
  );
};

export default ProfileItem;