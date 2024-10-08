"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Header = _interopRequireDefault(require("./Header/Header"));
var _SideBar = _interopRequireDefault(require("./SideBar"));
var _MainBody = _interopRequireDefault(require("./MainBody"));
var _StackBox = _interopRequireDefault(require("../StackBox"));
var _BoxItem = _interopRequireDefault(require("../BoxItem"));
var _FlexBox = _interopRequireDefault(require("../FlexBox"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ApplicationShell(_ref) {
  var _ref$header = _ref.header,
    header = _ref$header === void 0 ? {} : _ref$header,
    _ref$sidebar = _ref.sidebar,
    sidebar = _ref$sidebar === void 0 ? {} : _ref$sidebar,
    _ref$body = _ref.body,
    body = _ref$body === void 0 ? {} : _ref$body;
  var headerLeft = header.left,
    headerCenter = header.center,
    headerRight = header.right;
  var expandedNode = sidebar.expandedNode,
    collpasedNode = sidebar.collpasedNode,
    additionalBottomButtons = sidebar.additionalBottomButtons;
  var pageTitle = body.pageTitle,
    content = body.content;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isCollapsed = _useState2[0],
    setIsCollapsed = _useState2[1];
  var toggleSidebar = function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  };
  return /*#__PURE__*/_react["default"].createElement(_StackBox["default"], {
    overwriteClass: "vertical"
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    left: headerLeft,
    center: headerCenter,
    right: headerRight
  }), /*#__PURE__*/_react["default"].createElement(_FlexBox["default"], {
    direction: "row",
    grow: true,
    appendClass: "overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement(_SideBar["default"], {
    expandedNode: expandedNode,
    collpasedNode: collpasedNode,
    additionalBottomButtons: additionalBottomButtons,
    onToggle: toggleSidebar
  }), /*#__PURE__*/_react["default"].createElement(_MainBody["default"], {
    pageTitle: pageTitle,
    appendClass: "".concat(isCollapsed ? 'ml-16' : 'ml-64'),
    content: content
  })));
}
var _default = exports["default"] = ApplicationShell;