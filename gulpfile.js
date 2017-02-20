const gulp = require('gulp');
const del  = require('del');
const fs   = require('fs');
const $    = require('gulp-load-plugins')({lazy : true});
const lite = require('lite-server');

const BUILD   = './dist/build.js';
const DEST    = './dist';
const BASE    = 'index.htm';
const HEAD    = 'templates/head.tmpl';
const BODY    = 'templates/body.tmpl';
const DEV     = 'templates/dev.tmpl';
const STAGE   = 'templates/stage.tmpl';
const PROD    = 'templates/prod.tmpl';
const ROOT    = './';
const VENDORS = [
  'node_modules/core-js/client/shim.min.js',
  'node_modules/zone.js/dist/zone.min.js'
];

function copyIndex(source) {
  let head = fs.readFileSync(HEAD, 'utf8');
  let body = fs.readFileSync(BODY, 'utf8');
  return gulp.src(source)
    .pipe($.replace("{{HEAD}}", head))
    .pipe($.replace("{{BODY}}", body))
    .pipe($.rename(BASE))
    .pipe(gulp.dest(ROOT));
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

gulp.task('build:prod', ['gzip', 'clean'], function () {
  output('build prod');
  return copyIndex(PROD);
});

gulp.task('build:stage', ['clean'], function () {
  output('build stage');

  gulp.src(VENDORS)
    .pipe(gulp.dest(DEST));

  return copyIndex(STAGE);
});

gulp.task('build:dev', ['clean'], function () {
  output('build dev');
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
