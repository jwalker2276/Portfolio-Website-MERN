import React from 'react';
import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>Jordan Walker | Web Developer</title>
    <meta name="description" content="My portfolio website." />
    <meta
      name="keywords"
      content="jordan walker, jordan, website, web development, responsive, developer, portfolio"
    />
    <meta name="author" content="Jordan Walker" />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Raleway:300,400,500,600,700"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link rel="apple-touch-icon" sizes="180x180" href="static/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="static/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="static/favicon-16x16.png" />
    <link rel="manifest" href="static/site.webmanifest" />
    <link rel="mask-icon" href="static/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#2d89ef" />
    <meta name="theme-color" content="#ffffff" />
  </Head>
);

export default Meta;
