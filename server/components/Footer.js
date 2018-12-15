import React, { Component } from 'react';
import Link from 'next/link';
// Styles
import '../scss/footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer__wrapper">
        <Link href="/dashboard">
          <a>jwalkercreations</a>
        </Link>
      </div>
    );
  }
}

export default Footer;
