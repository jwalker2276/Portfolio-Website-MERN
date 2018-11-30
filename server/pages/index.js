import React from 'react';
// Components
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Slice from '../components/Slice';
import Skills from '../components/Skills';
import Work from '../components/Work';
import About from '../components/About';
import Map from '../components/Map';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Styles
import '../scss/common.scss';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="landing__wrapper">
          <Navbar />
          <Hero />
          <Slice position="top" color="white" />
        </div>
        <Skills />
        <Slice position="bottom" color="white" />
        <Work />
        <Slice position="top" color="white" />
        <About />
        <Map />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
