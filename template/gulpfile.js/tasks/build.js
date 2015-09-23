var gulp = require('gulp');

// Build everything else
gulp.task('build', ['images', 'fonts', 'sass', 'root', 'compile', 'vendor', 'templates']);
