"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Color = _interopRequireWildcard(require("../styled/colors"));

var _DownArrow = _interopRequireDefault(require("./Icon/DownArrow"));

var _UpArrow = _interopRequireDefault(require("./Icon/UpArrow"));

require("react-perfect-scrollbar/dist/css/styles.css");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n  max-height: 131px;\n  height: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  //width: fit-content;\n  background-color: ", ";\n  padding: 12px 16px 12px 16px;\n  border-bottom: ", ";\n  box-sizing: border-box;\n  cursor:pointer;\n \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 42px;\n  left: 0;\n  width: 100%;\n  max-height: 150px; \n  background-color: ", ";\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  //overflow: hidden;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  //width: fit-content;\n  min-width: 96px;\n  height: 44px;\n  border-radius: 4px;\n  background-color: ", ";\n  padding: 8px 16px 8px 16px;\n  border: 1px solid ", ";\n  margin: 8px;\n  box-sizing: border-box;\n  cursor:pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _styledComponents.default.div(_templateObject(), Color.white, Color.grayLight);

var ItemDisplayed = _styledComponents.default.div(_templateObject2());

var DropMenu = _styledComponents.default.div(_templateObject3(), Color.white, Color.grayLight);

var Cell = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.isSelected ? Color.whiteDark : Color.white;
}, function (props) {
  return !props.isLast && "1px solid".concat(Color.grayLight);
});

var ContainerPerfectScrollBar = _styledComponents.default.div(_templateObject5(), function (props) {
  return props.items.length > 3 ? '131px' : 'auto';
});

var Dropdown = function Dropdown(_ref) {
  var items = _ref.items,
      onChange = _ref.onChange,
      defaultIndex = _ref.defaultIndex;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      mounted = _useState2[0],
      setMounted = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(defaultIndex),
      _useState6 = _slicedToArray(_useState5, 2),
      indexSelectedItem = _useState6[0],
      setIndexSelectedItem = _useState6[1];

  var refBox = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setMounted(true);
  }, []);
  (0, _react.useEffect)(function () {
    if (mounted) {
      onChange(items[indexSelectedItem]);
    }
  }, [indexSelectedItem]);
  var cells = items && items.length > 0 && items.map(function (i, index) {
    return _react.default.createElement(Cell, {
      onClick: function onClick() {
        setOpen(false);
        setIndexSelectedItem(index);
      },
      key: index,
      isLast: index === items.length - 1,
      isSelected: index === indexSelectedItem
    }, String(i).padStart(2, '0'));
  });
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Box, {
    tabIndex: "0",
    ref: refBox,
    onClick: function onClick() {
      return setOpen(!open);
    },
    onBlur: function onBlur() {
      return setOpen(false);
    }
  }, _react.default.createElement(ItemDisplayed, {
    onFocus: function onFocus() {
      return console.log('3');
    }
  }, String(items[indexSelectedItem]).padStart(2, '0')), _react.default.createElement(ItemDisplayed, {
    onFocus: function onFocus() {
      return console.log('4');
    }
  }, !open ? _react.default.createElement(_DownArrow.default, null) : _react.default.createElement(_UpArrow.default, null)), open && items && items.length > 0 && _react.default.createElement(DropMenu, {
    onFocus: function onFocus() {
      return console.log('1');
    }
  }, _react.default.createElement(ContainerPerfectScrollBar, {
    items: items,
    onFocus: function onFocus() {
      return console.log('2');
    }
  }, _react.default.createElement(_reactPerfectScrollbar.default, null, cells)))));
};

Dropdown.propTypes = {
  onChange: _propTypes.default.func,
  defaultIndex: _propTypes.default.number
};
Dropdown.defaultProps = {
  onChange: function onChange() {},
  defaultIndex: 0
};
var _default = Dropdown;
exports.default = _default;