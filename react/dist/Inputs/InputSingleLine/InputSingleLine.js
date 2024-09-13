"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Icon = _interopRequireDefault(require("../../Icon"));
var _Button = _interopRequireDefault(require("../../CallsToAction/Button"));
var _excluded = ["fieldId", "label", "value", "onChange", "placeholder", "type", "disabled", "autoGrowWidth", "leftIcon", "rightIcon", "state", "helperText"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var stateIcons = {
  success: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "success",
    variant: "filled",
    size: 16
  }),
  error: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "error",
    overwriteClass: "text-red-500 text-lg",
    size: 16
  }),
  warning: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "warning",
    overwriteClass: "text-yellow-500 text-lg",
    size: 16
  }),
  info: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    type: "info",
    overwriteClass: "text-blue-500 text-lg",
    size: 16
  })
};
var InputSingleLine = function InputSingleLine(_ref) {
  var fieldId = _ref.fieldId,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    _onChange = _ref.onChange,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$autoGrowWidth = _ref.autoGrowWidth,
    autoGrowWidth = _ref$autoGrowWidth === void 0 ? false : _ref$autoGrowWidth,
    _ref$leftIcon = _ref.leftIcon,
    leftIcon = _ref$leftIcon === void 0 ? null : _ref$leftIcon,
    _ref$rightIcon = _ref.rightIcon,
    rightIcon = _ref$rightIcon === void 0 ? null : _ref$rightIcon,
    _ref$state = _ref.state,
    state = _ref$state === void 0 ? '' : _ref$state,
    _ref$helperText = _ref.helperText,
    helperText = _ref$helperText === void 0 ? '' : _ref$helperText,
    props = _objectWithoutProperties(_ref, _excluded);
  var inputRef = (0, _react.useRef)(null);
  var spanRef = (0, _react.useRef)(null);

  // Update the input width based on the span width
  (0, _react.useEffect)(function () {
    if (autoGrowWidth && spanRef.current && inputRef.current) {
      inputRef.current.style.width = "".concat(spanRef.current.offsetWidth, "px");
    }
  }, [value, autoGrowWidth]);
  var borderColor = {
    success: 'border-teal-500',
    error: 'border-red-500',
    warning: 'border-yellow-500',
    info: 'border-blue-500',
    "default": 'border-gray-500'
  };
  var backgroundColor = {
    success: 'bg-teal-50',
    error: 'bg-red-50',
    warning: 'bg-yellow-50',
    info: 'bg-blue-50',
    "default": 'bg-gray-50'
  };
  var inputPadding = "".concat(leftIcon ? 'pl-7' : 'pl-4', " pr-10");
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col"
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: fieldId,
    className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white ".concat(disabled && 'opacity-50 cursor-not-allowed')
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex items-center rounded-lg ".concat(backgroundColor[state] || backgroundColor["default"])
  }, leftIcon && /*#__PURE__*/_react["default"].createElement("span", {
    className: "absolute left-2 top-1/2 transform -translate-y-1/2 ".concat(disabled && 'opacity-50')
  }, leftIcon), /*#__PURE__*/_react["default"].createElement("input", _extends({
    type: type,
    id: fieldId,
    ref: inputRef,
    className: "bg-gray-50 border ".concat(borderColor[state] || borderColor["default"], " text-gray-900 text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 block ").concat(autoGrowWidth ? 'min-w-64 w-auto' : 'w-full', " p-2.5 ").concat(inputPadding, " ").concat(disabled ? 'opacity-50 cursor-not-allowed' : ''),
    placeholder: placeholder,
    value: value,
    disabled: disabled,
    onChange: function onChange(e) {
      _onChange(e);
    }
  }, props)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute right-2 flex justify-center space-x-1"
  }, value && !disabled && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    hideLabel: true,
    leftIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      type: "close",
      color: "black",
      size: 18,
      variant: "filled"
    }),
    overwriteClass: "bg-transparent text-gray-400 hover:text-gray-600",
    onClick: function onClick() {
      return _onChange({
        target: {
          value: ''
        }
      });
    }
  }), rightIcon && /*#__PURE__*/_react["default"].createElement("span", null, rightIcon), state && stateIcons[state] && /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(disabled && 'opacity-50')
  }, stateIcons[state])), autoGrowWidth && /*#__PURE__*/_react["default"].createElement("span", {
    ref: spanRef,
    className: "absolute invisible whitespace-pre",
    style: {
      visibility: 'hidden',
      whiteSpace: 'pre'
    }
  }, value || placeholder)), helperText && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xs ".concat(borderColor[state] || 'text-gray-600', " p-2 px-4 rounded-b-lg ").concat(backgroundColor[state] || backgroundColor["default"])
  }, helperText));
};
var _default = exports["default"] = InputSingleLine;