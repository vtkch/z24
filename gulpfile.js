'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean-css');
var concat = require('gulp-concat-css');
var csso = require('gulp-csso');
gulp.task('default', function () {
    return gulp.src('./sass/entry-point.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(csso())
        .pipe(gulp.dest('./builded'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/*.scss', ['sass']);
});