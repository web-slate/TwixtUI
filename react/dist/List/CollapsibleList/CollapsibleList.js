"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icon = _interopRequireDefault(require("../../Icon"));
var _List = _interopRequireDefault(require("../List"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CollapsibleList = function CollapsibleList(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 200 : _ref$width,
    _ref$collpased = _ref.collpased,
    collpased = _ref$collpased === void 0 ? true : _ref$collpased,
    header = _ref.header,
    children = _ref.children,
    _ref$hasDivider = _ref.hasDivider,
    hasDivider = _ref$hasDivider === void 0 ? false : _ref$hasDivider;
  var _useState = (0, _react.useState)(collpased),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggleList = function toggleList() {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "transition-all duration-300 ease-in-out"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-center cursor-pointer p-4 bg-gray-100 rounded-md w-".concat(width, "\ntransition-all duration-300 ease-in-out"),
    onClick: toggleList,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "font-semibold text-lg"
  }, header), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: isOpen ? 'chevronDown' : 'chevronLeft',
    variant: "outline"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "transition-all duration-300 ease-in-out ".concat(isOpen ? "max-h-screen" : "max-h-0", " overflow-hidden")
  }, /*#__PURE__*/_react["default"].createElement(_List["default"], {
    hasDivider: hasDivider,
    overwriteItemClass: "px-4"
  }, children)));
};
var _default = exports["default"] = CollapsibleList;