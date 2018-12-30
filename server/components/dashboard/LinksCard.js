import React, { Component, Fragment } from 'react'; // Styles
import '../../scss/dashboard/cards.scss';

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
      <div className="link__group">
        {isEditable ? (
          <form className="group__form" onSubmit={this.handleSubmit}>
            <label htmlFor={title} className="group__form__label">
              {title}
              <input
                className="group__form__input"
                type="text"
                name="link"
                value={this.state.link}
                onChange={this.updateChange}
              />
            </label>
            <input className="group__submit" type="submit" value="Update Changes" />
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
