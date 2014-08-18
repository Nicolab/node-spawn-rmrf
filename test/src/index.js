/**
 * @name spawn-rmrf (test)
 * @description Unit tests of `spawn-rmrf`.
 * @author Nicolas Tallefourtane <dev@nicolab.net>
 * @link https://github.com/Nicolab/node-spawn-rmrf
 * @license MIT https://github.com/Nicolab/node-spawn-rmrf/blob/master/LICENSE
 */

'use strict';

var test    = require('unit.js');
var rmrf    = require('../../src/index');
var spawn   = require('spawn-handler');
var exec    = require('child_process').exec;
var path    = require('path');
var fs      = require('fs');
var tmpPath = path.join(__dirname, '..', 'fixtures', 'tmp');


describe('spawn-rmrf', function() {

  before(function(done) {

    spawn.handle(spawn.run(
      'cp',
      ['-r', 'dir', 'tmp'],
      { cwd: path.join(__dirname, '..', 'fixtures') }
    ),
    function() {
      done();
    });
  });

  after(function(done) {
    testRemove(tmpPath, done);
  });

  it('remove a file', function(done) {

    testRemove(tmpPath + '/a.js', done);
  });

  it('remove a directory', function(done) {

    testRemove(tmpPath + '/sub2', done);
  });
});


/*----------------------------------------------------------------------------*\
  Utils
\*----------------------------------------------------------------------------*/

function testRemove(filePath, done) {

  test
    .bool(fs.existsSync(filePath))
      .isTrue()

    .object(rmrf(filePath, function(code) {

      test
        .number(code)
          .isIdenticalTo(0)

        .bool(fs.existsSync(filePath))
          .isFalse()
      ;

      done();
    }))
  ;
}
