import React, { Component, Fragment } from 'react'; // Styles
import '../../scss/dashboard/dashboard-skills-card.scss';

class BioCard extends Component {
  constructor(props) {
    super(props);
    this.state = { bio: '' };
    this.updateChange = this.updateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.props.bioData !== this.state.bio) {
      // Only update if not currently editing input
      if (!this.props.isEditable) {
        // Set inital value
        this.setState({ bio: this.props.bioData });
      }
    }
  }

  // Update state
  updateChange(event) {
    const { value } = event.currentTarget;
    // Update state to new string value
    this.setState({ bio: value });
  }

  // Handle submit of form
  handleSubmit(event) {
    event.preventDefault();
    // Update profile component state
    this.props.updateProfileState('bio', this.state.bio);
  }

  render() {
    const { title } = this.props;
    const { isEditable } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        {isEditable ? (
          <form onSubmit={this.handleSubmit}>
            <textarea
              rows="5"
              cols="33"
              className="editForm__input"
              type="text"
              name="link"
              value={this.state.bio}
              onChange={this.updateChange}
            />
            <input type="submit" value="Update Changes" />
          </form>
        ) : (
          <Fragment>
            <p>{this.state.bio}</p>
          </Fragment>
        )}
      </div>
    );
  }
}

export default BioCard;
