
# mux

  Multiplex streams, like `tee(1)`.

## Usage

```javascript
var mux = require('mux');

src
  .pipe(mux(
    dest1,
    dest2,
    dest3
  ))
  .pipe(somewhereElse)
```

## Installation

```bash
$ npm install mux
# or
$ component install juliangruber/mux
```

## API

### mux(destination, ...)

Creates a new through Stream that pipes all incoming data to each
`destination`-Stream.

## License

(MIT)
