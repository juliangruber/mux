var pause = require('pause-stream');

module.exports = mux;

function mux() {
  var args = Array.prototype.slice.call(arguments);
  var s = pause();

  for (var i = 0; i < args.length; i++) {
    s.pipe(pause()).pipe(args[i]);
  }

  return s;
}
