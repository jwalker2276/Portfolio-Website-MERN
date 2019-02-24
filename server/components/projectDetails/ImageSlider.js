import React, { Component, Fragment } from 'react';
import { Image, Transformation } from 'cloudinary-react';
// Components
import ImageModal from './ImageModal';

export default class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = { mainImageIndex: 0, allIds: '', showModal: false, translateValue: 0 };
    this.setAllImageIds = this.setAllImageIds.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.moveBack = this.moveBack.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.getImageWidth = this.getImageWidth.bind(this);
  }

  componentDidMount() {
    const { imageIds } = this.props;

    // If one than one image
    if (imageIds.length >= 1) {
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

  // Get the slider image's width
  getImageWidth() {
    return document.querySelector('.slider__image').clientWidth;
  }

  // Button method for left arrow
  moveBack() {
    const { mainImageIndex, allIds } = this.state;

    // If not at the start
    if (mainImageIndex !== 0) {
      // Subtract one and set mainImageIndex
      const nextIndex = mainImageIndex - 1;
      this.setState({ mainImageIndex: nextIndex });
      // Take the current translate value and add one image's width to it.
      // This causes a larger translate value moving the images container right,
      // but appears left.
      this.setState(prevState => ({
        translateValue: prevState.translateValue + this.getImageWidth()
      }));
    } else {
      // Ok now we're at the beginning of the array.
      // Get the length
      const length = allIds.length - 1;
      // Update state with this value
      this.setState({ mainImageIndex: length });
      // Determine the max translation value
      const maxTranslateValue = this.getImageWidth() * length;
      // Take the max translate value, negate it and set it to state.
      this.setState({ translateValue: -maxTranslateValue });
    }
  }

  // Button method for right arrow
  moveForward() {
    const { mainImageIndex, allIds } = this.state;

    // If not at the end
    if (mainImageIndex !== allIds.length - 1) {
      // Add one and set mainImage Index
      const nextIndex = mainImageIndex + 1;
      this.setState({
        mainImageIndex: nextIndex
      });
      // Take the current translate value and subtract one image's width from it.
      // This causes a smaller translate value moving the images container left,
      // but appears right.
      this.setState(prevState => ({
        translateValue: prevState.translateValue - this.getImageWidth()
      }));
    } else {
      // Ok now we're at the end of the array.
      // Set values back to default values.
      this.setState({ mainImageIndex: 0 });
      this.setState({ translateValue: 0 });
    }
  }

  // Click event for modal
  toggleModal() {
    this.setState(state => ({ showModal: !state.showModal }));
  }

  render() {
    const { allIds, mainImageIndex, showModal } = this.state;
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

    // Handle loading case
    if (allIds.length === 0) {
      return (
        <p className="project-page__message">No images are currently stored, check again later.</p>
      );
    }

    // Handle no images case
    if (allIds === '') return <p className="project-page__message">Loading ...</p>;

    return (
      <section className="project-page__slider">
        <div className="slider__container">
          <div className="slider__image__controls">
            <button
              aria-label="Previous Image"
              type="button"
              value="back"
              onClick={this.moveBack}
              className="slider__image__control slider__image__control__left"
            >
              {moveIcon}
            </button>
            <button
              aria-label="Next Image"
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
            style={{ transform: `translateX(${this.state.translateValue}px)` }}
          >
            {allIds.map(imageId => (
              <Image
                alt="Website Screenshot"
                key={imageId}
                className="slider__image"
                cloudName="jwalkercreations-com"
                publicId={imageId}
                onClick={this.toggleModal}
              >
                <Transformation height="740" width="975" crop="limit" fetchFormat="auto" />
              </Image>
            ))}
          </div>
        </div>
        <ImageModal
          imageId={allIds[mainImageIndex]}
          showModal={showModal}
          toggleModal={this.toggleModal}
        />
      </section>
    );
  }
}
