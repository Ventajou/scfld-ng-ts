var gulp = require('gulp');

gulp.task('default', ['build'], function () {
  var config = require('../config.js');
  var watch = require('gulp-watch');
  var browserSync = require('browser-sync').create();

  watch(config.appPath + '/*.*', function () { gulp.start('root'); });
  watch(config.appPath + '/styles/**/*.scss', function () { gulp.start('sass'); });
  watch(['typings/**/*.d.ts', config.appPath + '/src/**/*.ts'], function () { gulp.start('compile'); });
  watch(config.appPath + '/src/**/*.html', function () { gulp.start('templates'); });
  watch(config.appPath + '/images/**/*', function () { gulp.start('images'); });
  watch(config.appPath + '/fonts/**/*', function () { gulp.start('fonts'); });
  watch('bower.json', function () { gulp.start('vendor'); });

  watch([
    config.buildPath + '/*.html',
    config.buildPath + '/js/*.js',
    config.buildPath + '/css/*.css'
  ], browserSync.reload);

  browserSync.init({
    open: true,
    browser: ['chrome'],
    server: {
      baseDir: config.buildPath
    }
  });
});