import React from 'react';
// Smooth scroll lib
import Jump from 'jump.js';
// Components
import Logo from './Logo';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIconClass: '',
      sidebarClass: ''
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
    if (sidebarClass === '') {
      this.setState({ sidebarClass: 'show' });
    } else {
      this.setState({ sidebarClass: '' });
    }
    // Set class for menu icon change
    if (menuIconClass === '') {
      this.setState({ menuIconClass: 'rotate' });
    } else {
      this.setState({ menuIconClass: '' });
    }
  }

  render() {
    const { menuIconClass, sidebarClass } = this.state;

    return (
      <header>
        <nav className="nav">
          <Logo />
          <button
            aria-label="Menu"
            type="button"
            className="nav__menu__icon"
            onClick={this.toggleSideBar}
          >
            <span className={`nav__menu__line ${menuIconClass}`} />
            <span className={`nav__menu__line ${menuIconClass}`} />
          </button>
        </nav>

        <nav className={`nav__sidebar ${sidebarClass}`}>
          <ul className={`nav__items ${sidebarClass}`}>
            <li className={`nav__item nav__item--one ${sidebarClass}`}>
              <button type="button" className={`nav__button ${sidebarClass} nav__button--skills`}>
                Skills
              </button>
            </li>
            <li className={`nav__item nav__item--two ${sidebarClass}`}>
              <button type="button" className={`nav__button ${sidebarClass} nav__button--work`}>
                Work
              </button>
            </li>
            <li className={`nav__item nav__item--three ${sidebarClass}`}>
              <button type="button" className={`nav__button ${sidebarClass} nav__button--about`}>
                About
              </button>
            </li>
            <li className={`nav__item  nav__item--four ${sidebarClass}`}>
              <button type="button" className={`nav__button ${sidebarClass} nav__button--contact`}>
                <span className="nav__item--primary">Contact</span>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
