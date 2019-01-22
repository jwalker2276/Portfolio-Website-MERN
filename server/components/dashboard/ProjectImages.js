import React, { Component } from 'react';
import ProjectImageCard from './ProjectImageCard';

export default class ProjectImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image0: '',
      image1: '',
      image2: '',
      image3: '',
      image4: ''
    };
    this.updateImageId = this.updateImageId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { imageIds } = this.props;

    // Check if imageIds has new data
    if (imageIds !== prevProps.imageIds) {
      this.setState({ image0: undefined });
      this.setState({ image1: undefined });
      this.setState({ image2: undefined });
      this.setState({ image3: undefined });
      this.setState({ image4: undefined });

      // Make sure there are new values
      if (imageIds.length > 0) {
        imageIds.forEach((id, idx) => {
          if (id !== undefined) {
            this.setState({ [`image${idx}`]: id });
          }
        });
      }
    }
  }

  // This method is passed to each child to update this.state
  updateImageId(index, id) {
    this.setState({ [`image${index}`]: id });
  }

  // This method updates parents state
  handleSubmit(e) {
    e.preventDefault();
    const { image0, image1, image2, image3, image4 } = this.state;
    const images = [image0, image1, image2, image3, image4];
    this.props.updateProjectState('imageIds', images);
  }

  render() {
    const { image0, image1, image2, image3, image4 } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="project__images__wrapper">
          <ProjectImageCard image={image0} imageIndex={0} updateImageId={this.updateImageId} />
          <ProjectImageCard image={image1} imageIndex={1} updateImageId={this.updateImageId} />
          <ProjectImageCard image={image2} imageIndex={2} updateImageId={this.updateImageId} />
          <ProjectImageCard image={image3} imageIndex={3} updateImageId={this.updateImageId} />
          <ProjectImageCard image={image4} imageIndex={4} updateImageId={this.updateImageId} />
        </div>
        <input className="group__submit" type="submit" value="Update Changes" />
      </form>
    );
  }
}
