var through = require('through');

module.exports = mux;

function mux() {
  var tr = through();
  for (var i = 0; i < arguments.length; i++) {
    tr.pipe(arguments[i]);
  }

  return tr;
}
