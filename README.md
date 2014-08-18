# spawn-rmrf

[![Actual version published on NPM](https://badge.fury.io/js/spawn-handler.png)](https://www.npmjs.org/package/spawn-handler)

Removes recursively with rm -rf `./file/path` (spawned), then executes a callback on end (optional).


## Quick start

### Install

```sh
npm install spawn-rmrf
```

### Usage

```js
var rmrf = require('spawn-rmrf');
```

#### Basic

```js
rmrf('/path/to/remove');
```

#### With a callback (when done)

```js
rmrf('/path/to/remove', function(code) {
  console.log('Finished with code ' + code);
});
```

#### With Gulp

```js
// async
gulp.task('clean', function(done){
  rmrf('/path/to/remove', done);
});
```

#### ChildProcess events

`rmrf` function launches a child process (`spawn`) and returns a `ChildProcess` instance, see the [Node.js doc (spawn)](http://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options) for more details.

So you can use event listeners:

```js
var rm = rmrf('/path/to/remove');

rm.stdout.on('data', function (data) {
  console.log('stdout: ', data);
});

rm.stderr.on('data', function (data) {
  console.log('stderr: ', data);
});

rm.on('close', function (code) {
  console.log('rmrf exited with code ' + code);
});
```


## Testing

_spawn-rmrf_ [is tested](test/src/index.js) with [Unit.js](http://unitjs.com) and Mocha.
Unit.js is a powerful and intuitive unit testing framework for javascript.


## License

[MIT](https://github.com/Nicolab/node-spawn-rmrf/blob/master/LICENSE) (c) 2013, Nicolas Tallefourtane.


## Author

| [![Nicolas Tallefourtane - Nicolab.net](http://www.gravatar.com/avatar/d7dd0f4769f3aa48a3ecb308f0b457fc?s=64)](http://nicolab.net) |
|---|
| [Nicolas Talle](http://nicolab.net) |
| [![Make a donation via Paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PGRH4ZXP36GUC) |
