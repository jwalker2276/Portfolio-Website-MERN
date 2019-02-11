import React, { Fragment } from 'react';
// Smooth scroll lib
import Jump from 'jump.js';
// Components
import Logo from './Logo';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIconClass: '',
      sidebarClass: 'nav__sidebar--closed'
    };
    this.toggleSideBar = this.toggleSideBar.bind(this);
    this.setUpSmoothScrolling = this.setUpSmoothScrolling.bind(this);
  }

  componentDidMount() {
    this.setUpSmoothScrolling();
  }

  setUpSmoothScrolling() {
    // Set up smooth scrolling
    document.querySelector('.nav__button--skills').addEventListener('click', () => {
      Jump('#skills');
    });
    document.querySelector('.nav__button--work').addEventListener('click', () => {
      Jump('#work');
    });
    document.querySelector('.nav__button--about').addEventListener('click', () => {
      Jump('#about');
    });
    document.querySelector('.nav__button--contact').addEventListener('click', () => {
      Jump('#contact');
    });
  }

  toggleSideBar() {
    const { menuIconClass, sidebarClass } = this.state;

    // Set class to open/close for sidebar
    if (sidebarClass === 'nav__sidebar--closed') {
      this.setState({ sidebarClass: 'nav__sidebar--opened' });
    } else {
      this.setState({ sidebarClass: 'nav__sidebar--closed' });
    }
    // Set class for menu icon change
    if (menuIconClass === '') {
      this.setState({ menuIconClass: '--rotated' });
    } else {
      this.setState({ menuIconClass: '' });
    }
  }

  render() {
    const { menuIconClass, sidebarClass } = this.state;

    return (
      <Fragment>
        <nav className="nav">
          <Logo />
          <div className="nav__menu__icon" onClick={this.toggleSideBar}>
            <div className={`nav__menu__line nav__menu__line__top${menuIconClass}`} />
            <div className={`nav__menu__line nav__menu__line__bottom${menuIconClass}`} />
          </div>
        </nav>

        <nav className={sidebarClass}>
          <ul className="nav__items">
            <li className="nav__item nav__item--one">
              <button type="button" className="nav__button nav__button--skills">
                Skills
              </button>
            </li>
            <li className="nav__item nav__item--two">
              <button type="button" className="nav__button nav__button--work">
                Work
              </button>
            </li>
            <li className="nav__item nav__item--three">
              <button type="button" className="nav__button nav__button--about">
                About
              </button>
            </li>
            <li className="nav__item  nav__item--four">
              <button type="button" className="nav__button nav__button--contact">
                <span className="nav__item--primary">Contact</span>
              </button>
            </li>
          </ul>
        </nav>
      </Fragment>
    );
  }
}
