"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Stats;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Stats(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white py-2 sm:py-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mx-auto max-w-7xl px-2 md:px-4 lg:px-6"
  }, /*#__PURE__*/_react["default"].createElement("dl", {
    className: "grid grid-cols-1 gap-x-4 gap-y-4 text-center lg:grid-cols-3"
  }, items.map(function (_ref2) {
    var label = _ref2.label,
      value = _ref2.value;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "mx-auto flex max-w-xs flex-col gap-y-2 md:gap-y-4"
    }, /*#__PURE__*/_react["default"].createElement("dt", {
      className: "text-base leading-7 text-gray-600"
    }, label), /*#__PURE__*/_react["default"].createElement("dd", {
      className: "order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
    }, value));
  }))));
}