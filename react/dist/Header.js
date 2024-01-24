"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("TwixtUI/react");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TwixtHeader(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: "flex justify-between items-center bg-blue-300 p-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "bg-slate-800 text-slate-100 rounded-full pr-2"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6"
  }, /*#__PURE__*/_react["default"].createElement("path", _defineProperty(_defineProperty({
    strokeLinecap: "round"
  }, "strokeLinecap", "round"), "d", "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5")))), children), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, "Right"));
}
function Header() {
  return /*#__PURE__*/_react["default"].createElement(TwixtHeader, null, /*#__PURE__*/_react["default"].createElement(_react2.ToolName, {
    name: "Twixt UI React App"
  }));
}