"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ProfilePic(_ref) {
  var label = _ref.label,
    _ref$shortName = _ref.shortName,
    shortName = _ref$shortName === void 0 ? false : _ref$shortName;
  if (label && shortName) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white"
    }, label);
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "ProfilePic goes here.");
}
var _default = exports["default"] = ProfilePic;