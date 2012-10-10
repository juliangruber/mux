
# mux

  Multiplex streams

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

For each `destination` there is a pausable stream connected in-between so that
when one `destination` applies backpressure the others aren't slowed down.

## License

(MIT)
