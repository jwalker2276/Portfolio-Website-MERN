import React from 'react';
// Components
import Title from './Title';
// Styles
import '../scss/skills.scss';

class Skills extends React.Component {
  render() {
    return (
      <div className="skills__wrapper">
        <Title title="skills" accent="my" color="dark" />
      </div>
    );
  }
}

export default Skills;
