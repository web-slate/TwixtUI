"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MultiSelectMenu = function MultiSelectMenu(_ref) {
  var _ref$button = _ref.button,
    button = _ref$button === void 0 ? 'button' : _ref$button,
    _ref$listLink = _ref.listLink,
    listLink = _ref$listLink === void 0 ? [] : _ref$listLink;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMainOpen = _useState2[0],
    setIsMainOpen = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    openSubMenus = _useState4[0],
    setOpenSubMenus = _useState4[1];
  var toggleMainDropdown = function toggleMainDropdown() {
    setIsMainOpen(!isMainOpen);
    setOpenSubMenus({});
  };
  var toggleSubDropdown = function toggleSubDropdown(index) {
    setOpenSubMenus(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, index, !prev[index]));
    });
  };
  var renderMenuItem = function renderMenuItem(key, value, index) {
    if (_typeof(value) === 'object') {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index,
        className: "relative"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        id: "doubleDropdownButton-".concat(index),
        onClick: function onClick() {
          return toggleSubDropdown(index);
        },
        type: "button",
        className: "flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-blue-200"
      }, key, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "w-2.5 h-2.5 ms-3 rtl:rotate-180",
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 6 10"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "m1 9 4-4-4-4"
      }))), openSubMenus[index] && /*#__PURE__*/_react["default"].createElement("div", {
        id: "doubleDropdown",
        className: "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow ml-6 px-4 dark:bg-gray-700 absolute top-0 left-full ml-2"
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "py-2 text-sm text-gray-700 dark:text-gray-200",
        "aria-labelledby": "doubleDropdownButton-".concat(index)
      }, Object.entries(value).map(function (_ref2, subIndex) {
        var _ref3 = _slicedToArray(_ref2, 2),
          subKey = _ref3[0],
          subValue = _ref3[1];
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: subIndex
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: "#",
          className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
        }, subValue));
      }))));
    } else {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: index
      }, /*#__PURE__*/_react["default"].createElement("a", {
        href: "#",
        className: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      }, value));
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    id: "multiLevelDropdownButton",
    onClick: toggleMainDropdown,
    className: "text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-200",
    type: "button"
  }, button, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-2.5 h-2.5 ms-3",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 10 6"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m1 1 4 4 4-4"
  }))), isMainOpen && /*#__PURE__*/_react["default"].createElement("div", {
    id: "multi-dropdown",
    className: "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow px-4 dark:bg-gray-700 absolute mt-2"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "py-2 text-sm text-gray-700 dark:text-gray-200",
    "aria-labelledby": "multiLevelDropdownButton"
  }, listLink.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: index
    }, Object.entries(item).map(function (_ref4, subIndex) {
      var _ref5 = _slicedToArray(_ref4, 2),
        key = _ref5[0],
        value = _ref5[1];
      return renderMenuItem(key, value, "".concat(index, "-").concat(subIndex));
    }));
  }))));
};
var _default = exports["default"] = MultiSelectMenu;