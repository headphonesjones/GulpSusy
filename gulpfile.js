var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload');
 
gulp.task('scss', function() {
  gulp.src('_src/scss/**/*.scss')
  	.pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./_src/css'))
    .pipe(livereload());
});


gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('_src/scss/**/*.scss', ['scss']);   
});