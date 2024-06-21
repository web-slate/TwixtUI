"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Toast = function Toast(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'header' : _ref$title,
    _ref$content = _ref.content,
    content = _ref$content === void 0 ? 'you clicked' : _ref$content;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showToast = _useState2[0],
    setShowToast = _useState2[1];
  var handleButtonClick = (0, _react.useCallback)(function () {
    setShowToast(true);
  }, []);
  var handleCloseClick = (0, _react.useCallback)(function () {
    setShowToast(false);
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, showToast && /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed top-0 left-1/3 p-3 z-50 mx-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden",
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between px-4 py-2 bg-blue-500 text-white"
  }, /*#__PURE__*/_react["default"].createElement("strong", {
    className: "me-auto mr-2"
  }, title), /*#__PURE__*/_react["default"].createElement("small", null, "11 mins ago"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "text-white",
    onClick: handleCloseClick,
    "aria-label": "Close"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-6 w-6",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 18L18 6M6 6l12 12"
  })))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4"
  }, content))), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
    id: "liveToastBtn",
    onClick: handleButtonClick
  }, "Show toast"));
};
var _default = exports["default"] = Toast;