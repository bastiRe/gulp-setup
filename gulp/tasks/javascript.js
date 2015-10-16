var gulp = require('gulp')
var gulpIf = require('gulp-if')
var uglify = require('gulp-uglify')
var sourcemaps = require('gulp-sourcemaps')
var handleErrors = require('../util/handle_errors')
var config = require('../config')
var argv = require('yargs').argv
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')

gulp.task('javascript', function () {
  var b = browserify({
    entries: config.jsSrc + 'main.js',
    debug: true,
    transform: ['babelify', 'hbsfy'],
    extensions: ['.hbs']
  })

  return b.bundle().on('error', handleErrors)
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(gulpIf(argv.production, uglify().on('error', handleErrors)))
        .pipe(gulpIf(argv.production, sourcemaps.write(config.maps), sourcemaps.write()))
        .pipe(gulp.dest(config.buildJS))
})

