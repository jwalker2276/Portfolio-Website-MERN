const withSass = require('@zeit/next-sass');
module.exports = withSass({
  publicRuntimeConfig: {
    gmKey: process.env.MAPSKEY
  }
});
