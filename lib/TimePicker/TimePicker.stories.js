"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _addonKnobs = require("@storybook/addon-knobs");

var _TimePicker = _interopRequireDefault(require("./TimePicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 16px;\n  top: 16px;\n  display: flex;\n  //justify-content: flex-end;\n  //align-items: center;\n  padding: 32px;\n  width: calc(100% - 32px);\n  height: calc(100% - 32px);\n  background-color: #F7F7F7;\n  border-radius: 4px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.div(_templateObject());

var stories = (0, _react2.storiesOf)('Time Picker', module);
stories.add('12 Hour Format', function () {
  return _react.default.createElement(Container, null, _react.default.createElement(_TimePicker.default, {
    onChange: function onChange(time) {
      return alert(time.format('HH:mm'));
    }
  }));
});
stories.add('24 Hour Format', function () {
  return _react.default.createElement(Container, null, _react.default.createElement(_TimePicker.default, {
    TwelveHours: false,
    onChange: function onChange(time) {
      return alert(time.format('HH:mm'));
    }
  }));
});
stories.add('Custom Title', function () {
  return _react.default.createElement(Container, null, _react.default.createElement(_TimePicker.default, {
    title: "Custom Title",
    onChange: function onChange(time) {
      return alert(time.format('HH:mm'));
    }
  }));
});