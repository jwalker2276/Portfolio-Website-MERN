import React from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import _isEmpty from 'lodash.isempty';
import { getProfileData, getProjectData } from '../reduxState/actions/homePageActions';
import setAuthToken from '../helpers/setAuthToken';
import { setCurrentUser } from '../reduxState/actions/authActions';

// Components
import LogoutButton from '../components/LogoutButton';
import DashboardSkills from '../components/DashboardSkills';
import Login from '../components/Login';
// Styles
import '../scss/dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  // Check if user is authenticated client side
  componentDidMount() {
    // Check if token is in local storage
    if (localStorage.jwtToken) {
      // Set token to header for requests
      setAuthToken(localStorage.jwtDecode);
      // Decode the token for user info
      const decoded = jwtDecode(localStorage.jwtToken);
      // Set user
      this.props.setCurrentUser(decoded);
      // Call actions to get server data
      this.props.getProfileData();
      this.props.getProjectData();
    } else {
      // User should not be here, login should render.
      this.setState({ isLoggedIn: false });
    }
  }

  // Check if user clicked logout
  componentDidUpdate(prevProps) {
    // Check for login or logout event
    if (this.props.auth.isAuth !== prevProps.auth.isAuth) {
      // Change loggedin state
      if (this.props.auth.isAuth) {
        this.logInOut();
      } else {
        this.logInOut();
      }

      // Check for devtool hack
      if (_isEmpty(this.props.auth.user)) {
        console.log('Dont do that!!!!');
        this.logInOut();
      }
    }

    // Check for devtool hack
    if (this.state.isLoggedIn && !this.props.auth.isAuth) {
      if (_isEmpty(this.props.auth.user)) {
        console.log('Nope !!!!');
        this.logInOut();
      }
    }

    // Check for devtool hack
    if (this.state.isLoggedIn && this.props.auth.isAuth) {
      if (_isEmpty(this.props.auth.user)) {
        console.log('Really !!!!');
        this.logInOut();
      }
    }

    // Check token times
    if (localStorage.jwtToken) {
      const token = jwtDecode(localStorage.jwtToken);
      const currentTime = Date.now() / 1000;
      const expireTime = token.exp;
      if (currentTime > expireTime) {
        console.log('Time expired');
        this.logInOut();
      }
    }
  }

  // Switch state for rendering
  logInOut() {
    this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
  }

  render() {
    const { isLoggedIn } = this.state;

    if (isLoggedIn) {
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
    return (
      <div className="dashboard__login__wrapper">
        <Login />
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
  { getProfileData, getProjectData, setCurrentUser }
)(Dashboard);
