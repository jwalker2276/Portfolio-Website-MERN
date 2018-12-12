import React, { Component } from 'react';
import Title from './Title';
// Components
import AboutBanner from './AboutBanner';
// Styles
import '../scss/about.scss';

class About extends Component {
  render() {
    return (
      <div className="about__wrapper">
        <Title title="me" accent="about" color="dark" />
        <div className="about__image" />
        <AboutBanner contactInfo={this.props.contact} />
        <p className="about__bio">{this.props.bio}</p>
      </div>
    );
  }
}

export default About;
