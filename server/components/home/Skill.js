import React from 'react';
// Components
import Icon from './Icons';
import SkillList from './SkillList';

// Style
import '../../scss/home/skill.scss';

class Skill extends React.Component {
  render() {
    // Determine skill type from props
    const { type, skills } = this.props;

    return (
      <div className="skill__group">
        <Icon iconName={type} />
        {/* Title */}
        <h3 className="skill__title">{type}</h3>
        {/* Path */}
        <svg className="skill__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <line className="skill__path" x1="50" y1="0" x2="50" y2="150" />
        </svg>
        {/* Data */}
        <SkillList list={skills} />
      </div>
    );
  }
}

export default Skill;