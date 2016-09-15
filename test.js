
var fakestream = require('fakestream')(500, true)
var prettystream = require('./index')
var es = require('event-stream')

fakestream
  .pipe(es.map(function(data, cb) {

    data.nested = {
      foo: "123123182lukhalkahsdf \n alkshdflaiushl \n alskdhflauehlsdf",
      bar: {
        baz: 'asdji alsdfhl asldjfh ulihasdf  asdkfh asdfh'
      }
    }

    cb(null, data)
  }))
  .pipe(prettystream())
  .pipe(process.stdout)
