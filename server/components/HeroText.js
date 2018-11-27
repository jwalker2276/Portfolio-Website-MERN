import React from 'react';
import '../scss/hero-text.scss';

export default class HeroText extends React.Component {
  render() {
    return (
      <div className="hero__text__wrapper">
        <h1 className="hero__text">I&apos;m Jordan, a Web Developer who loves building things.</h1>
      </div>
    );
  }
}
