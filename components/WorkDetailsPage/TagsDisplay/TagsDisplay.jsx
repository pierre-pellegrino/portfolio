import React from 'react';

const TagsDisplay = ({tags}) => {
  return (
    <>
      {tags.map((tag, i) => {
        return <span key={i}>{tag}</span>
      })}
    </>
  );
};

export default TagsDisplay;