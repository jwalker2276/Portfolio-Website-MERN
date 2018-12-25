import React, { Component, Fragment } from 'react';
import _isEmpty from 'lodash.isempty';
// Styles
import '../../scss/dashboard/dashboard-skills-card.scss';

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
    const { skillData, title } = this.props;
    const { isEditable } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        {isEditable ? (
          <form onSubmit={this.handleSubmit}>
            <input
              className="editForm__input"
              type="text"
              name="skills"
              value={this.state.skills}
              onChange={this.updateChange}
            />
            <input type="submit" value="Update Changes" />
          </form>
        ) : (
          <Fragment>
            {skillData.map(skill => (
              <p key={skill} className="card__skill">
                {skill}
              </p>
            ))}
          </Fragment>
        )}
      </div>
    );
  }
}

export default SkillsCard;
