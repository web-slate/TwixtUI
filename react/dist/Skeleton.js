"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentPane = ContentPane;
exports.LeftSideBar = LeftSideBar;
exports.RightSideBar = RightSideBar;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var noop = function noop() {};
function LeftSideBar(_ref) {
  var overWriteClasses = _ref.overWriteClasses,
    children = _ref.children,
    _ref$openDrawer = _ref.openDrawer,
    openDrawer = _ref$openDrawer === void 0 ? false : _ref$openDrawer,
    _ref$onBlurEvent = _ref.onBlurEvent,
    onBlurEvent = _ref$onBlurEvent === void 0 ? noop : _ref$onBlurEvent;
  var _useState = (0, _react.useState)(openDrawer),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var leftSidebarClass = overWriteClasses ? overWriteClasses : 'flex w-72 h-full bg-pink-500';
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: leftSidebarClass
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full flex mx-auto px-6 py-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 bg-black bg-opacity-50 z-20",
    onClick: function onClick() {
      onBlurEvent();
      setIsOpen(false);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-y-0 left-0 transform bg-blue-800 text-white w-64 p-6 space-y-6 z-30 transition-transform duration-300 ".concat(isOpen ? 'translate-x-0' : '-translate-x-full')
  }, children), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1 p-10 text-2xl font-bold"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    },
    className: "mb-4"
  }, isOpen ? 'Close Menu' : 'Open Menu')))));
}
function RightSideBar(_ref2) {
  var overWriteClasses = _ref2.overWriteClasses,
    children = _ref2.children;
  var rightSidebarClass = overWriteClasses ? overWriteClasses : 'flex w-72 h-full bg-yellow-400';
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: rightSidebarClass
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full flex mx-auto px-6 py-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900"
  }, children)));
}
function ContentPane(_ref3) {
  var overWriteClasses = _ref3.overWriteClasses,
    children = _ref3.children;
  var contentPaneClass = overWriteClasses ? overWriteClasses : 'flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14';
  return /*#__PURE__*/_react["default"].createElement("main", {
    className: contentPaneClass
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex w-full mx-auto px-6 py-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed"
  }, children)));
}