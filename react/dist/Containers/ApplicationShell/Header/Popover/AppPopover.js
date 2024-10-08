"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icon = _interopRequireDefault(require("../../../../Icon"));
var _Button = _interopRequireDefault(require("../../../../CallsToAction/Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ApplicationShellHeaderAppsPopover() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var dropdownRef = (0, _react.useRef)(null);
  var toggleDropdown = function toggleDropdown() {
    setIsOpen(!isOpen);
  };
  var handleClickOutside = function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  (0, _react.useEffect)(function () {
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative",
    ref: dropdownRef
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    leftIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      size: "20",
      type: "apps",
      variant: "filled"
    }),
    hideLabel: true,
    onClick: toggleDropdown,
    overwriteClass: "bg-transparent"
  }), isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute right-0 z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600 rounded-xl",
    id: "apps-dropdown"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300"
  }, "Apps"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-3 gap-4 p-4"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    "fill-rule": "evenodd",
    d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
    "clip-rule": "evenodd"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-gray-900 dark:text-white"
  }, "Sales")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-gray-900 dark:text-white"
  }, "Users")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    "fill-rule": "evenodd",
    d: "M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z",
    "clip-rule": "evenodd"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-gray-900 dark:text-white"
  }, "Inbox")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    "fill-rule": "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",
    "clip-rule": "evenodd"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-gray-900 dark:text-white"
  }, "Profile")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    "fill-rule": "evenodd",
    d: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
    "clip-rule": "evenodd"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-gray-900 dark:text-white"
  }, "Settings")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    "fill-rule": "evenodd",
    d: "M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
    "clip-rule": "evenodd"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-gray-900 dark:text-white"
  }, "Products")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    "fill-rule": "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z",
    "clip-rule": "evenodd"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-gray-900 dark:text-white"
  }, "Pricing")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    "fill-rule": "evenodd",
    d: "M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z",
    "clip-rule": "evenodd"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-gray-900 dark:text-white"
  }, "Billing")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-sm text-gray-900 dark:text-white"
  }, "Logout")))));
}
var _default = exports["default"] = ApplicationShellHeaderAppsPopover;