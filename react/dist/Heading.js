"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Header;
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("TwixtUI/react");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function TwixtHeader(_ref) {
  var children = _ref.children;
  var headingContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
    //,
    //height: '100vh', // Optionally, set a height for vertical centering    
  };
  var centerHeadingStyle = {
    textAlign: 'center'
    // Add any additional styling you may need for your headings
  };
  return /*#__PURE__*/_react["default"].createElement("header", {
    className: "flex justify-between items-center bg-blue-300 p-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: headingContainerStyle
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    style: centerHeadingStyle
  }, "Heading 1"), /*#__PURE__*/_react["default"].createElement("h2", {
    style: centerHeadingStyle
  }, "Heading 2"), /*#__PURE__*/_react["default"].createElement("h3", {
    style: centerHeadingStyle
  }, "Heading 3"), /*#__PURE__*/_react["default"].createElement("h4", {
    style: centerHeadingStyle
  }, "Heading 4"), /*#__PURE__*/_react["default"].createElement("h5", {
    style: centerHeadingStyle
  }, "Heading 5"), /*#__PURE__*/_react["default"].createElement("h6", {
    style: centerHeadingStyle
  }, "Heading 6")));
}
function Header() {
  return /*#__PURE__*/_react["default"].createElement(TwixtHeader, null, /*#__PURE__*/_react["default"].createElement(_react2.ToolName, {
    name: "Twixt UI React App"
  }));
}