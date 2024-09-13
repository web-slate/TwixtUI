"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CodeEditor;
var _react = _interopRequireWildcard(require("react"));
var _reactCodemirror = _interopRequireDefault(require("@uiw/react-codemirror"));
var _langJavascript = require("@codemirror/lang-javascript");
var _langPython = require("@codemirror/lang-python");
var _langHtml = require("@codemirror/lang-html");
var _langCss = require("@codemirror/lang-css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function CodeEditor(_ref) {
  var _ref$height = _ref.height,
    height = _ref$height === void 0 ? '400px' : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '600px' : _ref$width,
    _ref$value = _ref.value,
    initialValue = _ref$value === void 0 ? '' : _ref$value,
    _ref$language = _ref.language,
    initialLanguage = _ref$language === void 0 ? 'javascript' : _ref$language,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;
  var _useState = (0, _react.useState)(initialLanguage),
    _useState2 = _slicedToArray(_useState, 2),
    language = _useState2[0],
    setLanguage = _useState2[1];
  var _useState3 = (0, _react.useState)(initialValue),
    _useState4 = _slicedToArray(_useState3, 2),
    value = _useState4[0],
    setValue = _useState4[1];
  var languageExtensions = {
    javascript: (0, _langJavascript.javascript)(),
    python: (0, _langPython.python)(),
    html: (0, _langHtml.html)(),
    css: (0, _langCss.css)()
  };
  var onChangeCallback = (0, _react.useCallback)(function (val, viewUpdate) {
    setValue(val);
    onChange(val);
  }, [onChange]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative mx-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center space-x-4 mb-4"
  }, /*#__PURE__*/_react["default"].createElement("select", {
    value: language,
    onChange: function onChange(e) {
      return setLanguage(e.target.value);
    },
    className: "p-2 border rounded-md bg-white shadow-sm"
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: "javascript"
  }, "JavaScript"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "python"
  }, "Python"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "html"
  }, "HTML"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "css"
  }, "CSS"))), /*#__PURE__*/_react["default"].createElement(_reactCodemirror["default"], {
    value: value,
    height: height,
    extensions: [languageExtensions[language]],
    onChange: onChangeCallback,
    className: "border border-gray-300 rounded-md",
    style: {
      minWidth: '600px',
      width: width
    }
  }));
}