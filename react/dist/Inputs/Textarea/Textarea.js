"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icon = _interopRequireDefault(require("../../Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Textarea = function Textarea(_ref) {
  var label = _ref.label,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Enter text here..." : _ref$placeholder,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "default" : _ref$type,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "default" : _ref$size,
    _ref$autoHeight = _ref.autoHeight,
    autoHeight = _ref$autoHeight === void 0 ? false : _ref$autoHeight,
    _ref$helpMessage = _ref.helpMessage,
    helpMessage = _ref$helpMessage === void 0 ? "" : _ref$helpMessage,
    _ref$message = _ref.message,
    message = _ref$message === void 0 ? "" : _ref$message,
    _ref$showWordCount = _ref.showWordCount,
    showWordCount = _ref$showWordCount === void 0 ? false : _ref$showWordCount,
    _ref$validationState = _ref.validationState,
    validationState = _ref$validationState === void 0 ? null : _ref$validationState,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? "" : _ref$value,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
    _ref$leftTop = _ref.leftTop,
    leftTop = _ref$leftTop === void 0 ? null : _ref$leftTop,
    _ref$leftBottom = _ref.leftBottom,
    leftBottom = _ref$leftBottom === void 0 ? null : _ref$leftBottom,
    _ref$rightTop = _ref.rightTop,
    rightTop = _ref$rightTop === void 0 ? null : _ref$rightTop,
    _ref$rightBottom = _ref.rightBottom,
    rightBottom = _ref$rightBottom === void 0 ? null : _ref$rightBottom,
    _ref$minRows = _ref.minRows,
    minRows = _ref$minRows === void 0 ? 3 : _ref$minRows,
    _ref$cols = _ref.cols,
    cols = _ref$cols === void 0 ? 30 : _ref$cols;
  var _useState = (0, _react.useState)(value),
    _useState2 = _slicedToArray(_useState, 2),
    text = _useState2[0],
    setText = _useState2[1];
  var textareaRef = (0, _react.useRef)(null);
  var handleChange = function handleChange(e) {
    setText(e.target.value);
  };
  (0, _react.useEffect)(function () {
    if (autoHeight && textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset the height to auto to allow shrinking
      textareaRef.current.style.height = "".concat(textareaRef.current.scrollHeight, "px"); // Set the new height based on scrollHeight
    }
  }, [text, autoHeight]);
  var sizeClasses = {
    small: "py-2 px-3",
    "default": "py-3 px-4",
    large: "py-4 px-5"
  };
  var baseClasses = "block w-full rounded-lg text-sm border ".concat(validationState === "error" ? "border-red-500 focus:border-red-500 focus:ring-red-500" : validationState === "success" ? "border-teal-500 focus:border-teal-500 focus:ring-teal-500" : validationState === "warning" ? "border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500" : "border-gray-200 focus:border-blue-500 focus:ring-blue-500", " ").concat(disabled ? "opacity-50 pointer-events-none" : "", " ").concat(readOnly ? "cursor-not-allowed" : "", " ").concat(sizeClasses[size], " ").concat(autoHeight ? "resize-none overflow-hidden" : "resize");
  var underlineClasses = type === "underline" ? "bg-transparent border-t-transparent border-b-2 border-x-transparent focus:border-b-blue-500 focus:ring-0" : "";

  // Determine icon for validation state (rightTop icon)
  var getValidationIcon = function getValidationIcon() {
    switch (validationState) {
      case 'error':
        return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          type: "error",
          overwriteClass: "text-red-500 text-lg",
          variant: "filled",
          size: 24
        });
      case 'success':
        return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          type: "success",
          variant: "filled",
          size: 24
        });
      case 'warning':
        return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          type: "warning",
          overwriteClass: "text-yellow-500 text-lg",
          variant: "filled",
          size: 24
        });
      default:
        return rightTop;
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative max-w-sm space-y-2"
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: "block text-sm font-medium mb-2 dark:text-white"
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, leftTop && /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute left-2 top-2"
  }, leftTop), leftBottom && /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute left-2 bottom-2"
  }, leftBottom), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute right-2 top-2"
  }, getValidationIcon()), rightBottom && /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute right-2 bottom-2"
  }, rightBottom), /*#__PURE__*/_react["default"].createElement("textarea", {
    ref: textareaRef,
    className: "".concat(baseClasses, " ").concat(underlineClasses),
    placeholder: placeholder,
    value: text,
    onChange: handleChange,
    disabled: disabled,
    readOnly: readOnly,
    rows: minRows,
    cols: cols // Use the cols prop to determine width
    ,
    style: {
      minHeight: "".concat(minRows * 1.5, "em"),
      width: cols ? 'auto' : '100%'
    } // Ensure default width if cols is null
  })), helpMessage && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xs text-gray-500 dark:text-neutral-500"
  }, helpMessage), showWordCount && /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm text-gray-500 dark:text-neutral-500"
  }, text.length, " characters"), validationState === "error" && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-red-600 mt-2"
  }, message), validationState === "success" && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-teal-600 mt-2"
  }, message));
};
var _default = exports["default"] = Textarea;