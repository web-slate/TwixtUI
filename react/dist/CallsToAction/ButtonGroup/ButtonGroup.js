"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ButtonGroup(_ref) {
  var children = _ref.children;
  // Iterate over children and add additional props
  var enhancedChildren = _react["default"].Children.map(children, function (child) {
    if ( /*#__PURE__*/_react["default"].isValidElement(child)) {
      // Clone the child element and add or override props
      return /*#__PURE__*/_react["default"].cloneElement(child, {
        background: '',
        color: '',
        overwriteClass: 'py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800'
      });
    }
    return child; // If the child is not a valid React element, return it as-is
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "inline-flex rounded-lg shadow-sm"
  }, enhancedChildren);
}
var _default = exports["default"] = ButtonGroup;