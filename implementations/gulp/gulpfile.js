/* jshint globalstrict:true */

'use strict';

var gulp    = require('gulp'),
del         = require('del'),
runSequence = require('run-sequence'),
browserify  = require('gulp-browserify'),
eslint      = require('gulp-eslint'),
plumber     = require('gulp-plumber'),
rename      = require('gulp-rename'),
sass        = require('gulp-sass'),
shell       = require('gulp-shell'),
uglify      = require('gulp-uglifyjs');

var paths = {
  js: 'js/**/*.js',
  styles: 'bower_components/todomvc-common/*.css',
  tests: 'test/*.js',
  dist: 'dist/**'
};

var onError = function(err) {
  console.log(err);
  this.emit('end');
};

gulp.task('clean', function(cb) {
  del([paths.dist], cb);
});

gulp.task('eslint', function() {
  return gulp.src([paths.js, paths.tests])
  .pipe(eslint())
  .pipe(eslint.format());
})

gulp.task('compile-js', function() {
  return gulp.src('js/app.js')
  .pipe(plumber({ errorHandler: onError }))
  .pipe(browserify({}))
  .pipe(uglify('app.js', { outSourceMap: 'app.map.json' }))
  .pipe(gulp.dest('dist'))
});


gulp.task('compile-styles', function () {
  gulp.src(paths.styles)
  .pipe(plumber({ errorHandler: onError }))
  .pipe(sass())
  .pipe(rename('app.css'))
  .pipe(gulp.dest('dist'));
});

gulp.task('test', shell.task([
  'tape ' + paths.tests + ' | faucet',
]));

gulp.task('build', function(callback) {
  runSequence('clean',
  [
    'eslint',
    'compile-styles',
    'compile-js'
  ],
  callback);
});

gulp.task('dev', function() {
  gulp.watch(paths.js, ['eslint', 'compile-js', 'test']);
  gulp.watch(paths.styles, ['compile-styles', 'test']);
});
