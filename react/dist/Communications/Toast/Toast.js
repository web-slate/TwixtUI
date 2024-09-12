"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Toast = function Toast(_ref) {
  var title = _ref.title,
    body = _ref.body,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'info' : _ref$type,
    _ref$autoHide = _ref.autoHide,
    autoHide = _ref$autoHide === void 0 ? 0 : _ref$autoHide,
    onHide = _ref.onHide,
    overwriteClass = _ref.overwriteClass,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'bottom-right' : _ref$position;
  var typeToColor = {
    info: 'border-blue-500',
    warning: 'border-orange-500',
    error: 'border-red-500'
  };
  var typeToBackgroundColor = {
    info: 'bg-blue-100',
    warning: 'bg-orange-100',
    error: 'bg-red-100'
  };
  var positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
  };
  var borderColor = typeToColor[type] || 'border-blue-500';
  var backgroundColor = typeToBackgroundColor[type] || 'bg-blue-100';
  var positionClass = positionClasses[position] || 'bottom-right';
  var toastClasses = overwriteClass || "fixed ".concat(positionClass, " flex items-start p-4 mb-4 text-sm text-black ").concat(backgroundColor, " border-l-4 ").concat(borderColor, " shadow-md rounded-md");
  (0, _react.useEffect)(function () {
    if (autoHide > 0) {
      var timer = setTimeout(function () {
        if (onHide) onHide();
      }, autoHide);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [autoHide, onHide]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: toastClasses
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-grow"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "font-semibold"
  }, title), body && /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-1"
  }, body)), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onHide,
    className: "ml-4 text-black hover:text-gray-700 focus:outline-none",
    "aria-label": "Close"
  }, "\xD7"));
};
var _default = exports["default"] = Toast;