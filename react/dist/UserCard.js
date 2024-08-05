"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TwixtUserCard;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TwixtUserCard(_ref) {
  var title = _ref.title,
    _ref$subTitleList = _ref.subTitleList,
    subTitleList = _ref$subTitleList === void 0 ? [] : _ref$subTitleList,
    _ref$stats = _ref.stats,
    stats = _ref$stats === void 0 ? [] : _ref$stats,
    cardImageUrl = _ref.cardImageUrl,
    cardBackgroundUrl = _ref.cardBackgroundUrl;
  return /*#__PURE__*/_react["default"].createElement("div", {
    "class": "flex flex-col justify-center items-center h-[100vh]"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "relative flex flex-col items-center rounded-10 border-1 border-gray-200 w-400 mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "relative flex h-32 w-full justify-center rounded-xl bg-cover"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: cardBackgroundUrl,
    "class": "absolute flex h-32 w-full justify-center rounded-xl bg-cover"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "absolute bottom-12 flex items-center justify-center rounded-full border-4 border-white bg-pink-400 border-white-500 w-8/12"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    "class": "h-7 w-7 rounded-full",
    src: cardImageUrl,
    alt: title
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "mt-16 flex flex-col items-center"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    "class": "text-xl mt-4 font-bold text-navy-700 dark:text-white"
  }, title), subTitleList.map(function (subTitleItem) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      "class": "text-base font-normal text-gray-600"
    }, subTitleItem);
  })), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "mt-6 mb-3 flex gap-14 md:!gap-14"
  }, stats.map(function (statsItem) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      "class": "flex flex-col items-center justify-center"
    }, /*#__PURE__*/_react["default"].createElement("p", {
      "class": "text-sm font-bold text-navy-100 text-black"
    }, statsItem === null || statsItem === void 0 ? void 0 : statsItem.label), /*#__PURE__*/_react["default"].createElement("p", {
      "class": "text-sm font-normal text-gray-600"
    }, statsItem === null || statsItem === void 0 ? void 0 : statsItem.value));
  }))));
}