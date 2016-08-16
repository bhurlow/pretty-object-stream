
var flatten = require('flat')
var chalk = require('chalk')
var Transform = require('stream').Transform

function emptySpace(n) {
  var s = ''
  while (n--) {
    s += ' '
  }
  return s
}

function formatKey(k, val, max) {
  var s = ' '
  var leftPadAmount = max - k.length
  s += (emptySpace(leftPadAmount) + chalk.blue(k))
  s += emptySpace(3)
  s += chalk.grey(val)
  s += '\n'
  return s
}

function formatDoc(doc) {
  var keys = Object.keys(doc)

  // get longest key in chars
  var lengths = keys.map(x => x.length).sort((x, y) => x - y)
  var max = lengths[lengths.length - 1]

  var str = ''

  str += ' \n'
  keys.forEach(k => {
    str += formatKey(k, doc[k], max)
  })
  str += ' \n'

  return str
}

class PrettyObjectStream extends Transform {

  constructor() {
    super({ writableObjectMode: true});
  }

  _transform(obj, encoding, next) {
    var doc = flatten(obj)
    var s = formatDoc(doc)
    this.push(s)
    next()
  }

}

module.exports = function() { return new PrettyObjectStream }



