var gulp = require('gulp')
var config = require('../config')
var watch = require('gulp-watch')

gulp.task('watch', ['browserSync'], function (callback) {
  watch(config.sass.src, function () { gulp.start('sass') })
  watch(config.jsSrc + '*.js', function () { gulp.start('javascript') })
})
