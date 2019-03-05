import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Meta from '../components/common/Meta';
import { getProjectData } from '../reduxState/actions/homePageActions';
// Components
import Layout from '../components/common/Layout';
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
    const techIcon = (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="tech__icon">
          <path
            className="icon__primary"
            d="M2.6 6.09l9-4a1 1 0 0 1 .8 0l9 4a1 1 0 0 1 0 1.82l-9 4a1 1 0 0 1-.8 0l-9-4a1 1 0 0 1 0-1.82z"
          />
          <path
            className="icon__secondary"
            d="M3.91 10.5l7.68 3.41a1 1 0 0 0 .82 0l7.68-3.41 1.32.59a1 1 0 0 1 0 1.82l-9 4a1 1 0 0 1-.82 0l-9-4a1 1 0 0 1 0-1.82l1.32-.59zm0 5l7.68 3.41a1 1 0 0 0 .82 0l7.68-3.41 1.32.59a1 1 0 0 1 0 1.82l-9 4a1 1 0 0 1-.82 0l-9-4a1 1 0 0 1 0-1.82l1.32-.59z"
          />
        </svg>
      </Fragment>
    );

    const { projectData } = this.props;
    const { selectedProject } = this.state;

    if (projectData === null) return <p className="project-page__message">Loading .... </p>;

    const { title, type, description, tech, link, imageIds } = projectData[selectedProject];
    const { frontend, backend, tools } = tech;
    return (
      <Layout>
        <Fragment>
          <Meta />
          <main className="project-page__wrapper">
            <ImageSlider imageIds={imageIds} />
            <section className="project-page__details">
              <CSSTransition in appear timeout={5000} classNames="title">
                <h1 className="details__title">{title}</h1>
              </CSSTransition>
              <CSSTransition in appear timeout={5000} classNames="type">
                <h2 className="details__type">{type}</h2>
              </CSSTransition>
              <CSSTransition in appear timeout={5000} classNames="description">
                <p className="details__description">{description}</p>
              </CSSTransition>
              <CSSTransition in appear timeout={5000} classNames="tech">
                <div className="details__tech">
                  {techIcon}
                  <h3 className="tech__title">Tech Used</h3>
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
                </div>
              </CSSTransition>
              <CSSTransition in appear timeout={5000} classNames="link">
                <a href={link} className="details__link">
                  Live Site
                </a>
              </CSSTransition>
            </section>
          </main>
        </Fragment>
      </Layout>
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
