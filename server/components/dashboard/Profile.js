import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileData } from '../../reduxState/actions/homePageActions';
// Components
import SkillsCard from './SkillsCard';
import LinksCard from './LinksCard';
// Styles
import '../../scss/dashboard/dashboard-profile.scss';

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
      profileImage: ''
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
      const { bio } = this.props.profileData;
      // Update skills from redux store
      this.updateProfileState('frontend', frontend);
      this.updateProfileState('backend', backend);
      this.updateProfileState('tools', tools);
      this.updateProfileState('knowledge', knowledge);
      this.updateProfileState('github', github);
      this.updateProfileState('linkedin', linkedin);
      this.updateProfileState('email', email);
      this.updateProfileState('bio', bio);
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
    const payload = {};
    // Call action to submit a post request.
    console.log('update server with new profile data');
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
      profileImage
    } = this.state;
    const { isEditable } = this.props;

    return (
      <section className="section__wrapper">
        <div className="section__skills">
          <SkillsCard
            skillData={frontend}
            skillsType="frontend"
            title="Front End Skills"
            isEditable={isEditable}
            updateProfileState={this.updateProfileState}
          />
          <SkillsCard
            skillData={backend}
            skillsType="backend"
            title="Back End Skills"
            isEditable={isEditable}
            updateProfileState={this.updateProfileState}
          />
          <SkillsCard
            skillData={tools}
            skillsType="tools"
            title="Tools"
            isEditable={isEditable}
            updateProfileState={this.updateProfileState}
          />
          <SkillsCard
            skillData={knowledge}
            skillsType="knowledge"
            title="Knowledge"
            isEditable={isEditable}
            updateProfileState={this.updateProfileState}
          />
        </div>
        <div className="section__links">
          <LinksCard
            linkData={linkedin}
            linkType="linkedin"
            title="Linkedin"
            isEditable={isEditable}
            updateProfileState={this.updateProfileState}
          />
          <LinksCard
            linkData={github}
            linkType="github"
            title="Github"
            isEditable={isEditable}
            updateProfileState={this.updateProfileState}
          />
          <LinksCard
            linkData={email}
            linkType="email"
            title="Email"
            isEditable={isEditable}
            updateProfileState={this.updateProfileState}
          />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  profileData: state.homePageData.profileData
});

export default connect(
  mapStateToProps,
  { getProfileData }
)(Profile);
