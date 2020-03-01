"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Color = _interopRequireWildcard(require("../../styled/colors"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UpArrow = function UpArrow(_ref) {
  var color = _ref.color,
      dimensions = _ref.dimensions;
  return _react.default.createElement("svg", {
    width: dimensions,
    height: dimensions,
    viewBox: "0 0 551.13 551.13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m275.565 189.451 223.897 223.897h51.668l-275.565-275.565-275.565 275.565h51.668z",
    fill: color
  }));
};

UpArrow.propTypes = {
  color: _propTypes.default.string,
  dimensions: _propTypes.default.number
};
UpArrow.defaultProps = {
  color: Color.grayDark,
  dimensions: 18
};
var _default = UpArrow;
exports.default = _default;