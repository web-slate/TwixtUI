"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Link = _interopRequireDefault(require("../../CallsToAction/Link"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Tabs = function Tabs(_ref) {
  var items = _ref.items,
    _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? "horizontal" : _ref$direction,
    _ref$defaultActiveTab = _ref.defaultActiveTab,
    defaultActiveTab = _ref$defaultActiveTab === void 0 ? 0 : _ref$defaultActiveTab,
    _ref$tabType = _ref.tabType,
    tabType = _ref$tabType === void 0 ? "underline" : _ref$tabType;
  var _useState = (0, _react.useState)(defaultActiveTab),
    _useState2 = _slicedToArray(_useState, 2),
    activeTab = _useState2[0],
    setActiveTab = _useState2[1];
  (0, _react.useEffect)(function () {
    setActiveTab(defaultActiveTab);
  }, [defaultActiveTab]);
  var renderIcon = function renderIcon(Icon) {
    return Icon ? /*#__PURE__*/_react["default"].createElement(Icon, {
      className: "shrink-0 size-4"
    }) : null;
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "tabs-component ".concat(direction === 'vertical' ? 'flex flex-wrap' : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(direction === 'vertical' ? 'border-e mr-2' : 'border-b', " border-gray-200 dark:border-neutral-700")
  }, /*#__PURE__*/_react["default"].createElement("nav", {
    className: "flex ".concat(direction === 'vertical' ? 'flex-col space-y-4 pr-2' : 'gap-x-4', " "),
    "aria-label": "Tabs",
    role: "tablist",
    "aria-orientation": direction
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_Link["default"], {
      key: index,
      label: item.label,
      leftIcon: renderIcon(item.leftIcon),
      rightIcon: renderIcon(item.rightIcon),
      appendClass: "p-2 ".concat(activeTab === index ? 'border-b border-b-blue-500' : ''),
      onClick: function onClick(e) {
        e.preventDefault();
        setActiveTab(index);
      }
    });
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-3"
  }, items.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      id: "tab-panel-".concat(index),
      role: "tabpanel",
      className: activeTab === index ? '' : 'hidden',
      "aria-labelledby": "tab-item-".concat(index)
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: "text-gray-500 dark:text-neutral-400"
    }, item.content));
  })));
};
var _default = exports["default"] = Tabs;