import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileData } from '../../reduxState/actions/homePageActions';
// Components
import SkillsCard from './SkillsCard';
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
      // Update skills from redux store
      this.updateProfileState('frontend', frontend);
      this.updateProfileState('backend', backend);
      this.updateProfileState('tools', tools);
      this.updateProfileState('knowledge', knowledge);
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
    // Call action to submit a post request.
    console.log('update server with new profile data');
  }

  render() {
    if (this.props.profileData === null) {
      return null;
    }

    // Skills
    const { frontend, backend, tools, knowledge } = this.state;
    const { isEditable } = this.props;

    return (
      <section className="section__wrapper">
        <div className="section__content">
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
