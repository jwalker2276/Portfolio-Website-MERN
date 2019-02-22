import React, { Component } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import axios from 'axios';

export default class ProjectImageCard extends Component {
  constructor(props) {
    super(props);
    this.uploadImage = this.uploadImage.bind(this);
  }

  // Upload image to cloudinary
  async uploadImage(e) {
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
    // Append websiteImages preset
    data.append('upload_preset', 'websiteImages');

    // Delete Auth header to prevent cors error
    delete axios.defaults.headers.common['Authorization'];

    // Send and wait for the post request
    const file = await axios({
      method: 'POST',
      url: 'https://api.cloudinary.com/v1_1/jwalkercreations-com/image/upload',
      data
    });

    // Grab the image id for react components
    const imageId = file.data.public_id;

    // Update profile's state with new id
    this.props.updateImageId(this.props.imageIndex, imageId);
  }

  render() {
    const { image } = this.props;

    if (image === undefined) {
      return (
        <div className="image__upload">
          <div className="image__placeholder">
            <p className="image__placeholder__text">No image stored</p>
          </div>
          <label htmlFor="image" className="image__form__label">
            <div className="image__input__wrapper">
              <button type="button" className="image__fake__button">
                Select Image
              </button>
              <input
                type="file"
                name="file"
                className="image__form__input"
                onChange={this.uploadImage}
              />
            </div>
          </label>
        </div>
      );
    }

    return (
      <div className="image__upload">
        <Image className="image__thumbnail" cloudName="jwalkercreations-com" publicId={image}>
          <Transformation height="180" quality="auto" crop="limit" fetchFormat="auto" />
        </Image>
        <label htmlFor="image" className="image__form__label">
          <div className="image__input__wrapper">
            <button type="button" className="image__fake__button">
              Select Image
            </button>
            <input
              type="file"
              name="file"
              className="image__form__input"
              onChange={this.uploadImage}
            />
          </div>
        </label>
      </div>
    );
  }
}
