import React, { Component } from 'react';
import { Image, Transformation } from 'cloudinary-react';
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
        <div className="about__content__top">
          <Image
            className="about__profileImg"
            cloudName="jwalkercreations-com"
            publicId="websiteImages/profileImage.jpg"
          >
            <Transformation height="150" quality="auto" crop="limit" fetchFormat="auto" />
          </Image>
          <AboutBanner contactInfo={this.props.contact} />
        </div>
        <div className="about__content__bottom">
          <p className="about__bio">{this.props.bio}</p>
        </div>
      </div>
    );
  }
}

export default About;
