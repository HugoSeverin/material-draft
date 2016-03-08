'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleChange = function handleChange(data) {
  return console.log(data);
};

// app specific code

(0, _reactDom.render)(_react2.default.createElement(_index2.default, { onChange: handleChange }), document.getElementById('root'));