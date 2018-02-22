var Metalsmith  = require('metalsmith');
var ignore = require('metalsmith-ignore');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    title: "faith.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(ignore([
    '*/.DS_Store',
    'links/css/**',
    '!links/css/style.css'
  ]))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
