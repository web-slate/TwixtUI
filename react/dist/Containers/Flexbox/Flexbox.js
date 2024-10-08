"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function FlexBox(_ref) {
  var _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'row' : _ref$direction,
    _ref$grow = _ref.grow,
    grow = _ref$grow === void 0 ? false : _ref$grow,
    _ref$shrink = _ref.shrink,
    shrink = _ref$shrink === void 0 ? false : _ref$shrink,
    _ref$wrap = _ref.wrap,
    wrap = _ref$wrap === void 0 ? false : _ref$wrap,
    _ref$rowGap = _ref.rowGap,
    rowGap = _ref$rowGap === void 0 ? '0' : _ref$rowGap,
    _ref$columnGap = _ref.columnGap,
    columnGap = _ref$columnGap === void 0 ? '0' : _ref$columnGap,
    _ref$alignItems = _ref.alignItems,
    alignItems = _ref$alignItems === void 0 ? 'stretch' : _ref$alignItems,
    _ref$justifyContent = _ref.justifyContent,
    justifyContent = _ref$justifyContent === void 0 ? 'start' : _ref$justifyContent,
    _ref$alignSelf = _ref.alignSelf,
    alignSelf = _ref$alignSelf === void 0 ? 'auto' : _ref$alignSelf,
    children = _ref.children,
    _ref$appendClass = _ref.appendClass,
    appendClass = _ref$appendClass === void 0 ? '' : _ref$appendClass,
    _ref$overwriteClass = _ref.overwriteClass,
    overwriteClass = _ref$overwriteClass === void 0 ? '' : _ref$overwriteClass;
  var flexClasses = overwriteClass || "\n    flex\n    ".concat(direction === 'column' ? 'flex-col' : 'flex-row', "\n    ").concat(grow ? 'flex-grow' : '', "\n    ").concat(shrink ? 'flex-shrink' : '', "\n    ").concat(wrap ? 'flex-wrap' : '', "\n    ").concat(rowGap !== '0' ? "gap-y-".concat(rowGap) : '', "\n    ").concat(columnGap !== '0' ? "gap-x-".concat(columnGap) : '', "\n    ").concat(alignItems ? "items-".concat(alignItems) : '', "\n    ").concat(justifyContent ? "justify-".concat(justifyContent) : '', "\n    ").concat(alignSelf ? "self-".concat(alignSelf) : '', "\n    ").concat(appendClass, "\n    ").concat(overwriteClass, "\n  ").trim().replace(/\s+/g, ' ');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: flexClasses
  }, children);
}
var _default = exports["default"] = FlexBox;