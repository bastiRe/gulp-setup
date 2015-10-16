# gulp-setup
A small boilerplate for jump starting a project with predefined gulp tasks

Features
---------
* Browserify for JavaScript bundling
* Babel for using ES6
* Sass and Autoprefixing for stylesheets
* Handlebars templates
* Browsersync for rapid local development
* Minification for deployment

Usage
-------
All stylesheets and javascripts for development are located in the respective gulp/assets folders. 
`main.js` is the entry point for our javascript code. Additional modules can be required via the CommonJS syntax. 
`main.scss` is the entry point for our Sass code. The stylesheets/javascripts into the public folder where they can be referenced.

During development `gulp watch` can be used to automatically compile stylesheets/javascripts as soon as a file changes.
The watch process automatically starts up a Browsersync server which enables style refreshes without reloads.
Use `gulp build --production` to create minified javascripts/stylesheets for production deployment.
