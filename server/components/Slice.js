import React from 'react';
import '../scss/slice.scss';

class Slice extends React.Component {
  render() {
    const { color } = this.props;
    // Slice css class
    const sliceClass = `slice__path--${color}`;

    // Paths
    const topSlice = <path className={sliceClass} d="M1100,0L0,126L1100,126L1100,0Z" />;
    const topLeftSlice = <path className={sliceClass} d="M0 0L1100 126H0V0Z" />;
    const bottomSlice = <path className={sliceClass} d="M1100,126L0,0L1100,0L1100,126Z" />;
    // Slice variable
    let slice = topSlice;
    // Determine path
    if (this.props.position === 'top') {
      slice = topSlice;
    } else if (this.props.position === 'top-left') {
      slice = topLeftSlice;
    } else {
      slice = bottomSlice;
    }

    return (
      <div className="slice__wrapper">
        <svg
          className="slice__svg"
          width="100%"
          height="100%"
          viewBox="0 0 1100 126"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          {slice}
        </svg>
      </div>
    );
  }
}

export default Slice;
