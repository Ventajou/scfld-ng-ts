var gulp = require('gulp');

// Vendor scripts
gulp.task('vendor:js', function () {
  var bowerFiles = require('main-bower-files');
  var newer = require('gulp-newer');
  var sourcemaps = require('gulp-sourcemaps');
  var concat = require('gulp-concat');
  var uglify = require('gulp-uglify');
  var config = require('../config.js');

  return gulp.src(bowerFiles('**/*.js'), { base: config.appPath })
    .pipe(newer(config.buildPath + '/js/vendor.js'))
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.js'))
    .pipe(uglify({ mangle: true, compress: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.buildPath + '/js'));
});

gulp.task('vendor:css', function () {
  var bowerFiles = require('main-bower-files');
  var newer = require('gulp-newer');
  var sourcemaps = require('gulp-sourcemaps');
  var concat = require('gulp-concat');
  var postcss = require('gulp-postcss');
  var config = require('../config.js');

  return gulp.src(bowerFiles('**/*.css'), { base: config.appPath })
    .pipe(newer(config.buildPath + '/css/vendor.css'))
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.css'))
    .pipe(postcss(config.processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.buildPath + '/css'));
});

gulp.task('vendor:fonts', function () {
  var bowerFiles = require('main-bower-files');
  var filter = require('gulp-filter');
  var flatten = require('gulp-flatten');
  var newer = require('gulp-newer');
  var config = require('../config.js');

  return gulp.src(bowerFiles(), { base: config.appPath })
    .pipe(filter(function (file) { return /font/.test(file.path); }))
    .pipe(flatten())
    .pipe(newer(config.buildPath + '/fonts'))
    .pipe(gulp.dest(config.buildPath + '/fonts'));
});

gulp.task('vendor', ['vendor:js', 'vendor:css', 'vendor:fonts']);
