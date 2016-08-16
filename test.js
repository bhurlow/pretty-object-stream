
var fakestream = require('fakestream')(500, true)
var prettystream = require('./index')

fakestream
  .pipe(prettystream())
  .pipe(process.stdout)
