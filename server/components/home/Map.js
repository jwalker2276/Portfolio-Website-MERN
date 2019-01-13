import React, { Component } from 'react';
import getConfig from 'next/config';
// Components
import Slice from './Slice';
// Sytles
import '../../scss/home/map.scss';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapURL: '',
      width: 0,
      height: 0
    };
    this.getMapSize = this.getMapSize.bind(this);
    this.buildMapURL = this.buildMapURL.bind(this);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    this.getMapSize();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.width !== this.state.width) {
      console.log('rebuilding map');
      this.getMapSize();
    }
    if (prevState.height !== this.state.height) {
      console.log('rebuilding map');
      this.getMapSize();
    }
  }

  getMapSize() {
    const h = this.mapRef.current.clientHeight;
    const w = this.mapRef.current.clientWidth;
    this.setState({ height: h });
    this.setState({ width: w });
    this.buildMapURL();
  }

  buildMapURL() {
    if (this.state.width !== 0 && this.state.height !== 0) {
      const { publicRuntimeConfig } = getConfig();

      // Parameters
      const p = {
        center: 'Austin,TX',
        scale: '2',
        zoom: 10,
        size: `${this.state.width}x${this.state.height}`,
        key: publicRuntimeConfig.gmKey
      };

      // URL
      const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${p.center},${
        p.scale
      }&zoom=${p.zoom}&size=${p.size}&key=${p.key}`;

      // Set state
      this.setState({ mapURL: mapUrl });
    }
  }

  render() {
    return (
      <div className="map__wrapper" ref={this.mapRef}>
        <Slice position="bottom" color="white" />
        <img
          className="map"
          src={this.state.mapURL}
          width={this.state.width}
          height={this.state.height}
        />
        <Slice position="top-left" color="darkblue" />
      </div>
    );
  }
}

export default Map;
