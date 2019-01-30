import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProjectData } from '../reduxState/actions/homePageActions';
// Components
import ImageSlider from '../components/projectDetails/ImageSlider';
// Style
import '../scss/projectinfo/projectinfo.scss';

class projectinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: 0
    };
    this.updateSelectedProject = this.updateSelectedProject.bind(this);
  }

  componentDidMount() {
    // Get all projects data for future features
    this.props.getProjectData();
    // Get url
    const url = window.location.href;
    const query = url.split('?')[1];
    const selectedProject = query.split('=')[1];
    // Update selectedProject
    this.updateSelectedProject(selectedProject);
  }

  // Update state with this project name so we can determine which data to display.
  updateSelectedProject(projectName) {
    this.setState({ selectedProject: projectName });
  }

  render() {
    const { projectData } = this.props;
    const { selectedProject } = this.state;

    if (projectData === null) return <p>Loading .... </p>;

    const { title, type, description, tech, link, imageIds } = projectData[selectedProject];
    const { frontend, backend, tools } = tech;
    return (
      <div className="project-page__wrapper">
        <ImageSlider imageIds={imageIds} />
        <section className="project-page__details">
          <h1 className="details__title">{title}</h1>
          <h4 className="details__type">{type}</h4>
          <p className="details__description">{description}</p>
          <div className="details__tech">
            <i>icon</i>
            <h4 className="tech__title">Tech</h4>
            <ul className="tech__list">
              {frontend.map(techName => (
                <li key={techName} className="tech__list__item">
                  {techName}
                </li>
              ))}
              {backend.map(techName => (
                <li key={techName} className="tech__list__item">
                  {techName}
                </li>
              ))}
              {tools.map(techName => (
                <li key={techName} className="tech__list__item">
                  {techName}
                </li>
              ))}
            </ul>
            <button className="details__button">
              <a href={link} className="details__link" />
            </button>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projectData: state.homePageData.projectData
});

export default connect(
  mapStateToProps,
  { getProjectData }
)(projectinfo);
