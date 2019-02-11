import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Jump from 'jump.js';
// Components
import SpecialButtons from './SpecialButtons';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verb: 'building',
      index: 0
    };
    this.changeWord = this.changeWord.bind(this);
  }

  componentDidMount() {
    // Change ever 3 seconds
    setInterval(this.changeWord, 3000);

    // Set up smooth scrolling for hero buttons.
    document.querySelector('.hero__cta__button--primary').addEventListener('click', () => {
      Jump('#contact');
    });
    document.querySelector('.hero__cta__button--secondary').addEventListener('click', () => {
      Jump('#contact');
    });
  }

  componentWillUnmount() {
    // Stop the timer
    clearInterval();
  }

  changeWord() {
    // List of words to cycle through
    const verbs = [' building ', ' learning ', ' designing '];
    // This current index in state
    const { index } = this.state;
    // The next word to use based on index
    const nextVerb = verbs[index];

    // Update state with next word to use
    this.setState({ verb: nextVerb });
    // Get max index
    const maxIndex = verbs.length - 1;
    // Next index to use
    let nextIndex = 0;
    // Check if counter is at the end of the words array
    if (index < maxIndex) {
      // Not at end, add one to index
      nextIndex = index + 1;
    } else {
      // At the end, start over
      nextIndex = 0;
    }

    // Update index for next time
    this.setState({ index: nextIndex });
  }

  render() {
    const { verb } = this.state;
    return (
      <div className="hero__text__wrapper">
        <h1 className="hero__text">
          I&apos;m <span className="hero__text__name">Jordan</span> , a{' '}
          <span className="hero__text__title">Web Developer</span> who loves{' '}
          <TransitionGroup component="span" className="hero__text__verb">
            <CSSTransition
              classNames="hero__text__verb"
              key={verb}
              timeout={{ enter: 3000, exit: 3000 }}
            >
              <span className="hero__text__verb">{verb}</span>
            </CSSTransition>
          </TransitionGroup>{' '}
          things.
        </h1>
        <div className="hero__cta__buttons">
          <SpecialButtons buttonType="primary" />
          <SpecialButtons buttonType="secondary" />
        </div>
      </div>
    );
  }
}

export default Hero;
