import React from 'react';
// Components
import Title from './Title';
import Project from './Project';
// Styles
import '../../scss/home/work.scss';
export default class Work extends React.Component {
  render() {
    const { projects } = this.props;

    // If data is loading from server
    if (projects === null) {
      return (
        <div className="work__wrapper">
          <Title title="work" accent="my" color="light" />
          <div className="work__projects">
            <h4>Loading something awesome</h4>
          </div>
        </div>
      );
    }

    // Separate site data from projects.
    const siteDataIndex = projects.length - 1;
    const siteDataId = projects[siteDataIndex].id;

    // Copy projectData without siteData
    const onlyProjects = projects.filter((project, idx) => {
      if (idx !== siteDataIndex) {
        return project;
      }
    });

    return (
      <div className="work__wrapper">
        <Title title="work" accent="my" color="light" />
        <div className="work__projects">
          {onlyProjects.map(projectInfo => (
            <Project data={projectInfo} key={projectInfo.title} />
          ))}
          {/* map projects out here */}
          <div className="work__site">
            <h3>Interested in how I built this website?</h3>
            <a href="">Learn here {siteDataId}</a>
          </div>
        </div>
      </div>
    );
  }
}