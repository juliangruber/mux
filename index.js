var through = require('through');

module.exports = mux;

function mux() {
  var args = Array.prototype.slice.call(arguments);

  var tr = through();
  for (var i = 0; i < args.length; i++) {
    tr.pipe(args[i]);
  }

  return tr;
}
