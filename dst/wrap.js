"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrap;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _typetastic = require("typetastic");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uniqueId = 0;

function wrap(children, props) {
  var isA = (0, _typetastic.isArray)(children);
  if (!isA) {
    return _react2.default.cloneElement(children, props);
  }
  return children.map(function (child) {
    props.key = props.key || uniqueId++;
    return _react2.default.cloneElement(child, props);
  });
}