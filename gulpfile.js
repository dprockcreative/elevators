const gulp = require('gulp');
const del  = require('del');
const $    = require('gulp-load-plugins')({lazy : true});

const BUILD   = './dist/build.js';
const DEST    = './dist';
const BASE    = 'index.html';
const DEV     = 'index-dev.html';
const STAGE   = 'index-stage.html';
const PROD    = 'index-prod.html';
const ROOT    = './';
const VENDORS = [
  'node_modules/core-js/client/shim.min.js',
  'node_modules/zone.js/dist/zone.js'
];

function copyIndex(source) {
  return gulp.src(source).pipe($.rename(BASE)).pipe(gulp.dest(ROOT));
}

function output(msg) {
  if (typeof msg === 'object') {
    for (let item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}

gulp.task('gzip', function () {
  output('gzipping');
  let source = [].concat(VENDORS, BUILD);
  return gulp.src(source).pipe($.gzip()).pipe(gulp.dest(DEST));
});

gulp.task('copy-prod', ['gzip', 'clean'], function () {
  output('copy prod');
  return copyIndex(PROD);
});

gulp.task('copy-stage', ['clean'], function () {
  output('copy stage');
  return copyIndex(STAGE);
});


gulp.task('copy-dev', ['clean'], function () {
  output('copy dev');
  return copyIndex(DEV);
});

gulp.task('clean', function (done) {
  output('clean');
  del([BASE]).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
    done()
  });
});


module.exports = gulp;
