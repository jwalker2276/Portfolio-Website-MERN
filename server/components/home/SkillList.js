import React from 'react';

// Style
import '../../scss/home/skill-list.scss';

class SkillList extends React.Component {
  render() {
    const { list } = this.props;

    if (list === undefined) {
      return <p>loading....</p>;
    }

    const listItems = list.map(listItem => (
      <li key={listItem} className="skill__listitem">
        {listItem}
      </li>
    ));

    return <ul className="skill__list">{listItems}</ul>;
  }
}

export default SkillList;
