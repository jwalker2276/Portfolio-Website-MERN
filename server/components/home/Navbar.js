import React from 'react';
import Logo from './Logo';

export default class Navbar extends React.Component {
  render() {
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
