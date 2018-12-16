import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProfileData, getProjectData } from '../reduxState/actions/homePageActions';
// Components
import LogoutButton from './LogoutButton';
import DashboardAbout from './DashboardAbout';
import DashboardSkills from './DashboardSkills';
import DashboardProjects from './DashboardProjects';
// Styles
import '../scss/dashboard-controller.scss';

class DashboardController extends Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
    this.state = {
      sectionToRender: 'skills'
    };
  }

  // Fetch data from server
  componentDidMount() {
    this.props.getProfileData();
    this.props.getProjectData();
  }

  // Determine which section to render
  handleEvent(section) {
    this.setState({ sectionToRender: section });
  }

  render() {
    const { sectionToRender } = this.state;
    let dashBoardSection;

    switch (sectionToRender) {
      case 'skills':
        dashBoardSection = <DashboardSkills />;
        break;
      case 'about':
        dashBoardSection = <DashboardAbout />;
        break;
      case 'projects':
        dashBoardSection = <DashboardProjects />;
        break;
      default:
        dashBoardSection = <DashboardSkills />;
    }

    return (
      <Fragment>
        <nav className="dashboard__nav">
          <div className="nav__buttons">
            <button type="button" onClick={() => this.handleEvent('skills')}>
              Skills
            </button>
            <button type="button" onClick={() => this.handleEvent('about')}>
              About
            </button>
            <button type="button" onClick={() => this.handleEvent('projects')}>
              Projects
            </button>
          </div>
          <LogoutButton />
        </nav>
        <section className="dashboard__section">{dashBoardSection}</section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  profileData: state.homePageData.profileData,
  projectData: state.homePageData.projectData
});

export default connect(
  mapStateToProps,
  { getProfileData, getProjectData }
)(DashboardController);
