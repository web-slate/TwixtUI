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
var HIDE_AFTER_SECONDS = 250;
var INCREASE_INTERVAL = 1000;
var PageProgressLine = function PageProgressLine(_ref) {
  var _ref$loadingColor = _ref.loadingColor,
    loadingColor = _ref$loadingColor === void 0 ? '#3490dc' : _ref$loadingColor,
    _ref$completionColor = _ref.completionColor,
    completionColor = _ref$completionColor === void 0 ? '#38c172' : _ref$completionColor;
  var _useState = (0, _react.useState)(10),
    _useState2 = _slicedToArray(_useState, 2),
    width = _useState2[0],
    setWidth = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isVisible = _useState4[0],
    setIsVisible = _useState4[1];
  (0, _react.useEffect)(function () {
    var interval = setInterval(function () {
      setWidth(function (prevWidth) {
        var newWidth = prevWidth + 10;
        var reachedMaximum = newWidth >= 100;
        if (reachedMaximum) {
          clearInterval(interval);
          // Set timeout to hide the progress bar after `HIDE_AFTER_SECONDS` micro seconds
          setTimeout(function () {
            return setIsVisible(false);
          }, HIDE_AFTER_SECONDS);
        }
        return newWidth;
      });
    }, INCREASE_INTERVAL); // Adjust time for progression

    return function () {
      return clearInterval(interval);
    };
  }, []);
  var getBackgroundColor = function getBackgroundColor(width) {
    if (width < 100) {
      return loadingColor; // Softer blue Color while loading
    }
    return completionColor; // Softer green Color when finished
  };
  if (!isVisible) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "progress-loader fixed top-0 left-0 h-1",
    style: {
      width: "".concat(width, "%"),
      backgroundColor: getBackgroundColor(width)
    }
  });
};
var _default = exports["default"] = PageProgressLine;