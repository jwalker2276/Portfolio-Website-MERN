import React, { Component } from 'react';

export default class ProjectMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      type: '',
      link: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Check for loading of props
    if (this.props !== prevProps) {
      // Check if state needs to update
      if (this.props.title !== this.state.title) {
        this.setInitialState();
      }
      if (this.props.type !== this.state.type) {
        this.setInitialState();
      }
      if (this.props.link !== this.state.link) {
        this.setInitialState();
      }
      if (this.props.description !== this.state.description) {
        this.setInitialState();
      }
    }
  }

  // This method loads props into this.state
  setInitialState() {
    const { title, type, link, description } = this.props;

    this.setState({ title });
    this.setState({ type });
    this.setState({ link });
    this.setState({ description });
  }

  // This method updates this.state from input
  handleChange(e) {
    const { name, value } = e.currentTarget;
    // Update state
    this.setState({ [name]: value });
  }

  // This method updates parent state from this.state
  handleSubmit(event) {
    event.preventDefault();
    const { title, type, link, description } = this.state;
    // Update project state
    this.props.updateProjectState('title', title);
    this.props.updateProjectState('type', type);
    this.props.updateProjectState('link', link);
    this.props.updateProjectState('description', description);
  }

  render() {
    const { title, type, link, description } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="group__form__label" htmlFor="title">
          Title
          <input
            className="group__form__input"
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </label>
        <label className="group__form__label" htmlFor="type">
          Type
          <input
            className="group__form__input"
            type="text"
            name="type"
            value={type}
            onChange={this.handleChange}
          />
        </label>
        <label className="group__form__label" htmlFor="link">
          Link
          <input
            className="group__form__input"
            type="text"
            name="link"
            value={link}
            onChange={this.handleChange}
          />
        </label>
        <label className="group__form__label" htmlFor="description">
          Description
          <textarea
            className="group__form__textarea"
            rows="5"
            cols="33"
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
        </label>
        <input className="group__submit" type="submit" value="Update Changes" />
      </form>
    );
  }
}
