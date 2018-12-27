import React, { Component } from 'react';
import _isEmpty from 'lodash.isempty';
// Styles
import '../../scss/dashboard/cards.scss';

class SkillsCard extends Component {
  constructor(props) {
    super(props);
    this.state = { skills: '' };
    this.updateChange = this.updateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.skillData !== this.props.skillData) {
      if (!_isEmpty(this.props.skillData)) {
        const { skillData } = this.props;
        // Reduce array to string
        const skillString = skillData.reduce((accumulator, skill) => `${accumulator},${skill}`);
        // Set this string to state for input
        this.setState({ skills: skillString });
      }
    }
  }

  // Update state
  updateChange(event) {
    const { value } = event.currentTarget;
    // Update state to new string value
    this.setState({ skills: value });
  }

  // Handle submit of form
  handleSubmit(event) {
    event.preventDefault();
    // Split skills string into array
    const skillsString = this.state.skills;
    const skillsArray = skillsString.split(',');
    // Update profile component state
    this.props.updateProfileState(this.props.skillsType, skillsArray);
  }

  render() {
    const { skillData, title, skillsType } = this.props;
    const { isEditable } = this.props;

    return (
      <div className={`skill__group group__${skillsType}`}>
        <h5 className="group__title">{title}</h5>
        {isEditable ? (
          <form className="group__form" onSubmit={this.handleSubmit}>
            <input
              className="group__input"
              type="text"
              name="skills"
              value={this.state.skills}
              onChange={this.updateChange}
            />
            <input className="group__submit" type="submit" value="Update Changes" />
          </form>
        ) : (
          <ul className="skill__group__list">
            {skillData.map(skill => (
              <li key={skill} className="skill__group__item">
                {skill}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default SkillsCard;
