import React, { Component } from 'react';
import { Image, Transformation } from 'cloudinary-react';

export default class Project extends Component {
  render() {
    const { imageIds, title, type, id, link } = this.props.data;

    let image = (
      <div className="image__project">
        <p>No image found</p>
      </div>
    );

    // If cloudinary id is found
    if (imageIds.length > 0) {
      const mainImageid = imageIds[0];
      image = (
        <div className="project__image">
          <Image cloudName="jwalkercreations-com" publicId={mainImageid}>
            <Transformation height="500" quality="auto" crop="limit" fetchFormat="auto" />
          </Image>
        </div>
      );
    }

    return (
      <div className="project">
        {image}
        <div className="project__details">
          <h1 className="project__title">{title}</h1>
          <h3 className="project__type">{type}</h3>
          <a href={`http://localhost:5000/project/${id}`} className="project__link__info">
            Learn More
          </a>
          <a href={link} className="project__link__site">
            Live Site
            {link}
          </a>
        </div>
      </div>
    );
  }
}
