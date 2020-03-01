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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background-color: ", ";\n  font-family: Roboto;\n  border-top: 1px solid ", ";;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  background-color: white;\n  font-family: Roboto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n  height: fit-content;\n  border-radius: 4px;\n  border: 1px solid ", ";\n  margin: 8px;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Temp = _styledComponents.default.div(_templateObject());

var ContainerTime = _styledComponents.default.div(_templateObject2(), Color.grayLight);

var Title = _styledComponents.default.div(_templateObject3());

var Selector = _styledComponents.default.div(_templateObject4(), Color.whiteDark, Color.grayLight);

var TimePicker = function TimePicker(_ref) {
  var TwelveHours = _ref.TwelveHours,
      onChange = _ref.onChange,
      title = _ref.title;

  // Need to decide how to do with hour
  // Store always into 24h format and display different according with the choice made
  var _useState = (0, _react.useState)((0, _moment.default)()),
      _useState2 = _slicedToArray(_useState, 2),
      currentHour = _useState2[0],
      setCurrentHour = _useState2[1];

  var _useState3 = (0, _react.useState)(currentHour.format('HH') <= 12),
      _useState4 = _slicedToArray(_useState3, 2),
      isAM = _useState4[0],
      setIsAm = _useState4[1]; // hours


  var itemsHour = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (!TwelveHours) {
    itemsHour = itemsHour.concat([13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0]);
  } // console.log(itemsHour);


  var onChangeFromDropdown = function onChangeFromDropdown(type, value) {
    // console.log({ type, value });
    // const temporaryHour = moment(currentHour.format('HH:mm'), 'HH:mm');
    var temporaryHour = (0, _moment.default)(currentHour);

    switch (type) {
      case 'hour':
        // console.log(isAM);
        // setCurrentHour(moment().set('hour', isAM ? value : value + 12));
        // setCurrentHour(moment(currentHour.format('HH:mm'), 'HH:mm').set('hour', isAM ? value : value + 12));
        temporaryHour.set('hour', isAM ? value : value + 12);
        break;

      case 'minute':
        // setCurrentHour(moment(currentHour.format('HH:mm'), 'HH:mm').set('minute', value));
        temporaryHour.set('minute', value);
        break;

      case 'twelveHours':
        // console.log('AMMNAMAMA');
        if (value === 'AM') {
          setIsAm(true); // setCurrentHour(moment(currentHour.format('HH:mm'), 'HH:mm').set('hour', currentHour.hour() - 12));

          temporaryHour.set('hour', currentHour.hour() - 12);
        } // console.log('set to false');


        if (value === 'PM') {
          setIsAm(false); // setCurrentHour(moment(currentHour.format('HH:mm'), 'HH:mm').set('hour', currentHour.hour() + 12));

          temporaryHour.set('hour', currentHour.hour() + 12);
        }

        break;

      default:
        break;
    }

    setCurrentHour(temporaryHour); // console.log(temporaryHour.format('HH:mm'));

    onChange(temporaryHour);
  };

  return _react.default.createElement(ContainerTime, null, _react.default.createElement(Title, null, title || 'Select a time'), _react.default.createElement(Selector, null, _react.default.createElement(_Dropdown.default, {
    onChange: function onChange(h) {
      return onChangeFromDropdown('hour', h);
    },
    type: "hour",
    items: itemsHour,
    defaultIndex: currentHour.format('h') - 1
  }), _react.default.createElement(_Dropdown.default, {
    type: "minute",
    onChange: function onChange(h) {
      return onChangeFromDropdown('minute', h);
    },
    items: Array.from(Array(60).keys()),
    defaultIndex: currentHour.format('mm')
  }), TwelveHours && _react.default.createElement(_Dropdown.default, {
    type: "twelveHours",
    onChange: function onChange(h) {
      return onChangeFromDropdown('twelveHours', h);
    },
    items: ['AM', 'PM'],
    defaultIndex: currentHour.format('HH') > 12 && 1
  })));
};

TimePicker.propTypes = {
  TwelveHours: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  title: _propTypes.default.string
};
TimePicker.defaultProps = {
  TwelveHours: true,
  onChange: function onChange() {},
  title: null
};
var _default = TimePicker;
exports.default = _default;