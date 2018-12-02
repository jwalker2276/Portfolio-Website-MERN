import React from 'react';
// Components
import Title from './Title';
import Skill from './Skill';
// Styles
import '../scss/skills.scss';

class Skills extends React.Component {
  render() {
    return (
      <div className="skills__wrapper">
        <Title title="skills" accent="my" color="dark" />
        <div className="skills">
          <Skill type="Front-end" />
          <Skill type="Back-end" />
          <Skill type="Tools" />
          <Skill type="Knowledge" />
        </div>
      </div>
    );
  }
}

export default Skills;
