"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Popover = _interopRequireDefault(require("../../Popover"));
var _BoxItem = _interopRequireDefault(require("../../../Containers/BoxItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ApplicationShellPopover(_ref) {
  var title = _ref.title,
    hideTitle = _ref.hideTitle,
    content = _ref.content,
    popoverContent = _ref.popoverContent,
    _ref$popoverPosition = _ref.popoverPosition,
    popoverPosition = _ref$popoverPosition === void 0 ? 'bottom-right' : _ref$popoverPosition;
  return /*#__PURE__*/_react["default"].createElement(_BoxItem["default"], {
    overwriteClass: "relative inline-block text-left"
  }, /*#__PURE__*/_react["default"].createElement(_Popover["default"], {
    overwriteContentClass: "w-80 list-none bg-white rounded shadow-lg rounded-xl",
    title: title,
    hideTitle: hideTitle,
    hideOnBlur: false,
    content: popoverContent,
    position: popoverPosition
  }, content));
}
var _default = exports["default"] = ApplicationShellPopover;