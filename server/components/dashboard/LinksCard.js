import React, { Component, Fragment } from 'react'; // Styles
import '../../scss/dashboard/dashboard-skills-card.scss';

class LinksCard extends Component {
  constructor(props) {
    super(props);
    this.state = { link: '' };
    this.updateChange = this.updateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.props.linkData !== this.state.link) {
      // Only update if not currently editing input
      if (!this.props.isEditable) {
        // Set inital value
        this.setState({ link: this.props.linkData });
      }
    }
  }

  // Update state
  updateChange(event) {
    const { value } = event.currentTarget;
    // Update state to new string value
    this.setState({ link: value });
  }

  // Handle submit of form
  handleSubmit(event) {
    event.preventDefault();
    // Update profile component state
    this.props.updateProfileState(this.props.linkType, this.state.link);
  }

  render() {
    const { title } = this.props;
    const { isEditable } = this.props;

    return (
      <div>
        <h3>{title}</h3>
        {isEditable ? (
          <form onSubmit={this.handleSubmit}>
            <input
              className="editForm__input"
              type="text"
              name="link"
              value={this.state.link}
              onChange={this.updateChange}
            />
            <input type="submit" value="Update Changes" />
          </form>
        ) : (
          <Fragment>
            <p>{this.state.link}</p>
          </Fragment>
        )}
      </div>
    );
  }
}

export default LinksCard;
