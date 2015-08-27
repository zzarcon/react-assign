'use strict';

/**
 * [exports description]
 * @param  {Object} target Object to set the state
 * @param  {String} prop   Property name
 * @param  {Object} e      DOM Event
 * @return {void}
 */
module.exports = function (target, prop, e) {
  if (!target || !prop) return;

  var val = e.target.value;
  var obj = {};

  obj[prop] = val;
  target.setState(obj);
};