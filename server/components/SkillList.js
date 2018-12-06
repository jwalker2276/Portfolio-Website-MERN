import React from 'react';

// Style
import '../scss/skill-list.scss';

class SkillList extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.list}</li>
        <li>skill</li>
        <li>skill</li>
        <li>skill</li>
      </ul>
    );
  }
}

export default SkillList;
