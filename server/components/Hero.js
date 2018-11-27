import React from 'react';
import HeroText from './HeroText';
import '../scss/hero.scss';
class Hero extends React.Component {
  render() {
    return (
      <div className="hero__div">
        <div className="hero__image" />
        <HeroText />
      </div>
    );
  }
}

export default Hero;
