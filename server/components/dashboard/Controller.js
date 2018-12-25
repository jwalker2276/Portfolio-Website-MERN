import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../reduxState/actions/authActions';
// Components
import Profile from './Profile';
import Projects from './Projects';
// Styles
import '../../scss/dashboard/dashboard-controller.scss';

class Controller extends Component {
  constructor(props) {
    super(props);
    this.changeSection = this.changeSection.bind(this);
    this.logout = this.logout.bind(this);
    this.edit = this.edit.bind(this);
    this.state = {
      sectionToRender: 'profile',
      editData: false
    };
  }

  // Determine which section to render
  changeSection(section) {
    this.setState({
      sectionToRender: section
    });
  }

  // Toggle edit flag
  edit() {
    this.setState(prevState => ({
      editData: !prevState.editData
    }));
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
        dashBoardSection = <Profile isEditable={this.state.editData} />;
        break;
      case 'projects':
        dashBoardSection = <Projects isEditable={this.state.editData} />;
        break;
      default:
        dashBoardSection = <Profile isEditable={this.state.editData} />;
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
          <div className="nav__buttons__center">
            <button className="nav__button" type="button" onClick={() => this.edit()}>
              Edit
            </button>
            <button className="nav__button" type="button" onClick={() => this.edit()}>
              Save
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
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { logout }
)(Controller);
