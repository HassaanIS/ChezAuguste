const withCSS = require("@zeit/next-css");

module.exports = withCSS({});

module.exports = {
    reactStrictMode: false,  //runs in development mode only
    images: {
        domains: ['img.artistes-sf.org'],
      },
  }

