"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Link = _interopRequireDefault(require("../../CallsToAction/Link"));
var _BoxItem = _interopRequireDefault(require("../BoxItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var NotificationItem = function NotificationItem(_ref) {
  var leftContent = _ref.leftContent,
    name = _ref.name,
    message = _ref.message,
    time = _ref.time;
  return /*#__PURE__*/_react["default"].createElement(_Link["default"], {
    overwriteClass: "flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
  }, leftContent != null && /*#__PURE__*/_react["default"].createElement(_BoxItem["default"], {
    overwriteClass: "flex-shrink-0"
  }, leftContent), /*#__PURE__*/_react["default"].createElement(_BoxItem["default"], {
    overwriteClass: "ml-3 w-full"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-500 dark:text-gray-400 text-sm"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "font-semibold text-gray-900 dark:text-white"
  }, name), " ", message), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm font-medium text-gray-500 dark:text-gray-400"
  }, time)));
};
var _default = exports["default"] = NotificationItem;