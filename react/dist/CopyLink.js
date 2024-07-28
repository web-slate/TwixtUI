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
// Tooltip component
var Tooltip = function Tooltip(_ref) {
  var message = _ref.message,
    tooltipClass = _ref.tooltipClass;
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: tooltipClass
  }, message);
};
var CopyLink = function CopyLink(_ref2) {
  var text = _ref2.text,
    url = _ref2.url,
    overwriteClass = _ref2.overwriteClass,
    overwriteTooltipClass = _ref2.overwriteTooltipClass;
  var _useState = (0, _react.useState)('Copy to Clipboard'),
    _useState2 = _slicedToArray(_useState, 2),
    tooltipMessage = _useState2[0],
    setTooltipMessage = _useState2[1];
  var linkRef = (0, _react.useRef)(null);
  var handleCopy = function handleCopy(e) {
    e.preventDefault();
    var link = linkRef.current.href;
    navigator.clipboard.writeText(link).then(function () {
      setTooltipMessage("Copied ".concat(link));
      setTimeout(function () {
        return setTooltipMessage('Copy to Clipboard');
      }, 2000);
    })["catch"](function (err) {
      console.error('Failed to copy: ', err);
    });
  };
  var linkClass = overwriteClass ? overwriteClass : 'text-blue-500 underline';
  var tooltipClass = overwriteTooltipClass ? overwriteTooltipClass : 'absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-white bg-black rounded text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100';
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: url,
    ref: linkRef,
    onClick: handleCopy,
    className: linkClass
  }, text), /*#__PURE__*/_react["default"].createElement(Tooltip, {
    message: tooltipMessage,
    tooltipClass: tooltipClass
  }));
};
var _default = exports["default"] = CopyLink;