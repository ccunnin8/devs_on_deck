'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass',()=>{
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./apps/static/css'));
});

gulp.task('sass:watch',()=>{
  gulp.watch('./scss/**/*.scss',['sass']);
});

gulp.task('default',['sass:watch']);
