var gulp = require('gulp')
var browserSync = require('browser-sync')
var sass = require('gulp-sass')
var concat = require('gulp-concat')
var minifyCss = require('gulp-minify-css')
var gulpIf = require('gulp-if')
var handleErrors = require('../util/handle_errors')
var config = require('../config').sass
var autoprefixer = require('gulp-autoprefixer')
var argv = require('yargs').argv

gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe(gulpIf(/[.]scss$/, sass(config.settings)))
    .on('error', handleErrors)
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(concat('main.css')).on('error', handleErrors)
    .pipe(gulpIf(argv.production, minifyCss().on('error', handleErrors)))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}))
})
