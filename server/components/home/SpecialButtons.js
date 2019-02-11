import React, { Component } from 'react';

export default class SpecialButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryWords: ['Hire me!', 'Lets do this', 'Ahhh...'],
      seondaryWords: ['I need a website', 'Tell me more', 'Ahhh...'],
      btnState: 'default',
      btnText: 'Hire me'
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.determineState = this.determineState.bind(this);
  }

  componentDidMount() {
    this.determineState();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.btnState !== this.state.btnState) {
      this.determineState();
    }
  }

  // Event for hovering over the button
  onMouseEnter() {
    this.setState({ btnState: 'hover' });
  }

  // Event for exiting after hovering over the button
  onMouseLeave() {
    const time = 2000; // 2 seconds
    // Start the timer
    setTimeout(() => this.setState({ btnState: 'default' }), time);
    // Set this state until timer runs out
    this.setState({ btnState: 'exit' });
  }

  // The method determines what words to display within the button
  determineState() {
    const { primaryWords, seondaryWords, btnState } = this.state;
    const { buttonType } = this.props;
    // Default words
    let wordsArr = primaryWords;

    // Check if not default words
    if (buttonType === 'secondary') {
      wordsArr = seondaryWords;
    }

    // Determine word to use
    if (btnState === 'hover') {
      // Set to the second word in the array
      this.setState({ btnText: wordsArr[1] });
    } else if (btnState === 'exit') {
      // Set to the second word in the array
      this.setState({ btnText: wordsArr[2] });
    } else {
      // Default state
      // Set to the first word in the array
      this.setState({ btnText: wordsArr[0] });
    }
  }

  render() {
    const { buttonType } = this.props;
    const { btnText, btnState } = this.state;

    // Default css class
    let btnClass = `hero__cta__button--${buttonType}`;

    // Determine if exit needs to be added
    // exit is needed after hover for a few seconds
    if (btnState === 'exit') {
      btnClass = `hero__cta__button--${buttonType}--exit`;
    }

    return (
      <button
        className={btnClass}
        type="button"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {btnText}
      </button>
    );
  }
}
