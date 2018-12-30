import React, { Component, Fragment } from 'react';
// Styles
import '../../scss/dashboard/cards.scss';
import '../../scss/dashboard/projects.scss';

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.updateCurrentState = this.updateCurrentState.bind(this);
    this.convertArrayToString = this.convertArrayToString.bind(this);
    this.convertStringToArray = this.convertStringToArray.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      title: '',
      type: '',
      link: '',
      description: '',
      imageIds: [],
      frontend: '',
      backend: '',
      tools: '',
      id: ''
    };
  }

  componentDidMount() {
    this.updateCurrentState(this.props.projectData);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.projectData !== this.props.projectData) {
      this.updateCurrentState(this.props.projectData);
    }
  }

  async updateCurrentState(projectData) {
    const { title, type, link, description, imageIds, tech, id } = projectData;

    this.setState({ title });
    this.setState({ type });
    this.setState({ link });
    this.setState({ description });
    this.setState({ id });
    this.setState({ imageIds });

    // Convert tech arrays to strings for editing
    const frontendString = await this.convertArrayToString(tech.frontend);
    const backendString = await this.convertArrayToString(tech.backend);
    const toolsString = await this.convertArrayToString(tech.tools);

    this.setState({ frontend: frontendString });
    this.setState({ backend: backendString });
    this.setState({ tools: toolsString });
  }

  convertArrayToString(data) {
    // Check for empty array
    if (data.length === 0) return '';
    // Convert the array to a comma separted string
    const dataString = data.reduce((string, skill) => `${string},${skill}`);
    // Return string
    return dataString;
  }

  convertStringToArray(data) {
    // Check for empty strin
    // Convert string to array
    // Update state if array
  }

  handleChange(event) {
    const { name, value } = event.currentTarget;
    // Update state to new string value
    this.setState({ [name]: value });
  }

  render() {
    const { title, type, link, description, imageIds, frontend, backend, tools } = this.state;

    if (frontend === undefined) return null;

    return (
      <Fragment>
        <div className="project__images">
          <h3 className="group__title">Images</h3>
          <p>no images currently</p>
        </div>
        <div className="project__main">
          <h3 className="group__title">Main Details</h3>
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
        </div>
        <div className="project__tech">
          <h3 className="group__title">Tech Details</h3>
          <label className="group__form__label" htmlFor="Frontend Tech">
            Front End Tech
            <input
              className="group__form__input"
              type="text"
              name="frontend"
              value={frontend}
              onChange={this.handleChange}
            />
          </label>
          <label className="group__form__label" htmlFor="Backend Tech">
            Backend Tech
            <input
              className="group__form__input"
              type="text"
              name="backend"
              value={backend}
              onChange={this.handleChange}
            />
          </label>
          <label className="group__form__label" htmlFor="Tools">
            Tools
            <input
              className="group__form__input"
              type="text"
              name="tools"
              value={tools}
              onChange={this.handleChange}
            />
          </label>
        </div>
      </Fragment>
    );
  }
}
