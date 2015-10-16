var buildJS = 'public/javascripts/'
var buildCSS = 'public/stylesheets'
var srcFiles = 'gulp/assets/'

var config = {
  buildJS: buildJS,
  buildCSS: buildCSS,
  jsSrc: srcFiles + 'javascripts/',
  browserSync: {
    // fires up a browsersync server for local dev
    server: {
      baseDir: './'
    }
    // alternatively you can proxy another server e.g. rails
    // proxy: 8080
  },
  sass: {
    src: [
      srcFiles + '/stylesheets/main.scss'
    ],
    watchSrc: [srcFiles + '/stylesheets/**/*.scss'],
    dest: buildCSS
  },
  maps: '/maps'
}

module.exports = config
