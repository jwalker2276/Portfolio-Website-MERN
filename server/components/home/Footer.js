import React, { Component } from 'react';
import Link from 'next/link';
// Styles
import '../../scss/home/footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer__wrapper">
        <span className="footer__span">designed and developed by </span>
        <Link href="/dashboard">
          <a className="footer__link">Jordan</a>
        </Link>
        <span className="footer__span"> Walker</span>
      </div>
    );
  }
}

export default Footer;
