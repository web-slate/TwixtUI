"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _SearchBar = _interopRequireDefault(require("./SearchBar"));
var _UserPopover = _interopRequireDefault(require("./Popover/UserPopover"));
var _AppPopover = _interopRequireDefault(require("./Popover/AppPopover"));
var _NotificationPopover = _interopRequireDefault(require("./Popover/NotificationPopover"));
var _BoxItem = _interopRequireDefault(require("../../BoxItem"));
var _FlexBox = _interopRequireDefault(require("../../FlexBox"));
var _ShellPopover = _interopRequireDefault(require("./ShellPopover"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ApplicationShellHeader(_ref) {
  var left = _ref.left,
    center = _ref.center,
    right = _ref.right;
  var rightMenuBar = (right === null || right === void 0 ? void 0 : right.menuBar) || [];
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50"
  }, /*#__PURE__*/_react["default"].createElement(_BoxItem["default"], {
    className: "flex flex-wrap justify-between items-center"
  }, /*#__PURE__*/_react["default"].createElement(_FlexBox["default"], {
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_BoxItem["default"], {
    overwriteClass: "min-w-[240px]"
  }, left), center), /*#__PURE__*/_react["default"].createElement(_FlexBox["default"], {
    alignItems: "center",
    rowGap: "6",
    columnGap: "6",
    appendClass: "lg:order-2"
  }, rightMenuBar.map(function (menuItem) {
    return /*#__PURE__*/_react["default"].createElement(_ShellPopover["default"], {
      key: menuItem.id,
      title: menuItem.title,
      hideTitle: menuItem.hideTitle,
      content: menuItem.content,
      popoverContent: menuItem.popoverContent
    });
  }))));
}
var _default = exports["default"] = ApplicationShellHeader;