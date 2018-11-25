import React from 'react';

import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';

import '../scss/common.scss';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero />
      </React.Fragment>
    );
  }
}

export default Home;
