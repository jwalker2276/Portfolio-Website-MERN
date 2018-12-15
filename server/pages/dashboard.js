import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { getProfileData, getProjectData } from '../reduxState/actions/homePageActions';
// Components
import LogoutButton from '../components/LogoutButton';
import DashboardSkills from '../components/DashboardSkills';
// Styles
import '../scss/dashboard.scss';

class Dashboard extends React.Component {
  // Check if user is authenticated client side
  componentDidMount() {
    if (!this.props.auth.isAuth) {
      // User should not be here, redirect to login page.
      Router.push('/account');
    }

    // Call actions to get server data
    this.props.getProfileData();
    this.props.getProjectData();
  }

  // Check if user clicked logout
  componentDidUpdate(prevProps) {
    // Check if logout button was pressed
    if (this.props.auth.isAuth !== prevProps.auth.isAuth) {
      // Redirect back to login screen
      Router.push('/account');
    }
  }

  render() {
    return (
      <div className="dashboard-wrapper">
        <nav className="dashboard__nav">
          <LogoutButton />
        </nav>
        <section className="dashboard__skills">
          <DashboardSkills />
        </section>
        <section className="dashboard__project">
          <h1>Projects</h1>
        </section>
        <section className="dashboard__about">
          <h1>About Info</h1>
        </section>
        <section className="dashboard__contact">
          <h1>Contact Info</h1>
        </section>
      </div>
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
)(Dashboard);
