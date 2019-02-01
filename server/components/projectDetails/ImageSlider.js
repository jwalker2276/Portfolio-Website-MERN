import React, { Component, Fragment } from 'react';
import { Image, Transformation } from 'cloudinary-react';

export default class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImageIndex: 0,
      allIds: ''
    };
    this.setAllImageIds = this.setAllImageIds.bind(this);
    this.moveBack = this.moveBack.bind(this);
    this.moveForward = this.moveForward.bind(this);
  }

  componentDidMount() {
    const { imageIds } = this.props;

    // TODO: handle this case
    if (imageIds.length === 0) {
      console.log('No images');
    }

    // If one than one image
    if (imageIds.length > 1) {
      // Remove the mockup image for the homepage
      const displayIds = imageIds.slice(1);
      // Set ids in state
      this.setAllImageIds(displayIds);
    }
  }

  // Add images (cloudinary ids) to state
  setAllImageIds(idArray) {
    this.setState({ allIds: idArray });
  }

  // Button method for left arrow
  moveBack() {
    const { mainImageIndex, allIds } = this.state;

    // If not at the start
    if (mainImageIndex !== 0) {
      // Subtract one
      const nextIndex = mainImageIndex - 1;
      this.setState({ mainImageIndex: nextIndex });
    } else {
      // Set to end of the array
      const length = allIds.length - 1;
      this.setState({ mainImageIndex: length });
    }
  }

  // Button method for right arrow
  moveForward() {
    const { mainImageIndex, allIds } = this.state;

    // If not at the end
    if (mainImageIndex !== allIds.length - 1) {
      // Add one
      const nextIndex = mainImageIndex + 1;
      this.setState({ mainImageIndex: nextIndex });
    } else {
      // Set back to start
      this.setState({ mainImageIndex: 0 });
    }
  }

  render() {
    const { allIds, mainImageIndex } = this.state;
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

    if (allIds === '') return <p>Loading ...</p>;

    return (
      <section className="project-page__slider">
        <div className="slider__wrapper">
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
          <div
            className="slider__images"
            style={{ transform: `translateX(-${mainImageIndex * (100 / allIds.length)}%)` }}
          >
            {allIds.map(imageId => (
              <Image
                key={imageId}
                className="slider__image"
                cloudName="jwalkercreations-com"
                publicId={imageId}
              >
                <Transformation height="740" weight="975" crop="limit" fetchFormat="auto" />
              </Image>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
