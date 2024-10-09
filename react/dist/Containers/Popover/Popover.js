"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icon = _interopRequireDefault(require("../../Icon"));
var _Button = _interopRequireDefault(require("../../CallsToAction/Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Popover = function Popover(_ref) {
  var id = _ref.id,
    _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show,
    _ref$title = _ref.title,
    title = _ref$title === void 0 ? 'title' : _ref$title,
    _ref$content = _ref.content,
    content = _ref$content === void 0 ? 'content' : _ref$content,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'top-center' : _ref$position,
    children = _ref.children,
    _ref$hideTitle = _ref.hideTitle,
    hideTitle = _ref$hideTitle === void 0 ? false : _ref$hideTitle,
    _ref$scrollable = _ref.scrollable,
    scrollable = _ref$scrollable === void 0 ? false : _ref$scrollable,
    _ref$hideOnBlur = _ref.hideOnBlur,
    hideOnBlur = _ref$hideOnBlur === void 0 ? true : _ref$hideOnBlur,
    _ref$closeIcon = _ref.closeIcon,
    closeIcon = _ref$closeIcon === void 0 ? true : _ref$closeIcon,
    _ref$onClose = _ref.onClose,
    onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
    _ref$overwriteContent = _ref.overwriteContentClass,
    overwriteContentClass = _ref$overwriteContent === void 0 ? '' : _ref$overwriteContent;
  var _useState = (0, _react.useState)(show),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var popoverRef = (0, _react.useRef)(null);
  var triggerRef = (0, _react.useRef)(null);
  var handleToggle = function handleToggle() {
    setIsOpen(!isOpen);
  };
  var handleClickOutside = function handleClickOutside(event) {
    if (popoverRef.current && !popoverRef.current.contains(event.target) && triggerRef.current && !triggerRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  (0, _react.useEffect)(function () {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  var handleChildrenBlur = function handleChildrenBlur() {
    if (hideOnBlur === true) {
      setIsOpen(false);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative inline-block text-left"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: triggerRef,
    onClick: handleToggle,
    onBlur: handleChildrenBlur
  }, children), isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    ref: popoverRef,
    role: "tooltip",
    className: "absolute z-10 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-100 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 ".concat(positionClass(position), " w-auto min-w-[200px]")
  }, !hideTitle && title != '' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "font-semibold text-gray-900 dark:text-white flex-1"
  }, title), closeIcon && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    hideLabel: true,
    leftIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      type: "close",
      color: "black",
      size: 18,
      variant: "filled"
    }),
    overwriteClass: "bg-transparent text-gray-400 hover:text-gray-600",
    onClick: function onClick() {
      setIsOpen(false);
      onClose();
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(scrollable ? 'overflow-y-auto max-h-[300px]' : '', " ").concat(overwriteContentClass ? overwriteContentClass : 'px-3 py-2')
  }, content), /*#__PURE__*/_react["default"].createElement("div", {
    "data-popper-arrow": true
  })));
};
var positionClass = function positionClass(position) {
  var _position$split = position.split('-'),
    _position$split2 = _slicedToArray(_position$split, 2),
    vertical = _position$split2[0],
    horizontal = _position$split2[1];
  var classes = [];
  switch (vertical) {
    case 'top':
      classes.push('bottom-full mb-2');
      break;
    case 'bottom':
      classes.push('top-full mt-2');
      break;
    case 'left':
      classes.push('right-full mr-2');
      break;
    case 'right':
      classes.push('left-full ml-2');
      break;
  }
  switch (horizontal) {
    case 'left':
      classes.push('left-0');
      break;
    case 'center':
      classes.push('left-1/2 transform -translate-x-1/2');
      break;
    case 'right':
      classes.push('right-0');
      break;
    case 'top':
      classes.push('top-0');
      break;
    case 'middle':
      classes.push('top-1/2 transform -translate-y-1/2');
      break;
    case 'bottom':
      classes.push('bottom-0');
      break;
  }
  return classes.join(' ');
};
var _default = exports["default"] = Popover;