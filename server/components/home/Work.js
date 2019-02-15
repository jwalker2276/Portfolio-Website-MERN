import React from 'react';
import Link from 'next/link';
// Components
import Title from './Title';
import Project from './Project';

export default class Work extends React.Component {
  render() {
    const { projects } = this.props;

    // If data is loading from server
    if (projects === null) {
      return (
        <div className="work__wrapper">
          <Title title="work" accent="my" color="light" />
          <div className="work__projects">
            <h4 className="work__loading">Loading something awesome...</h4>
          </div>
        </div>
      );
    }

    // Grab the index for the projectInfo Page.
    const projectIndex = projects.length - 1;

    // Copy projectData without siteData
    const onlyProjects = projects.filter((project, idx) => {
      if (idx !== projectIndex) {
        return project;
      }
    });

    return (
      <section className="work__wrapper" id="work">
        <Title title="work" accent="my" color="light" />
        <div className="work__projects">
          {onlyProjects.map((projectInfo, index) => (
            <Project data={projectInfo} key={projectInfo.title} index={index} />
          ))}
          {/* map projects out here */}
          <div className="work__site">
            <h3 className="work__website__question">Interested in how I built this website?</h3>
            <Link href={{ pathname: '/projectinfo', query: { index: projectIndex } }}>
              <a
                className="work__primary__link website__info__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
