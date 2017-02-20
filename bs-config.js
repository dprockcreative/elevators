const fallback = require('connect-history-api-fallback');

module.exports = {
  open: false,
  filters: [ './**/*.{htm,css,js}' ],
  logLevel: 'silent',
  port: 3000,
  server: {
    baseDir: './',
    middleware: [
      fallback({
        index: '/index.htm',
        htmlAcceptHeaders: [ 'text/html', 'application/xhtml+xml' ]
      })
    ]
  }
};
