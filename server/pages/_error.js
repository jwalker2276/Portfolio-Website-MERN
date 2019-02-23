import React, { Component } from 'react';
import Link from 'next/link';
// Styles
import '../scss/error/errorpage.scss';

export default class _error extends Component {
  render() {
    return (
      <div className="error__page__wrapper">
        <h1 className="error__page__heading">Page not found!</h1>
        <h2 className="error__page__heading__info">Sorry, but that page could not be found.</h2>
        <Link href="/">
          <a target="_self" rel="noreferrer noopener" className="error__page__link">
            Return to home page
          </a>
        </Link>
      </div>
    );
  }
}
