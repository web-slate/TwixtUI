"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TwixtAlert;
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var alertStyles = {
  base: 'p-4 pl-5 pr-5 rounded-md flex items-center',
  types: {
    announcement: 'bg-blue-50 border-l-4 border-blue-400 text-blue-700',
    error: 'bg-red-50 border-l-4 border-red-400 text-red-700',
    notification: 'bg-green-50 border-l-4 border-green-400 text-green-700',
    warning: 'bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700'
  },
  icons: {
    announcement: _fa.FaInfoCircle,
    error: _fa.FaExclamationCircle,
    notification: _fa.FaCheckCircle,
    warning: _fa.FaExclamationTriangle
  }
};
function TwixtAlert(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'announcement' : _ref$type,
    overwriteClass = _ref.overwriteClass,
    title = _ref.title,
    desc = _ref.desc,
    linkText = _ref.linkText,
    linkUrl = _ref.linkUrl,
    onClose = _ref.onClose;
  var typeStyle = alertStyles.types[type] || alertStyles.types.announcement;
  var Icon = alertStyles.icons[type] || _fa.FaInfoCircle;
  if (!title) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(alertStyles.base, " ").concat(typeStyle, " ").concat(overwriteClass)
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    className: "mr-2"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-grow"
  }, title && /*#__PURE__*/_react["default"].createElement("div", {
    className: "font-bold"
  }, title), /*#__PURE__*/_react["default"].createElement("div", null, desc)), linkText && linkUrl && /*#__PURE__*/_react["default"].createElement("a", {
    href: linkUrl,
    className: "ml-4 text-blue-500 hover:text-blue-700"
  }, linkText), onClose && /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    className: "ml-4 text-current"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaTimes, {
    className: "h-5 w-5"
  })));
}