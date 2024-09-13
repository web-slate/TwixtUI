"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ToolTip = function ToolTip(_ref) {
  var children = _ref.children,
    content = _ref.content,
    position = _ref.position,
    show = _ref.show;
  if (children == null) {
    return null;
  }
  var wrapperClassNames = 'absolute transform items-center';
  var arrowClassNames = 'w-3 h-3 bg-gray-700 rotate-45 transform';
  var contentClassNames = 'py-1 px-3 text-sm text-white bg-gray-700 rounded whitespace-nowrap';

  // Set wrapper and arrow position based on the position prop
  switch (position) {
    case 'top':
      wrapperClassNames += ' bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:flex group-focus:flex flex-col';
      arrowClassNames += ' -translate-y-1/2';
      break;
    case 'bottom':
      wrapperClassNames += ' top-full left-1/2 -translate-x-1/2 mt-2 hidden group-hover:flex group-focus:flex flex-col';
      arrowClassNames += ' translate-y-1/2';
      break;
    case 'left':
      wrapperClassNames += ' right-full top-1/2 -translate-y-1/2 mr-2 hidden group-hover:flex group-focus:flex';
      arrowClassNames += ' -translate-x-1/2';
      break;
    case 'right':
      wrapperClassNames += ' left-full top-1/2 -translate-y-1/2 ml-2 hidden group-hover:flex group-focus:flex';
      arrowClassNames += ' translate-x-1/2';
      break;
    default:
      break;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative group"
  }, children, show && /*#__PURE__*/_react["default"].createElement("div", {
    className: wrapperClassNames
  }, ['right', 'bottom'].includes(position) && /*#__PURE__*/_react["default"].createElement("div", {
    className: arrowClassNames
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: contentClassNames
  }, content), ['left', 'top'].includes(position) && /*#__PURE__*/_react["default"].createElement("div", {
    className: arrowClassNames
  })));
};
var _default = exports["default"] = ToolTip;