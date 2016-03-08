'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _toolbar = require('./toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MaterialDraft = function (_Component) {
  _inherits(MaterialDraft, _Component);

  function MaterialDraft(props) {
    _classCallCheck(this, MaterialDraft);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MaterialDraft).call(this, props));

    _this.state = { editorState: _draftJs.EditorState.createEmpty() };

    _this.handleChange = function (editorState) {
      var plainText = editorState.getCurrentContent().getPlainText();
      _this.props.onChange(plainText);
      _this.setState({ editorState: editorState });
    };

    _this.focus = function () {
      return _this.refs.editor.focus();
    };

    _this.handleKeyCommand = function (command) {
      var editorState = _this.state.editorState;

      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        _this.handleChange(newState);
        return true;
      }
      return false;
    };

    return _this;
  }

  _createClass(MaterialDraft, [{
    key: 'render',
    value: function render() {
      var editorState = this.state.editorState;

      return _react2.default.createElement(
        'div',
        { onClick: this.focus },
        _react2.default.createElement(_toolbar2.default, null),
        _react2.default.createElement(_draftJs.Editor, _extends({}, this.props, {
          editorState: editorState,
          onChange: this.handleChange,
          handleKeyCommand: this.handleKeyCommand
        }))
      );
    }
  }]);

  return MaterialDraft;
}(_react.Component);

MaterialDraft.propTypes = {
  onChange: _react.PropTypes.func.isRequired
};
exports.default = MaterialDraft;