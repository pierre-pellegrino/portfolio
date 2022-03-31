import React from 'react';
import {
  profileItem,
  itemIcon
} from './profile-item.module.scss';

const ProfileItem = ({icon, content}) => {
  return (
      <li className={profileItem}>
        <span>{icon}</span> 
        <p>{content}</p>
      </li>
  );
};

export default ProfileItem;