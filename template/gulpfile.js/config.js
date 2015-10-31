var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

module.exports = {
  tempPath: './.tmp',

  buildPath: './.tmp/build',
  appPath: './app',
  appModule: '<%=moduleName %>',

  processors: [
    autoprefixer({browsers: ['last 2 versions']}),
    mqpacker({ sort: true }),
    csswring({ removeAllComments: true })
  ],

  sassIncludePaths: [
    'app/bower/bootstrap-sass/assets/stylesheets'
  ]
}
