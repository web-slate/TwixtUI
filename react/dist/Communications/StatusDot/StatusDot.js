"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _BoxItem = _interopRequireDefault(require("../../Containers/BoxItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var statusIndicatorColors = {
  "default": 'bg-gray-200',
  active: 'bg-blue-600',
  success: 'bg-green-500',
  error: 'bg-red-500',
  warning: 'bg-yellow-500'
};
function StatusDot(_ref) {
  var _ref$status = _ref.status,
    status = _ref$status === void 0 ? 'default' : _ref$status,
    overwriteClass = _ref.overwriteClass;
  var statsClasses = overwriteClass || "flex w-3 h-3 me-3 rounded-full ".concat(statusIndicatorColors[status]);
  return /*#__PURE__*/_react["default"].createElement(_BoxItem["default"], {
    overwriteClass: statsClasses
  });
}
var _default = exports["default"] = StatusDot;