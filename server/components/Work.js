import React from 'react';
// Components
import Title from './Title';
// Styles
import '../scss/work.scss';
class Work extends React.Component {
  render() {
    return (
      <div className="work__wrapper">
        <Title title="work" accent="my" color="light" />
      </div>
    );
  }
}

export default Work;
