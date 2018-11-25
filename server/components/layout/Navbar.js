import React from 'react';
import Logo from './Logo';

import '../../scss/navbar.scss';
export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <Logo />
        <ul className="nav__items">
          <li className="nav__item">
            <a href="" className="nav__link">
              Hire Me
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Work
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Me
            </a>
          </li>
          <li className="nav__item">
            <a href="" className="nav__link">
              Contract
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
