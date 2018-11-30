import React, { Component } from 'react';
// Components
import Slice from './Slice';
// Sytles
import '../scss/map.scss';

class Map extends Component {
  render() {
    return (
      <div className="map__wrapper">
        <Slice position="bottom" color="white" />
        <div className="map" />
        <Slice position="top-left" color="darkblue" />
      </div>
    );
  }
}

export default Map;
