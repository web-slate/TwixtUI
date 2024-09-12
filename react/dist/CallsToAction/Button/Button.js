"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TwixtButton;
var _react = _interopRequireDefault(require("react"));
var _Spinner = _interopRequireDefault(require("../../Communications/Spinner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TwixtButton(_ref) {
  var _ref$id = _ref.id,
    id = _ref$id === void 0 ? '' : _ref$id,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'button' : _ref$type,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    _ref$background = _ref.background,
    background = _ref$background === void 0 ? '' : _ref$background,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '' : _ref$color,
    children = _ref.children,
    _ref$leftIcon = _ref.leftIcon,
    leftIcon = _ref$leftIcon === void 0 ? null : _ref$leftIcon,
    _ref$rightIcon = _ref.rightIcon,
    rightIcon = _ref$rightIcon === void 0 ? null : _ref$rightIcon,
    label = _ref.label,
    _ref$hideLabel = _ref.hideLabel,
    hideLabel = _ref$hideLabel === void 0 ? false : _ref$hideLabel,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$showSpinner = _ref.showSpinner,
    showSpinner = _ref$showSpinner === void 0 ? false : _ref$showSpinner,
    onClick = _ref.onClick,
    overwriteClass = _ref.overwriteClass;
  // Handle background, text, hover, and focus colors based on the variant
  var getButtonStyles = function getButtonStyles() {
    switch (variant) {
      case 'primary':
        return {
          background: 'bg-blue-700',
          color: 'text-white',
          hover: 'hover:bg-blue-800',
          focus: 'focus:ring-blue-300',
          dark: 'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        };
      case 'secondary':
        return {
          background: 'bg-gray-700',
          color: 'text-white',
          hover: 'hover:bg-gray-800',
          focus: 'focus:ring-gray-300',
          dark: 'dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800'
        };
      default:
        return {
          background: 'bg-gray-200',
          color: 'text-black',
          hover: 'hover:bg-gray-300',
          focus: 'focus:ring-gray-300',
          dark: 'dark:bg-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600'
        };
    }
  };
  var _getButtonStyles = getButtonStyles(),
    bgClass = _getButtonStyles.background,
    textClass = _getButtonStyles.color,
    hoverClass = _getButtonStyles.hover,
    focusClass = _getButtonStyles.focus,
    darkClass = _getButtonStyles.dark;
  var buttonClasses = overwriteClass || "font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ".concat(bgClass, " ").concat(textClass, " ").concat(hoverClass, " ").concat(focusClass, " ").concat(darkClass);
  return /*#__PURE__*/_react["default"].createElement("button", {
    id: "twixt-button-".concat(id),
    type: type // 'submit', 'reset', or 'button'
    ,
    onClick: onClick,
    className: "flex items-center justify-center space-x-2 ".concat(background || bgClass, " ").concat(color || textClass, " ").concat(buttonClasses, " ").concat(disabled ? 'opacity-50 cursor-not-allowed' : ''),
    disabled: showSpinner || disabled
  }, children ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, leftIcon && /*#__PURE__*/_react["default"].createElement("span", null, leftIcon), !hideLabel && /*#__PURE__*/_react["default"].createElement("span", null, label), showSpinner && /*#__PURE__*/_react["default"].createElement(_Spinner["default"], {
    size: "sm",
    overwriteClass: "flex"
  }), rightIcon && /*#__PURE__*/_react["default"].createElement("span", null, rightIcon)));
}