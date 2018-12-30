import React, { Component, Fragment } from 'react';
import axios from 'axios';
import _isEmpty from 'lodash.isempty';
import { connect } from 'react-redux';
import { getProjectData } from '../../reduxState/actions/homePageActions';
// Components
import ProjectCard from './ProjectCard';
// Styles
import '../../scss/dashboard/projects.scss';
import '../../scss/dashboard/common.scss';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {},
      projectToUpdate: ''
    };
    this.updateProjectState = this.updateProjectState.bind(this);
    this.updateProjectState = this.updateProjectState.bind(this);
    this.updateServer = this.updateServer.bind(this);
  }

  componentDidMount() {
    // Get data from server
    this.props.getProjectData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.projectData !== prevProps.projectData) {
      const { projectData } = this.props;

      if (projectData) {
        // Populate state
        this.setState({
          projects: projectData
        });

        // Check if projectToUpdate value is empty
        if (this.state.projectToUpdate === '') {
          // Set projectToUpdate value
          this.setState({ projectToUpdate: '0' });
        }
      }
    }
  }

  // Side bar buttons use this method to change active project
  updateProjectToEdit(e) {
    const projectNum = e.currentTarget.value;
    this.setState({ projectToUpdate: projectNum });
  }

  // This method is passed to each child for updating this state
  updateProjectState(project) {
    console.log(`Updating ${this.state.projectToUpdate} to ${project}`);

    // Copy projects
    // const projects = { ...this.state.projects };
    // console.log('current projects');
    // console.log(projects);
    // // Add new or changes to projects
    // projects[projectName] = project;
    // console.log('new change');
    // console.log(projects);
    // // Update state
    // this.setState({ projects });
    // console.log('After setState');
    // console.log(this.state.projects);
  }

  // This method take current project and updates server
  updateServer() {
    // Attach auth header
    // Image uploads and page redirect remove this header
    const token = localStorage.getItem('jwtToken');

    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    }

    // Pass single project object to action
    console.log('updating project : ' + this.state.projectToUpdate);
  }

  render() {
    // Make sure redux state is loaded
    if (this.props.projectData === null) {
      return null;
    }
    // Make sure current state is filled
    if (_isEmpty(this.state.projects)) {
      return null;
    }

    // Grab the keys name for the sidebar
    const projectNames = Object.keys(this.state.projects);
    const { projects, projectToUpdate } = this.state;
    // Grab the current projectData object
    const currentProjectData = projects[parseInt(projectToUpdate, 10)];

    return (
      <Fragment>
        <nav className="project__nav">
          <div className="project__nav__left">
            {projectNames.map(projectNum => (
              <button
                className="secondary__button"
                type="button"
                value={projectNum}
                key={projectNum}
                onClick={e => this.updateProjectToEdit(e)}
              >
                Project&nbsp;
                {projectNum}
              </button>
            ))}
          </div>
          <div className="project__nav__right">
            <button className="primary__button" type="button" onClick={this.updateServer}>
              Save
            </button>
            <button className="primary__button" type="button" onClick={this.updateServer}>
              Update Server
            </button>
          </div>
        </nav>
        <section className="project__edit-card">
          <ProjectCard
            projectData={currentProjectData}
            updateProjectState={this.updateProjectState}
          />
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  projectData: state.homePageData.projectData
});

export default connect(
  mapStateToProps,
  { getProjectData }
)(Projects);
