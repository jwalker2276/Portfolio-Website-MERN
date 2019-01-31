import React, { Component, Fragment } from 'react';
import { Image, Transformation } from 'cloudinary-react';

export default class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImageId: '',
      mainImageIndex: 0,
      allIds: ''
    };
    this.setAllImageIds = this.setAllImageIds.bind(this);
    this.updateMainImageId = this.updateMainImageId.bind(this);
    this.moveBack = this.moveBack.bind(this);
    this.moveForward = this.moveForward.bind(this);
  }

  async componentDidMount() {
    const { imageIds } = this.props;

    if (imageIds.length === 0) {
      console.log('No images');
    }

    if (imageIds.length === 1) {
      const id = imageIds[0];
      this.updateMainImageId(id);
    }

    if (imageIds.length > 1) {
      const displayIds = imageIds.slice(1);
      // Set ids in state
      await this.setAllImageIds(displayIds);
      // Call method to set main image
      await this.updateMainImageId(0);
    }
  }

  setAllImageIds(idArray) {
    this.setState({ allIds: idArray });
  }

  updateMainImageId(index) {
    // Get id from array
    const id = this.state.allIds[index];
    // Set id and index
    this.setState({ mainImageId: id });
    this.setState({ mainImageIndex: index });
  }

  moveBack() {
    console.log('back clicked');
  }

  moveForward() {
    console.log('forward clicked');
  }

  render() {
    const { mainImageId } = this.state;

    const moveIcon = (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="slider__image__icon">
          <circle cx="12" cy="12" r="10" className="slider__image__icon__primary" />
          <path
            className="slider__image__icon__secondary"
            d="M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z"
          />
        </svg>
      </Fragment>
    );

    if (mainImageId === '') return <p>Loading ...</p>;

    return (
      <section className="project-page__slider">
        <div className="slider__image__controls">
          <button
            type="button"
            value="back"
            onClick={this.moveBack}
            className="slider__image__control slider__image__control__left"
          >
            {moveIcon}
          </button>
          <button
            type="button"
            value="next"
            onClick={this.moveForward}
            className="slider__image__control slider__image__control__right"
          >
            {moveIcon}
          </button>
        </div>
        <div className="slider__images">
          <Image className="slider__image" cloudName="jwalkercreations-com" publicId={mainImageId}>
            <Transformation height="740" weight="975" crop="limit" fetchFormat="auto" />
          </Image>
        </div>
      </section>
    );
  }
}
