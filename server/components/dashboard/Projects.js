import React, { Component, Fragment } from 'react';
import _isEmpty from 'lodash.isempty';
import { connect } from 'react-redux';
import { getProjectData } from '../../reduxState/actions/homePageActions';
// Components
import Project from './Project';
// Styles
import '../../scss/dashboard/projects.scss';
import '../../scss/dashboard/common.scss';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: {},
      projectToUpdate: '',
      updateServer: false
    };
    this.updateProjectToEdit = this.updateProjectToEdit.bind(this);
    this.determineButton = this.determineButton.bind(this);
    this.toggleUpdateServer = this.toggleUpdateServer.bind(this);
    this.addProject = this.addProject.bind(this);
    this.buildProjectData = this.buildProjectData.bind(this);
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

    // // Check if update is different
    // if (this.props.errors.update !== prevProps.errors.update) {
    //   // Check update
    //   if (this.props.errors.update === 'Update successful') {
    //     // Pull new data from server
    //     this.props.getProjectData();
    //   }
    // }
  }

  // Side bar buttons use this method to change active project
  updateProjectToEdit(e) {
    const projectNum = e.currentTarget.value;
    this.setState({ projectToUpdate: projectNum });
  }

  // This method returns a button for each project
  determineButton(projectNum) {
    const { projectToUpdate } = this.state;

    // Determine which class to apply
    let buttonClass = 'secondary__button';
    if (projectToUpdate === projectNum) {
      buttonClass = 'secondary__button--active';
    }

    return (
      <button
        className={buttonClass}
        type="button"
        value={projectNum}
        key={projectNum}
        onClick={e => this.updateProjectToEdit(e)}
      >
        Project&nbsp;
        {projectNum}
      </button>
    );
  }

  // This method toggles the updateServer flag
  toggleUpdateServer() {
    this.setState(prevState => ({
      updateServer: !prevState.updateServer
    }));
  }

  // This methods sets up a new project
  addProject() {
    // Get current number of projects
    const currentProjectsNum = Object.keys(this.state.projects).length;
    const nextProjectsNum = currentProjectsNum + 1;
    // Add one to the number of projects
    this.setState({ projectToUpdate: nextProjectsNum });
  }

  // This method sets up project data
  buildProjectData(projectNames) {
    const { projectToUpdate, projects } = this.state;
    // Check if new project was selected
    if (projectToUpdate > projectNames.length) {
      // Return new project object
      return {
        title: '',
        type: '',
        link: '',
        description: '',
        imageIds: [],
        tech: {
          frontend: [],
          backend: [],
          tools: []
        },
        id: ''
      };
    }
    // Grab the current projectData object for props
    return projects[parseInt(projectToUpdate, 10)];
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
    // Get project data
    const currentProjectData = this.buildProjectData(projectNames);

    return (
      <Fragment>
        <nav className="project__nav">
          <div className="project__nav__left">
            {projectNames.map(projectNum => this.determineButton(projectNum))}
          </div>
          <div className="project__nav__right">
            <button className="secondary__button" type="button" onClick={this.addProject}>
              Add Project
            </button>
            <button className="tertiary__button" type="button">
              Delete Current Project
            </button>
            <button className="primary__button" type="button" onClick={this.toggleUpdateServer}>
              Update Server
            </button>
          </div>
        </nav>
        <section className="project__edit-card">
          <Project
            projectData={currentProjectData}
            toggleUpdateServer={this.toggleUpdateServer}
            updateServer={this.state.updateServer}
          />
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  projectData: state.homePageData.projectData,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getProjectData }
)(Projects);
