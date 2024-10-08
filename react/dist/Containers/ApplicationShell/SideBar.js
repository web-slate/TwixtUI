"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("../../CallsToAction/Button"));
var _FlexBox = _interopRequireDefault(require("../FlexBox"));
var _bs = require("react-icons/bs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ApplicationShellSideBar(_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 'w-64' : _ref$width,
    _ref$collapsedWidth = _ref.collapsedWidth,
    collapsedWidth = _ref$collapsedWidth === void 0 ? 'w-16' : _ref$collapsedWidth,
    _ref$collapsed = _ref.collapsed,
    collapsed = _ref$collapsed === void 0 ? false : _ref$collapsed,
    _ref$expandedNode = _ref.expandedNode,
    expandedNode = _ref$expandedNode === void 0 ? null : _ref$expandedNode,
    _ref$collpasedNode = _ref.collpasedNode,
    collpasedNode = _ref$collpasedNode === void 0 ? null : _ref$collpasedNode,
    _ref$additionalBottom = _ref.additionalBottomButtons,
    additionalBottomButtons = _ref$additionalBottom === void 0 ? null : _ref$additionalBottom,
    onToggle = _ref.onToggle;
  var _useState = (0, _react.useState)(collapsed),
    _useState2 = _slicedToArray(_useState, 2),
    isCollapsed = _useState2[0],
    setIsCollapsed = _useState2[1];
  var toggleSidebar = function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
    onToggle(!isCollapsed);
  };
  return /*#__PURE__*/_react["default"].createElement(_FlexBox["default"], null, /*#__PURE__*/_react["default"].createElement("aside", {
    className: "group fixed top-0 left-0 z-40 h-screen pt-14 transition-all duration-300 bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ".concat(isCollapsed ? collapsedWidth : width),
    "aria-label": "Sidenav",
    id: "drawer-navigation"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800"
  }, !isCollapsed ? expandedNode : collpasedNode), collpasedNode != null && /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full flex ".concat(isCollapsed ? 'bg-transparent' : 'bg-white dark:bg-gray-800', " z-20")
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    leftIcon: /*#__PURE__*/_react["default"].createElement(_bs.BsLayoutSidebar, {
      size: "20"
    }),
    hideLabel: true,
    overwriteClass: "bg-transparent hover:bg-gray-100 p-2",
    onClick: toggleSidebar
  }), !isCollapsed && additionalBottomButtons)));
}
var _default = exports["default"] = ApplicationShellSideBar;