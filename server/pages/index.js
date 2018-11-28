import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Slice from '../components/Slice';

import '../scss/common.scss';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="landing__wrapper">
          <Navbar />
          <Hero />
          <Slice position="top" colorClass="white" />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
