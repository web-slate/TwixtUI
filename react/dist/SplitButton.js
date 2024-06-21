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
var SplitButton = function SplitButton(_ref) {
  var primaryAction = _ref.primaryAction,
    _ref$secondaryActions = _ref.secondaryActions,
    secondaryActions = _ref$secondaryActions === void 0 ? [] : _ref$secondaryActions;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var handlePrimaryAction = function handlePrimaryAction() {
    primaryAction.onClick();
  };
  var handleSecondaryAction = function handleSecondaryAction(action) {
    action.onClick();
    setIsOpen(false); // Close the dropdown after selecting an option
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative inline-block text-left"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-500 text-white font-semibold hover:bg-blue-600",
    onClick: handlePrimaryAction
  }, primaryAction.text), secondaryActions.length > 0 && /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "ml-2 inline-flex justify-center w-8 h-full rounded-md border border-gray-300 shadow-sm px-2 bg-blue-500 text-white font-semibold hover:bg-blue-600",
    onClick: function onClick() {
      return setIsOpen(!isOpen);
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M10 14l6-6v1H4v-1l6 6zm0 2a1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-1 1 1 1 0 0 0 1 1z",
    clipRule: "evenodd"
  }))), isOpen && secondaryActions.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "origin-top-right absolute left-3 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
    role: "menu",
    "aria-orientation": "vertical",
    "aria-labelledby": "menu-button",
    tabIndex: "-1"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "py-1",
    role: "none"
  }, secondaryActions.map(function (action, index) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: index,
      className: "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
      onClick: function onClick() {
        return handleSecondaryAction(action);
      }
    }, action.text);
  }))));
};
var _default = exports["default"] = SplitButton;