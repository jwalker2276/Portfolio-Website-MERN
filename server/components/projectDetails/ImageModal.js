import React, { Component } from 'react';
import { Image, Transformation } from 'cloudinary-react';

export default class ImageModal extends Component {
  constructor(props) {
    super(props);
    this.closeButton = React.createRef();
    this.state = {
      modalClass: 'modal'
    };
    this.determineClass = this.determineClass.bind(this);
  }

  componentDidMount() {
    this.determineClass();
  }

  componentDidUpdate(prevProps) {
    const { showModal } = this.props;
    if (showModal !== prevProps.showModal) {
      this.determineClass();
    }
  }

  determineClass() {
    const { showModal } = this.props;
    // Check showModal state
    if (showModal) {
      // Set modal div class to show
      this.setState({ modalClass: 'modal modal--show' });
      this.closeButton.current.focus();
    } else {
      // Set modal div class to hide
      this.setState({ modalClass: 'modal' });
    }
  }

  render() {
    const { imageId, toggleModal } = this.props;
    const { modalClass } = this.state;

    return (
      <div className={`${modalClass}`}>
        <div className="modal__background__blur" />
        <button
          aria-label="Close"
          type="button"
          className="modal__close"
          onClick={toggleModal}
          ref={this.closeButton}
        >
          &times;
        </button>
        <Image
          className="modal__image"
          alt="Website Image"
          cloudName="jwalkercreations-com"
          publicId={imageId}
        >
          <Transformation width="1024" crop="limit" fetchFormat="auto" />
        </Image>
      </div>
    );
  }
}
