"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ListContext = require("./ListContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var List = function List(_ref) {
  var _ref$hasDivider = _ref.hasDivider,
    hasDivider = _ref$hasDivider === void 0 ? false : _ref$hasDivider,
    _ref$overwriteItemCla = _ref.overwriteItemClass,
    overwriteItemClass = _ref$overwriteItemCla === void 0 ? '' : _ref$overwriteItemCla,
    _ref$header = _ref.header,
    header = _ref$header === void 0 ? null : _ref$header,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_ListContext.ListContext.Provider, {
    value: {
      hasDivider: hasDivider,
      overwriteItemClass: overwriteItemClass
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "list-container"
  }, header && /*#__PURE__*/_react["default"].createElement("div", {
    className: "list-header mb-2 font-bold"
  }, header), /*#__PURE__*/_react["default"].createElement("div", {
    className: "list-items ".concat(hasDivider ? 'divide-y divide-gray-200' : '')
  }, children)));
};
var _default = exports["default"] = List;