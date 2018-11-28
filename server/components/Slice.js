import React from 'react';
import '../scss/slice.scss';

const Slice = props => (
  <div className="slice__wrapper">
    <svg
      className="slice__svg"
      width="100%"
      height="100%"
      viewBox="0 0 1100 126"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="slice__path" d="M1100,0L0,126L1100,126L1100,0Z" />
    </svg>
  </div>
);

export default Slice;
