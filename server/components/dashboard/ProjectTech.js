import React, { Component } from 'react';

export default class ProjectTech extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frontend: '',
      backend: '',
      tools: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.setInitialState = this.setInitialState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Check for loading of props
    if (this.props !== prevProps) {
      // Check if state needs to update
      if (this.props.frontend !== this.state.frontend) {
        this.setInitialState();
      }
      if (this.props.backend !== this.state.backend) {
        this.setInitialState();
      }
      if (this.props.tools !== this.state.tools) {
        this.setInitialState();
      }
    }
  }

  // This method loads props into state
  setInitialState() {
    const { frontend, backend, tools } = this.props;

    this.setState({ frontend });
    this.setState({ backend });
    this.setState({ tools });
  }

  // This method update this.state from input
  handleChange(e) {
    const { name, value } = e.currentTarget;
    // Update state
    this.setState({ [name]: value });
  }

  // This method updates the parents state
  handleSubmit(event) {
    event.preventDefault();
    const { frontend, backend, tools } = this.state;
    // Update project state
    this.props.updateProjectState('frontend', frontend);
    this.props.updateProjectState('backend', backend);
    this.props.updateProjectState('tools', tools);
  }

  render() {
    const { frontend, backend, tools } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="group__form__label" htmlFor="Frontend Tech">
          Front End Tech
          <input
            className="group__form__input"
            type="text"
            name="frontend"
            value={frontend}
            onChange={this.handleChange}
          />
        </label>
        <label className="group__form__label" htmlFor="Backend Tech">
          Backend Tech
          <input
            className="group__form__input"
            type="text"
            name="backend"
            value={backend}
            onChange={this.handleChange}
          />
        </label>
        <label className="group__form__label" htmlFor="Tools">
          Tools
          <input
            className="group__form__input"
            type="text"
            name="tools"
            value={tools}
            onChange={this.handleChange}
          />
        </label>
        <input className="group__submit" type="submit" value="Save Changes" />
      </form>
    );
  }
}
