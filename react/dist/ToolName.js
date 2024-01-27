"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ToolName = function ToolName(_ref) {
  var name = _ref.name,
    status = _ref.status,
    emoji = _ref.emoji,
    _ref$slogan = _ref.slogan,
    slogan = _ref$slogan === void 0 ? 'Powered by Tailwind' : _ref$slogan;
  var getStatusEmoji = function getStatusEmoji() {
    switch (status) {
      case 'down':
        return '🔻';
      case 'deprecated':
        return '⚠️';
      case 'christmas':
        return '🎄';
      case 'newyear':
        return '🎆';
      default:
        return '';
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center space-x-2 font-special"
  }, /*#__PURE__*/_react["default"].createElement("span", null, name), getStatusEmoji() && /*#__PURE__*/_react["default"].createElement("span", null, getStatusEmoji()), emoji && /*#__PURE__*/_react["default"].createElement("span", null, emoji), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xs text-gray-500"
  }, slogan));
};
var _default = exports["default"] = ToolName;