import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Jump from 'jump.js';
// Components
import SpecialButtons from './SpecialButtons';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verb: 'solves problems.',
      index: 0
    };
    this.changeWord = this.changeWord.bind(this);
  }

  componentDidMount() {
    // Change ever 3 seconds
    setInterval(this.changeWord, 6000);

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
    const verbs = ['builds websites.', 'solves problems.'];
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
      <section className="hero__text__wrapper" data-aos="zoom-in">
        <h1 className="hero__text">
          My name is <span className="hero__text__name">Jordan</span> , a{' '}
          <span className="hero__text__title">Front-end Developer</span>{' '}
          <TransitionGroup component="span" className="hero__text__verb">
            <CSSTransition
              classNames="hero__text__verb"
              key={verb}
              timeout={{ enter: 3000, exit: 3000 }}
            >
              <span className="hero__text__word">
                who <span className="hero__text__verb">{verb}</span>
              </span>
            </CSSTransition>
          </TransitionGroup>
        </h1>
        <div
          className="hero__cta__buttons"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <SpecialButtons buttonType="primary" />
          <SpecialButtons buttonType="secondary" />
        </div>
      </section>
    );
  }
}

export default Hero;
