"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ListContext = require("./ListContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Import the custom hook

var ListItem = function ListItem(_ref) {
  var label = _ref.label,
    sublabel = _ref.sublabel,
    leftContent = _ref.leftContent,
    rightContent = _ref.rightContent;
  var _useListContext = (0, _ListContext.useListContext)(),
    hasDivider = _useListContext.hasDivider; // Use the custom hook

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center ".concat(hasDivider ? 'py-4' : 'py-2')
  }, leftContent && /*#__PURE__*/_react["default"].createElement("div", {
    className: "mr-4"
  }, leftContent), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm font-medium"
  }, label), sublabel && /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-xs text-gray-500"
  }, sublabel)), rightContent && /*#__PURE__*/_react["default"].createElement("div", {
    className: "ml-4"
  }, rightContent));
};
var _default = exports["default"] = ListItem;