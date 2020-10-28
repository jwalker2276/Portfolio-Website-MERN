import React from 'react';
import { connect } from 'react-redux';
import AOS from 'aos';
import { getProfileData, getProjectData } from '../reduxState/actions/homePageActions';
// Components
import Layout from '../components/common/Layout';
import Meta from '../components/common/Meta';
import Navbar from '../components/home/Navbar';
import Hero from '../components/home/Hero';
import Slice from '../components/home/Slice';
import Skills from '../components/home/Skills';
import Work from '../components/home/Work';
import About from '../components/home/About';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';

// Styles
import '../scss/home/homepage.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.setUpAnimations = this.setUpAnimations.bind(this);
  }

  componentDidMount() {
    // Run actions on mount
    this.props.getProfileData();
    this.props.getProjectData();
    this.setUpAnimations();
  }

  setUpAnimations() {
    // Initialize AOS
    AOS.init();
  }

  render() {
    const { profileData, projectsData } = this.props;

    const skillData = {
      frontend: [
        'Html',
        'Css / Scss',
        'JavaScript ES6+',
        'React',
        'Redux',
        'Gatsby.js',
        'Next.js'
      ],
      backend: [
        'Node',
        'Express',
        'MongoDB',
        'Passport',
        'MVC Pattern'
      ],
      tools: [
        'Webpack',
        'Gulp',
        'Git',
        'Figma',
        'Jest',
        'Google Maps'
      ],
      knowledge: [
        'Responsive Design',
        'Accessibility',
        'Data Visualization'
      ]
    };

    const contactData = {
      github: 'https://github.com/jwalker2276',
      linkedin: 'https://www.linkedin.com/in/jordan-walker-85246458/',
      email: 'jwalkercreations@gmail.com'
    };

    // const bioData = {
    //   bio: 'Hi! My name is Jordan Walker and I’m an Austin based freelance web developer. I love creating digital works of art that work on all devices and are accessible to all.\n\nI spend most of my time working on the front end of websites but I have experience working with backend technologies like node, express, and MongoDB. I enjoy solving problems, learning,  and love building websites from start to finish.\n\nI have built websites with and without frameworks but really enjoy developing with React.js\n\nIf your business is seeking a web presence or looking to hire, look no further and contact me below.'
    // };

    let bioData;

    let imageId;

    // Make sure data has loaded
    if (profileData !== null) {
      // Destructure data
      // skillData = profileData.skills;
      // contactData = profileData.contactInfo;
      bioData = profileData.bio;
      imageId = profileData.profileImageId;
    }

    return (
      <Layout>
        <React.Fragment>
          <Meta />
          <section name="Landing Page" className="landing__wrapper" aria-label="Landing page">
            <div className="hero__section">
              <Navbar />
              <Hero />
              <Slice position="top" color="white" />
            </div>
          </section>
          <Skills skills={skillData} />
          <Slice position="bottom" color="white" />
          <Work projects={projectsData} />
          <Slice position="top" color="white" />
          <About contact={contactData} bio={bioData} imageId={imageId} />
          <Contact />
          <Footer />
        </React.Fragment>
      </Layout>
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

// export default Home;
