"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var UserFacePile = function UserFacePile(_ref) {
  var user = _ref.user;
  return /*#__PURE__*/_react["default"].createElement("img", {
    src: user.avatarUrl,
    className: "w-14 h-14 rounded-full ".concat(user["class"])
  });
};
var _default = exports["default"] = UserFacePile;