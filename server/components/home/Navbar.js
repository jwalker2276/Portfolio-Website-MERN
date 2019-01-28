import React, { Fragment } from 'react';
import Logo from './Logo';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileLayout: false,
      menuIconClass: '',
      sidebarClass: 'nav__sidebar--closed'
    };
    this.determineLayout = this.determineLayout.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  // Check if props changed
  componentDidUpdate(prevProps) {
    if (prevProps.browserWidth !== this.props.browserWidth) {
      this.determineLayout();
    }
  }

  // Determine if layout should be mobile
  determineLayout() {
    const maxWidth = 500;
    const { browserWidth } = this.props;
    if (browserWidth < maxWidth) {
      this.setState({ isMobileLayout: true });
    } else {
      this.setState({ isMobileLayout: false });
    }
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
    // Mobile layout
    if (this.state.isMobileLayout) {
      return (
        <Fragment>
          <nav className="nav">
            <Logo />
            <div className="nav__menu__icon" onClick={this.toggleSideBar}>
              <div className={`nav__menu__line nav__menu__line__top${menuIconClass}`} />
              <div className={`nav__menu__line nav__menu__line__bottom${menuIconClass}`} />
            </div>
          </nav>

          <div className={sidebarClass}>
            <ul className="nav__items">
              <li className="nav__item nav__item--one">
                <a href="#skills" className="nav__link">
                  Skills
                </a>
              </li>
              <li className="nav__item nav__item--two">
                <a href="#work" className="nav__link">
                  Work
                </a>
              </li>
              <li className="nav__item nav__item--three">
                <a href="#about" className="nav__link">
                  Me
                </a>
              </li>
              <li className="nav__item  nav__item--four">
                <a href="#contact" className="nav__link">
                  <span className="nav__item--primary">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </Fragment>
      );
    }

    // Wider screen devices
    return (
      <nav className="nav">
        <Logo />
        <ul className="nav__items">
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link">
              Work
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              Me
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <span className="nav__item--primary">Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
