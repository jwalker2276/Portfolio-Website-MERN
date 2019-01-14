import React from 'react';
import { connect } from 'react-redux';
import { getProfileData, getProjectData } from '../reduxState/actions/homePageActions';
// Components
import Meta from '../components/common/Meta';
import Navbar from '../components/home/Navbar';
import Hero from '../components/home/Hero';
import Slice from '../components/home/Slice';
import Skills from '../components/home/Skills';
import Work from '../components/home/Work';
import About from '../components/home/About';
import Map from '../components/home/Map';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';

// Styles
import '../scss/common.scss';

class Home extends React.Component {
  componentDidMount() {
    // Run actions on mount
    this.props.getProfileData();
    this.props.getProjectData();
  }

  render() {
    const { profileData, projectsData } = this.props;

    let skillData;
    let contactData;
    let bioData;
    let imageId;

    // Make sure data has loaded
    if (profileData !== null) {
      // Destructure data
      skillData = profileData.skills;
      contactData = profileData.contactInfo;
      bioData = profileData.bio;
      imageId = profileData.profileImageId;
    }

    return (
      <React.Fragment>
        <Meta />
        <div className="landing__wrapper">
          <Navbar />
          <Hero />
          <Slice position="top" color="white" />
        </div>
        <Skills skills={skillData} />
        <Slice position="bottom" color="white" />
        <Work projects={projectsData} />
        <Slice position="top" color="white" />
        <About contact={contactData} bio={bioData} imageId={imageId} />
        {/* <Map /> */}
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profileData: state.homePageData.profileData,
  projectsData: state.homePageData.projectData
});

export default connect(
  mapStateToProps,
  { getProfileData, getProjectData }
)(Home);
