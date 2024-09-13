"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TwixtUserCard;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DEFAULT_BACKGROUND_URL = 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';
function TwixtUserCard(_ref) {
  var title = _ref.title,
    _ref$subTitle = _ref.subTitle,
    subTitle = _ref$subTitle === void 0 ? [] : _ref$subTitle,
    _ref$stats = _ref.stats,
    stats = _ref$stats === void 0 ? [] : _ref$stats,
    cardImageUrl = _ref.cardImageUrl,
    _ref$cardBackgroundUr = _ref.cardBackgroundUrl,
    cardBackgroundUrl = _ref$cardBackgroundUr === void 0 ? DEFAULT_BACKGROUND_URL : _ref$cardBackgroundUr,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "rounded-t-lg h-32 overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "object-cover object-top w-full",
    src: cardBackgroundUrl,
    alt: "card background"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mx-auto w-36 h-36 relative -mt-16 border-4 border-white rounded-full overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "object-cover object-center h-36",
    src: cardImageUrl
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center mt-2"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "font-semibold"
  }, title), subTitle.map(function (subTitleItem) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      className: "text-gray-500 text-sm"
    }, subTitleItem);
  })), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "py-4 mt-2 text-gray-700 flex items-center justify-around"
  }, stats.map(function (statsItem) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: "flex flex-col items-center justify-around"
    }, statsItem === null || statsItem === void 0 ? void 0 : statsItem.label, /*#__PURE__*/_react["default"].createElement("div", {
      className: "text-sm"
    }, statsItem === null || statsItem === void 0 ? void 0 : statsItem.value));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center"
  }, children));
}