"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var Color = _interopRequireWildcard(require("./styled/colors"));

var _Dropdown = _interopRequireDefault(require("./Dropdown/Dropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: ", ";\n  padding: 24px;\n  background-color: ", ";\n  font-family: Roboto, Serif;\n  border-top: ", ";\n  height: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background-color: white;\n  font-family: Roboto;\n  height: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n  height: ", ";\n  border-radius: 4px;\n  border: ", ";\n  margin: ", ";\n  box-shadow: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContainerTime = _styledComponents.default.div(_templateObject(), function (props) {
  return props.mobile ? '100%' : 'fit-content';
}, function (props) {
  return props.mobile ? '100%' : 'fit-content';
}, function (props) {
  return !props.mobile && "1px solid ".concat(Color.grayLight);
}, function (props) {
  return !props.mobile && '8px';
}, function (props) {
  return !props.mobile && '0px 4px 16px rgba(0, 0, 0, 0.12)';
});

var Title = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.mobile && '25%';
});

var Selector = _styledComponents.default.div(_templateObject3(), function (props) {
  return (props.mobile || props.vertical) && 'column';
}, Color.whiteDark, function (props) {
  return !props.withoutTitle && "1px solid ".concat(Color.grayLight);
}, function (props) {
  return props.mobile && '75%';
});

var TimePicker = function TimePicker(_ref) {
  var TwelveHours = _ref.TwelveHours,
      onChange = _ref.onChange,
      title = _ref.title,
      withoutTitle = _ref.withoutTitle,
      mobile = _ref.mobile,
      vertical = _ref.vertical,
      textCentered = _ref.textCentered;

  // Need to decide how to do with hour
  // Store always into 24h format and display different according with the choice made
  var _useState = (0, _react.useState)((0, _moment.default)()),
      _useState2 = _slicedToArray(_useState, 2),
      currentHour = _useState2[0],
      setCurrentHour = _useState2[1];

  var _useState3 = (0, _react.useState)(TwelveHours ? currentHour.format('HH') < 12 : true),
      _useState4 = _slicedToArray(_useState3, 2),
      isAM = _useState4[0],
      setIsAm = _useState4[1];

  var twelve = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var twentyfour = Array.from(Array(24).keys());
  var itemsHour = TwelveHours ? twelve : twentyfour;

  var onChangeFromDropdown = function onChangeFromDropdown(type, value) {
    var temporaryHour = (0, _moment.default)(currentHour);

    switch (type) {
      case 'hour':
        if (TwelveHours) {
          temporaryHour.set('hour', isAM ? value % 12 : value % 12 + 12);
        } else {
          temporaryHour.set('hour', value);
        }

        break;

      case 'minute':
        temporaryHour.set('minute', value);
        break;

      case 'twelveHours':
        if (value === 'AM') {
          setIsAm(true);
          temporaryHour.set('hour', currentHour.hour() - 12);
        }

        if (value === 'PM') {
          setIsAm(false);
          temporaryHour.set('hour', currentHour.hour() + 12);
        }

        break;

      default:
        break;
    }

    setCurrentHour(temporaryHour);
    onChange(temporaryHour);
  };

  return _react.default.createElement(ContainerTime, {
    mobile: mobile
  }, !withoutTitle && _react.default.createElement(Title, {
    mobile: mobile
  }, title || 'Select a time'), _react.default.createElement(Selector, {
    withoutTitle: withoutTitle,
    mobile: mobile,
    vertical: vertical
  }, _react.default.createElement(_Dropdown.default, {
    width: mobile && '100%',
    centered: mobile || textCentered,
    onChange: function onChange(h) {
      return onChangeFromDropdown('hour', h);
    },
    type: "hour",
    items: itemsHour,
    defaultIndex: TwelveHours ? currentHour.format('h') % 12 : Number(currentHour.format('HH'))
  }), _react.default.createElement(_Dropdown.default, {
    width: mobile && '100%',
    centered: mobile || textCentered,
    type: "minute",
    onChange: function onChange(h) {
      return onChangeFromDropdown('minute', h);
    },
    items: Array.from(Array(60).keys()),
    defaultIndex: Number(currentHour.format('mm'))
  }), TwelveHours && _react.default.createElement(_Dropdown.default, {
    width: mobile && '100%',
    centered: mobile || textCentered,
    type: "twelveHours",
    onChange: function onChange(h) {
      return onChangeFromDropdown('twelveHours', h);
    },
    items: ['AM', 'PM'],
    defaultIndex: isAM ? 0 : 1
  })));
};

TimePicker.propTypes = {
  TwelveHours: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  title: _propTypes.default.string,
  withoutTitle: _propTypes.default.bool,
  mobile: _propTypes.default.bool,
  vertical: _propTypes.default.bool,
  textCentered: _propTypes.default.bool
};
TimePicker.defaultProps = {
  TwelveHours: true,
  onChange: function onChange() {},
  title: null,
  withoutTitle: false,
  mobile: false,
  vertical: false,
  textCentered: false
};
var _default = TimePicker;
exports.default = _default;