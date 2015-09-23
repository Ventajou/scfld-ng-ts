var gulp = require('gulp');

gulp.task('root', function() {
  var newer = require('gulp-newer');
  var config = require('../config.js');

  return gulp.src([config.appPath + '/*.ico', config.appPath + '/*.html', config.appPath + '/*.xml'])
    .pipe(newer(config.buildPath))
    .pipe(gulp.dest(config.buildPath));
});
