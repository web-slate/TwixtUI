"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _BoxItem = _interopRequireDefault(require("../../Containers/BoxItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Badge = function Badge(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'block' : _ref$type,
    value = _ref.value,
    status = _ref.status,
    overwriteClass = _ref.overwriteClass,
    leftIcon = _ref.leftIcon,
    rightIcon = _ref.rightIcon;
  var statusToColor = {
    "default": 'bg-gray-500',
    active: 'bg-blue-500',
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-orange-500',
    yellow: 'bg-yellow-500',
    magenta: 'bg-pink-500',
    purple: 'bg-purple-500',
    teal: 'bg-teal-500',
    cyan: 'bg-cyan-500'
  };
  var badgeColor = statusToColor[status] || 'bg-gray-500';
  var badgeClasses = overwriteClass || "inline-flex items-center px-3 py-1 text-white font-semibold text-sm rounded-full ".concat(badgeColor);
  return /*#__PURE__*/_react["default"].createElement(_BoxItem["default"], {
    type: type,
    overwriteClass: badgeClasses
  }, leftIcon && /*#__PURE__*/_react["default"].createElement("span", {
    className: "mr-2 flex items-center"
  }, leftIcon), /*#__PURE__*/_react["default"].createElement("span", null, value), rightIcon && /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-2 flex items-center"
  }, rightIcon));
};
var _default = exports["default"] = Badge;