import React, { Component } from 'react';
import ProjectImageCard from './ProjectImageCard';
// Styles
import '../../scss/dashboard/cards.scss';

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
    if (this.props.imageIds !== prevProps.imageIds) {
      // Check if imageIds has new data
      if (this.props.imageIds[0] !== '') {
        this.setState({ image0: this.props.imageIds[0] });
      }
      if (this.props.imageIds[1] !== '') {
        this.setState({ image1: this.props.imageIds[1] });
      }
      if (this.props.imageIds[2] !== '') {
        this.setState({ image2: this.props.imageIds[2] });
      }
      if (this.props.imageIds[3] !== '') {
        this.setState({ image3: this.props.imageIds[3] });
      }
      if (this.props.imageIds[4] !== '') {
        this.setState({ image4: this.props.imageIds[4] });
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
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="project__images__wrapper">
          <ProjectImageCard
            image={this.state.image0}
            imageIndex={0}
            updateImageId={this.updateImageId}
          />
          <ProjectImageCard
            image={this.state.image1}
            imageIndex={1}
            updateImageId={this.updateImageId}
          />
          <ProjectImageCard
            image={this.state.image2}
            imageIndex={2}
            updateImageId={this.updateImageId}
          />
          <ProjectImageCard
            image={this.state.image3}
            imageIndex={3}
            updateImageId={this.updateImageId}
          />
          <ProjectImageCard
            image={this.state.image4}
            imageIndex={4}
            updateImageId={this.updateImageId}
          />
        </div>
        <input className="group__submit" type="submit" value="Update Changes" />
      </form>
    );
  }
}
