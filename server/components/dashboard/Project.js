import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setProjectData } from '../../reduxState/actions/homePageActions';
// Components
import ProjectImages from './ProjectImages';
import ProjectMain from './ProjectMain';
import ProjectTech from './ProjectTech';
// Styles
import '../../scss/dashboard/cards.scss';
import '../../scss/dashboard/projects.scss';

class Project extends Component {
  constructor(props) {
    super(props);
    this.updateInitalState = this.updateInitalState.bind(this);
    this.updateServer = this.updateServer.bind(this);
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

    if (prevProps.updateServer !== this.props.updateServer) {
      if (this.props.updateServer) {
        // Run this.updateServer method
        this.updateServer();
        // Toggle the flag on the parent back to false
        this.props.toggleUpdateServer();
      }
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

  async convertStringToArray(dataString) {
    let dataArray = [];

    // Check for empty string
    if (dataString === '') {
      return dataArray;
    }
    // Convert string to array
    dataArray = await dataString.split(',');

    return dataArray;
  }

  // This method is passed to project.js
  updateProjectState(key, value) {
    // Update state to new string value
    this.setState({ [key]: value });
  }

  // This method takes the current project data and updates the server
  async updateServer() {
    // Attach auth header
    // Image uploads and page redirect remove this header
    const token = localStorage.getItem('jwtToken');

    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    }

    const { title, type, link, description, imageIds, frontend, backend, tools, id } = this.state;

    // Convert strings to arrays for payload
    const frontendTechArr = await this.convertStringToArray(frontend);
    const backendTechArr = await this.convertStringToArray(backend);
    const toolsTechArr = await this.convertStringToArray(tools);

    // Remove undefined and null values if they exist
    const cleanedImageIds = await imageIds
      .filter(imageId => imageId !== '')
      .filter(imageId => imageId !== null)
      .filter(imageId => imageId !== undefined);

    // Build payload for action
    const payload = await {
      projectId: id,
      title,
      type,
      link,
      description,
      frontendTech: frontendTechArr,
      backendTech: backendTechArr,
      toolsTech: toolsTechArr,
      imageIds: cleanedImageIds
    };

    // Call post action
    await this.props.setProjectData(payload);
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
          <ProjectTech
            frontend={frontend}
            backend={backend}
            tools={tools}
            updateProjectState={this.updateProjectState}
          />
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { setProjectData }
)(Project);
