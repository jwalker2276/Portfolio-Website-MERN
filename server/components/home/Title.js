import React from 'react';
// Style
import '../../scss/home/title.scss';

const Title = props => {
  // Define the title word, accent word and font color
  const { title, accent, color } = props;

  // Determine font color class
  let colorClass = 'title__dark';
  // Determine stroke color class
  let strokeClass = 'title__stroke--dark';

  if (color === 'dark') {
    colorClass = 'title__font--dark';
    strokeClass = 'title__stroke--dark';
  } else {
    colorClass = 'title__font--light';
    strokeClass = 'title__stroke--light';
  }

  return (
    <div className="title__wrapper">
      <div className="title__top">
        <h6 className="title__accent--clear">{accent}</h6>
        <svg className="title__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <line className={`title__svg__path ${strokeClass}`} x1="50" y1="0" x2="50" y2="100" />
        </svg>
        <h6 className={`title__accent ${colorClass}`}>{accent}</h6>
      </div>
      <div className="title__bottom">
        <h1 className={`title__main ${colorClass}`}>{title}</h1>
      </div>
    </div>
  );
};

export default Title;
