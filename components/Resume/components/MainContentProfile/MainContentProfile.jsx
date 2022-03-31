import React from 'react';

const MainContentProfile = ({title, content}) => {
  return (
    <div>
      <h2>{title}</h2>
      {content.map((entry, key) => {
        return <p key={key}>{entry}</p>
      })}
    </div>
  );
};

export default MainContentProfile;