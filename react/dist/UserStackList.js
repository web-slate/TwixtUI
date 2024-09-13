"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UserStackList;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function UserStackList(_ref) {
  var _ref$items = _ref.items,
    items = _ref$items === void 0 ? [] : _ref$items;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col md:flex-row gap-6 mx-10"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-1 md:border-r md:border-gray-200"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    role: "list",
    "class": "divide-gray-100"
  }, items.map(function (user) {
    var name = user.name,
      location = user.location,
      profession = user.profession,
      profileImageUrl = user.profileImageUrl,
      connectedTime = user.connectedTime;
    return /*#__PURE__*/_react["default"].createElement("li", {
      "class": "flex justify-between gap-x-6 py-5"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      "class": "flex min-w-0 gap-x-4"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      "class": "h-12 w-12 flex-none rounded-full bg-gray-50",
      src: profileImageUrl,
      alt: name
    }), /*#__PURE__*/_react["default"].createElement("div", {
      "class": "min-w-0 flex-auto"
    }, /*#__PURE__*/_react["default"].createElement("p", {
      "class": "text-sm font-semibold leading-6 text-gray-900"
    }, name), /*#__PURE__*/_react["default"].createElement("p", {
      "class": "mt-1 truncate text-xs leading-5 text-gray-500"
    }, location))), /*#__PURE__*/_react["default"].createElement("div", {
      "class": "hidden shrink-0 sm:flex sm:flex-col sm:items-end"
    }, /*#__PURE__*/_react["default"].createElement("p", {
      "class": "text-sm leading-6 text-gray-900"
    }, profession), /*#__PURE__*/_react["default"].createElement("p", {
      "class": "mt-1 text-xs leading-5 text-gray-500"
    }, "Connected  ", /*#__PURE__*/_react["default"].createElement("time", {
      datetime: "2023-01-23T13:23Z"
    }, connectedTime))));
  }))));
}