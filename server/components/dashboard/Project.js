import React, { Component, Fragment } from 'react';
// Components
import ProjectImages from './ProjectImages';
import ProjectMain from './ProjectMain';
import ProjectTech from './ProjectTech';
// Styles
import '../../scss/dashboard/cards.scss';
import '../../scss/dashboard/projects.scss';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.updateInitalState = this.updateInitalState.bind(this);
    this.convertArrayToString = this.convertArrayToString.bind(this);
    this.convertStringToArray = this.convertStringToArray.bind(this);
    this.updateProjectState = this.updateProjectState.bind(this);
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
    this.updateInitalState(this.props.projectData);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.projectData !== this.props.projectData) {
      this.updateInitalState(this.props.projectData);
    }
  }

  async updateInitalState(projectData) {
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

  updateProjectState(key, value) {
    // Update state to new string value
    this.setState({ [key]: value });
  }

  render() {
    const { title, type, link, description, imageIds, frontend, backend, tools } = this.state;

    if (frontend === undefined) return null;

    return (
      <Fragment>
        <div className="project__images">
          <h3 className="group__title">Images</h3>
          <ProjectImages imageIds={imageIds} updateProjectState={this.updateProjectState} />
        </div>
        <div className="project__main">
          <h3 className="group__title">Main Details</h3>
          <ProjectMain
            title={title}
            type={type}
            link={link}
            description={description}
            updateProjectState={this.updateProjectState}
          />
        </div>
        <div className="project__tech">
          <h3 className="group__title">Tech Details</h3>
          <ProjectTech frontend={frontend} backend={backend} tools={tools} />
        </div>
      </Fragment>
    );
  }
}
