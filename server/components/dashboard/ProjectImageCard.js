import React, { Component } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import axios from 'axios';

// Styles
import '../../scss/dashboard/cards.scss';

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
          <label htmlFor="image" className="group__form__label">
            Add Image
            <input
              type="file"
              name="file"
              className="group__from__input"
              onChange={this.uploadImage}
            />
          </label>
        </div>
      );
    }

    return (
      <div className="image__upload">
        <Image cloudName="jwalkercreations-com" publicId={image}>
          <Transformation height="100" quality="auto" crop="limit" fetchFormat="auto" />
        </Image>
        <label htmlFor="image" className="group__form__label">
          Change Image
          <input
            type="file"
            name="file"
            className="group__from__input"
            onChange={this.uploadImage}
          />
        </label>
      </div>
    );
  }
}
