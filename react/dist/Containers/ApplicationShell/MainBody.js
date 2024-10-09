"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _FlexBox = _interopRequireDefault(require("../FlexBox"));
var _Heading = _interopRequireDefault(require("../../Heading"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ApplicationShellBody(_ref) {
  var content = _ref.content,
    pageTitle = _ref.pageTitle,
    _ref$appendClass = _ref.appendClass,
    appendClass = _ref$appendClass === void 0 ? '' : _ref$appendClass;
  return /*#__PURE__*/_react["default"].createElement(_FlexBox["default"], {
    grow: true,
    overwriteClass: "mt-[3.5rem] transition-all duration-300 ".concat(appendClass)
  }, /*#__PURE__*/_react["default"].createElement("main", {
    className: "flex-grow p-4 overflow-y-auto"
  }, pageTitle != '' && /*#__PURE__*/_react["default"].createElement(_Heading["default"], {
    type: "h2"
  }, pageTitle), content));
}
var _default = exports["default"] = ApplicationShellBody;