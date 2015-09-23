var gulp = require('gulp');

gulp.task('compile', function () {
  var newer = require('gulp-newer');
  var sourcemaps = require('gulp-sourcemaps');
  var ts = require('gulp-typescript');
  var concat = require('gulp-concat');
  var annotate = require('gulp-ng-annotate');
  var uglify = require('gulp-uglify');
  var config = require('../config.js');

  var tsResult = gulp.src([
    config.appPath + '/src/app.ts',
    config.appPath + '/src/**/*.ts'
  ], { base: config.appPath })
    .pipe(newer(config.buildPath + '/js/app.js'))
    .pipe(sourcemaps.init())
    .pipe(ts({
      noImplicitAny: true,
      removeComments: true,
      target: 'ES5'
    }));

  return tsResult.js
    .pipe(annotate())
    .pipe(concat('app.js'))
    .pipe(uglify({ mangle: true, compress: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.buildPath + '/js'));
});

