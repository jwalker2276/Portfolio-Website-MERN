import React, { Component } from 'react';
import _isEmpty from 'lodash.isempty';

class SkillsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: ''
    };
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
    const { title, skillsType } = this.props;
    return (
      <div className={`skill__group group__${skillsType}`}>
        <form className="group__form" onSubmit={this.handleSubmit}>
          <label htmlFor={title} className="group__form__label">
            {title}
            <textarea
              className="group__form__textarea"
              rows="5"
              cols="33"
              type="text"
              name="skills"
              value={this.state.skills}
              onChange={this.updateChange}
            />
          </label>
          <input className="group__submit" type="submit" value="Update Changes" />
        </form>
      </div>
    );
  }
}

export default SkillsCard;
