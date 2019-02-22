import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../reduxState/actions/authActions';
// Components
import Profile from './Profile';
import Projects from './Projects';

class Controller extends Component {
  constructor(props) {
    super(props);
    this.changeSection = this.changeSection.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      sectionToRender: 'profile'
    };
  }

  // Determine which section to render
  changeSection(section) {
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
      case 'profile':
        dashBoardSection = <Profile user={this.props.auth.user} />;
        break;
      case 'projects':
        dashBoardSection = <Projects />;
        break;
      default:
        dashBoardSection = <Profile user={this.props.auth.user} />;
    }

    return (
      <Fragment>
        <nav className="dashboard__nav">
          <div className="nav__buttons__left">
            <button
              className="nav__button"
              type="button"
              onClick={() => this.changeSection('profile')}
            >
              Profile
            </button>
            <button
              className="nav__button"
              type="button"
              onClick={() => this.changeSection('projects')}
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
        <section className="dashboard__content">{dashBoardSection}</section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { logout }
)(Controller);
