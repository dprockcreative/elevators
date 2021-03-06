const gulp = require('gulp');
const del  = require('del');
const fs   = require('fs');
const $    = require('gulp-load-plugins')({lazy : true});

const PRSRV   = './preserve.js';
const DEST    = '../dist';
const DIST    = './dist';
const BUILD   = './dist/build.js';
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

gulp.task('gzip', () => {
  output('gzipping');
  let source = [].concat(VENDORS, BUILD);
  return gulp
    .src(source)
    .pipe($.gzip())
    .pipe(gulp.dest(DIST))
    .pipe(gulp.dest(DEST));
});

gulp.task('build:prod', ['gzip', 'clean', 'src'], () => {
  output('build prod');
  return copyIndex(PROD);
});

gulp.task('build:stage', ['clean', 'src'], () => {
  output('build stage');

  let source = [].concat(VENDORS, BUILD);

  gulp.src(source)
    .pipe(gulp.dest(DIST))
    .pipe(gulp.dest(DEST));

  return copyIndex(STAGE);
});

gulp.task('build:dev', ['clean', 'src'], () => {
  output('build dev');
  return copyIndex(DEV);
});



gulp.task('src', [], () => {
  return gulp.src(['./src/**/*', '!./src/sass', '!./src/sass/**/*'])
    .pipe(gulp.dest('../src'));
});

gulp.task('clean', (done) => {
  output('clean');
  del([BASE]).then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
    done()
  });
});

module.exports = gulp;
