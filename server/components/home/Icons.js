import React, { Fragment } from 'react';

const Icons = props => {
  // Icons

  const iconFrontEnd = (
    <Fragment>
      <rect width="18" height="18" x="3" y="3" className="skill__icon__primary" rx="2" />
      <path className="skill__icon__seondary" d="M8.7 13.3a1 1 0 0 1-1.4 1.4l-2-2a1 1 0 0 1 0-1.4l2-2a1 1 0 1 1 1.4 1.4L7.42 12l1.3 1.3zm6.6 0l1.29-1.3-1.3-1.3a1 1 0 1 1 1.42-1.4l2 2a1 1 0 0 1 0 1.4l-2 2a1 1 0 0 1-1.42-1.4zm-3.32 3.9a1 1 0 0 1-1.96-.4l2-10a1 1 0 0 1 1.96.4l-2 10z" />
    </Fragment>
  );

  const iconBackEnd = (
    <Fragment>
      <path className="skill__icon__primary" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm8.12 7.47A5 5 0 1 0 17 14V9a1 1 0 0 0-1.7-.7l-1.18 1.17z" />
      <path className="skill__icon__secondary" d="M12 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6-11a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM6 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm12 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM6 21a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM8 6h4a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2z" />
    </Fragment>
  );

  const iconTools = (
    <Fragment>
      <path className="skill__icon__primary" d="M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <circle className="skill__icon__secondary" cx="12" cy="12" r="2" />
    </Fragment>
  );

  const iconKnowledge = (
    <Fragment>
      <path className="skill__icon__primary" d="M5 8a7 7 0 1 1 10.62 6l-.64 3.2a1 1 0 0 1-.98.8h-4a1 1 0 0 1-.98-.8L8.38 14A7 7 0 0 1 5 8zm12 0a5 5 0 0 0-5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3 1 1 0 0 0 2 0z" />
      <path className="skill__icon__secondary" d="M15 21a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2 1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z" />
    </Fragment>
  );

  // Determine icon to display
  const { iconName } = props;

  let iconToDisplay = iconKnowledge;

  switch (iconName) {
    case 'Front-end':
      iconToDisplay = iconFrontEnd;
      break;
    case 'Back-end':
      iconToDisplay = iconBackEnd;
      break;
    case 'Tools':
      iconToDisplay = iconTools;
      break;
    case 'Knowledge':
      iconToDisplay = iconKnowledge;
      break;
    default:
      iconToDisplay = iconFrontEnd;
      break;
  }

  return (
    <svg className="skill__icon__svg" data-aos="pop-and-spin" data-aos-delay="1000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {iconToDisplay}
    </svg>
  );
};

export default Icons;
