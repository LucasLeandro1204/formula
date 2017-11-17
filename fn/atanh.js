'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = atan;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Return the arctangent (in radians) of the given number
function atan(x) {

  // Ensure value is a number
  if (!(0, _isnumber2.default)(x)) {
    return _error2.default.value;
  }

  // Compute value
  return Math.log((1 + x) / (1 - x)) / 2;
}
module.exports = exports['default'];