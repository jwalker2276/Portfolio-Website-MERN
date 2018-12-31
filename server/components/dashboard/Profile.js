import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getProfileData, setProfileData } from '../../reduxState/actions/homePageActions';
// Components
import SkillsCard from './SkillsCard';
import LinksCard from './LinksCard';
import BioCard from './BioCard';
import ImageCard from './ImageCard';
// Styles
import '../../scss/dashboard/profile.scss';
import '../../scss/dashboard/common.scss';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frontend: [],
      backend: [],
      tools: [],
      knowledge: [],
      github: '',
      linkedin: '',
      email: '',
      bio: '',
      profileImageId: ''
    };
    this.updateProfileState = this.updateProfileState.bind(this);
    this.updateServer = this.updateServer.bind(this);
  }

  componentDidMount() {
    // Get data from server
    this.props.getProfileData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.profileData !== prevProps.profileData) {
      const { frontend, backend, tools, knowledge } = this.props.profileData.skills;
      const { email, github, linkedin } = this.props.profileData.contactInfo;
      const { bio, profileImageId } = this.props.profileData;
      // Update skills from redux store
      this.updateProfileState('frontend', frontend);
      this.updateProfileState('backend', backend);
      this.updateProfileState('tools', tools);
      this.updateProfileState('knowledge', knowledge);
      this.updateProfileState('github', github);
      this.updateProfileState('linkedin', linkedin);
      this.updateProfileState('email', email);
      this.updateProfileState('bio', bio);
      this.updateProfileState('profileImageId', profileImageId);
    }
  }

  // This method is passed to children to update this component's state
  updateProfileState(key, value) {
    this.setState({
      [key]: value
    });
  }

  // This method takes the latest copy of state and submits a post request with it.
  updateServer() {
    // Create payload for action
    const payload = {
      frontendskills: this.state.frontend,
      backendskills: this.state.backend,
      tools: this.state.tools,
      knowledge: this.state.knowledge,
      bio: this.state.bio,
      github: this.state.github,
      linkedin: this.state.linkedin,
      email: this.state.email,
      profileImageId: this.state.profileImageId
    };

    // Attach auth header
    // Image uploads and page redirect remove this header
    const token = localStorage.getItem('jwtToken');

    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    }

    // Post to server
    this.props.setProfileData(payload);
  }

  render() {
    if (this.props.profileData === null) {
      return null;
    }

    // Skills
    const {
      frontend,
      backend,
      tools,
      knowledge,
      github,
      linkedin,
      email,
      bio,
      profileImageId
    } = this.state;

    return (
      <Fragment>
        <nav className="profile__nav">
          <div className="profile__nav__right">
            <button className="primary__button" type="button" onClick={() => this.updateServer()}>
              Update Server
            </button>
          </div>
        </nav>
        <section className="skills__edit-card">
          <h3 className="group__title skills__title">Skills</h3>
          <SkillsCard
            skillData={frontend}
            skillsType="frontend"
            title="Front End Skills"
            updateProfileState={this.updateProfileState}
          />
          <SkillsCard
            skillData={backend}
            skillsType="backend"
            title="Back End Skills"
            updateProfileState={this.updateProfileState}
          />
          <SkillsCard
            skillData={tools}
            skillsType="tools"
            title="Tools"
            updateProfileState={this.updateProfileState}
          />
          <SkillsCard
            skillData={knowledge}
            skillsType="knowledge"
            title="Knowledge"
            updateProfileState={this.updateProfileState}
          />
        </section>
        <section className="image__edit-card">
          <h3 className="group__title">Profile Image</h3>
          <ImageCard imageId={profileImageId} updateProfileState={this.updateProfileState} />
        </section>
        <section className="links__edit-card">
          <h3 className="group__title">Links</h3>
          <LinksCard
            linkData={linkedin}
            linkType="linkedin"
            title="Linkedin"
            updateProfileState={this.updateProfileState}
          />
          <LinksCard
            linkData={github}
            linkType="github"
            title="Github"
            updateProfileState={this.updateProfileState}
          />
          <LinksCard
            linkData={email}
            linkType="email"
            title="Email"
            updateProfileState={this.updateProfileState}
          />
        </section>
        <section className="bio__edit-card">
          <h3 className="group__title">Bio</h3>
          <BioCard bioData={bio} title="Bio" updateProfileState={this.updateProfileState} />
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profileData: state.homePageData.profileData
});

export default connect(
  mapStateToProps,
  { getProfileData, setProfileData }
)(Profile);
