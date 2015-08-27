'use strict';

/**
 * Assigns a value to a given property name automatically.
 * 
 * @param  {Object} target Object to set the state
 * @param  {String} prop   Property name
 * @param  {Object} e      DOM Event
 * @return {void}
 */
module.exports = function (target, prop) {
  if (!target || !prop) return; 

  return function(e) {
    var val = e.target.value;
    var obj = {};

    obj[prop] = val;
    target.setState(obj);
  };
};