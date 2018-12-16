import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProfileData, getProjectData } from '../reduxState/actions/homePageActions';
import { logout } from '../reduxState/actions/authActions';
// Components
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
    this.setState({
      sectionToRender: section
    });
  }

  // Logout
  logout() {
    // Use redux action to logout user.
    this.props.logout();
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
          <div className="nav__buttons__left">
            <button
              className="nav__button"
              type="button"
              onClick={() => this.handleEvent('skills')}
            >
              Skills
            </button>
            <button className="nav__button" type="button" onClick={() => this.handleEvent('about')}>
              About
            </button>
            <button
              className="nav__button"
              type="button"
              onClick={() => this.handleEvent('projects')}
            >
              Projects
            </button>
          </div>
          <div className="nav__buttons__right">
            <button
              className="nav__button nav__button--right"
              type="button"
              onClick={() => this.logout()}
            >
              Logout
            </button>
          </div>
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
  { getProfileData, getProjectData, logout }
)(DashboardController);
