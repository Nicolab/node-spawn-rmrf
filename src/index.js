/**
 * @name spawn-rmrf (main)
 * @description `rm -rf` spawned.
 * @author Nicolas Tallefourtane <dev@nicolab.net>
 * @link https://github.com/Nicolab/node-spawn-rmrf
 * @license MIT https://github.com/Nicolab/node-spawn-rmrf/blob/master/LICENSE
 */

'use strict';

var spawn = require('spawn-handler');


/**
 * rm -rf `filePath` then `done`
 *
 * @see https://github.com/Nicolab/node-spawn-handler
 *
 * @param  {string}   filePath File path to remove (recursively).
 * @param  {function} done     Callback executed at the end.
 * @return {ChildProcess}      ChildProcess object.
 */
module.exports = function rmrf(filePath, done) {
  return spawn.handle(spawn.run('rm', ['-rf', filePath]), done, 'rmrf');
};