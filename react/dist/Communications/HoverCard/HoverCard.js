"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Link = _interopRequireDefault(require("../../CallsToAction/Link"));
var _Icon = _interopRequireDefault(require("../../Icon"));
var _StackBox = _interopRequireDefault(require("../../Containers/StackBox"));
var _BoxItem = _interopRequireDefault(require("../../Containers/BoxItem"));
var _dateFns = require("date-fns");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HoverCard = function HoverCard(_ref) {
  var children = _ref.children,
    cardDetails = _ref.cardDetails,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'right' : _ref$position;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  var timeoutRef = (0, _react.useRef)(null);
  var whenFormatedDate = cardDetails !== null && cardDetails !== void 0 && cardDetails.when ? (0, _dateFns.format)(new Date(cardDetails === null || cardDetails === void 0 ? void 0 : cardDetails.when), (cardDetails === null || cardDetails === void 0 ? void 0 : cardDetails.whenFormat) || 'PPP') : 'No date available';

  // Determine the classes based on the position prop
  var positionClasses = {
    top: 'bottom-full mb-3',
    bottom: 'top-full mt-3',
    left: 'right-full mr-3',
    right: 'left-full ml-3'
  };
  var handleMouseEnter = function handleMouseEnter() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(true);
  };
  var handleMouseLeave = function handleMouseLeave() {
    timeoutRef.current = setTimeout(function () {
      setIsVisible(false);
    }, 300); // Adjust this delay as needed (in milliseconds)
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative group inline-block",
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, children, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute ".concat(positionClasses[position] || positionClasses.right, " w-64 p-4 bg-white border border-gray-100 text-start rounded-xl shadow-md transition-opacity duration-300 z-10 ").concat(isVisible ? 'opacity-100 visible' : 'opacity-0 invisible')
  }, /*#__PURE__*/_react["default"].createElement(_StackBox["default"], {
    direction: "vertical"
  }, /*#__PURE__*/_react["default"].createElement(_Link["default"], {
    leftIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      type: "settings",
      variant: "outline"
    }),
    label: cardDetails.id,
    link: cardDetails.idLink,
    overwriteClass: "text-sm gap-1 mb-1"
  }), /*#__PURE__*/_react["default"].createElement(_Link["default"], {
    label: cardDetails.mainTitle,
    link: cardDetails.mainLink,
    overwriteClass: "text-base"
  }), (cardDetails === null || cardDetails === void 0 ? void 0 : cardDetails.whenLabel) != null && /*#__PURE__*/_react["default"].createElement(_BoxItem["default"], {
    overwriteClass: "text-xs text-gray-300 mb-2"
  }, cardDetails === null || cardDetails === void 0 ? void 0 : cardDetails.whenLabel, " ", whenFormatedDate)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center gap-x-3 mb-4"
  }, cardDetails.avatar != null && /*#__PURE__*/_react["default"].createElement("img", {
    className: "inline-block w-10 h-10 rounded-full",
    src: cardDetails.avatar,
    alt: "Avatar"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grow"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "font-semibold text-gray-800"
  }, cardDetails.name), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xs bg-gray-800 text-white py-0.5 px-1.5 rounded-md"
  }, cardDetails.role), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-500"
  }, cardDetails.title))), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "space-y-2"
  }, cardDetails.details.map(function (detail, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index,
      className: "flex items-center gap-x-2 text-sm text-gray-800"
    }, detail.icon, detail.content);
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4 flex justify-between items-center"
  }, /*#__PURE__*/_react["default"].createElement(_Link["default"], {
    label: cardDetails.viewLabel,
    link: cardDetails.mainLink,
    overwriteClass: "text-xs text-gray-500 hover:text-blue-600"
  }))));
};
var _default = exports["default"] = HoverCard;