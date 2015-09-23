var gulp = require('gulp');

gulp.task('fonts', function() {
  var flatten = require('gulp-flatten');
  var newer = require('gulp-newer');
  var config = require('../config.js');

  return gulp.src([config.appPath + '/fonts/**/*'])
    .pipe(flatten())
    .pipe(newer(config.buildPath + '/fonts'))
    .pipe(gulp.dest(config.buildPath + '/fonts'));
});
