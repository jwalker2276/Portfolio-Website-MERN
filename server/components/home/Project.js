import React, { Component } from 'react';
import { Image, Transformation } from 'cloudinary-react';
import Link from 'next/link';

export default class Project extends Component {
  render() {
    const { imageIds, title, type, id, link } = this.props.data;
    const projectIndex = this.props.index;

    let image = (
      <div className="image__project">
        <p>No image found</p>
      </div>
    );

    // If cloudinary id is found
    if (imageIds.length > 0) {
      const mainImageid = imageIds[0];
      image = (
        <div
          className="project__image__container"
          data-aos="zoom-in-right"
          data-aos-anchor-placement="top-bottom"
        >
          <Image
            cloudName="jwalkercreations-com"
            publicId={mainImageid}
            className="project__image"
            alt="project image mockup"
          >
            <Transformation width="700" height="400" quality="auto" fetchFormat="auto" />
          </Image>
        </div>
      );
    }

    return (
      <div className="project">
        {image}
        <div className="project__details">
          <h1 className="project__title">{title}</h1>
          <h2 className="project__type">{type}</h2>
          <div
            className="project__buttons"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <a
              href={link}
              className="work__primary__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </a>
            <Link href={{ pathname: '/projectinfo', query: { index: projectIndex } }}>
              <button
                type="button"
                className="work__secondary__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
