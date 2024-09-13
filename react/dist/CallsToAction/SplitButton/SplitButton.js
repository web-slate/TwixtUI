"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup"));
var _Button = _interopRequireDefault(require("../Button"));
var _Icon = _interopRequireDefault(require("../../Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function SplitButton(_ref) {
  var _ref$initialLabel = _ref.initialLabel,
    initialLabel = _ref$initialLabel === void 0 ? 'Select Action' : _ref$initialLabel,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedOption = _useState4[0],
    setSelectedOption = _useState4[1];
  var handleMainAction = function handleMainAction() {
    if (selectedOption && selectedOption.onClick) {
      selectedOption.onClick();
    }
  };
  var handleDropdownToggle = function handleDropdownToggle() {
    setIsOpen(!isOpen);
  };
  var handleOptionClick = function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative inline-block"
  }, /*#__PURE__*/_react["default"].createElement(_ButtonGroup["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: handleMainAction,
    label: selectedOption ? selectedOption.label : initialLabel
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: handleDropdownToggle,
    hideLabel: true,
    rightIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      type: "chevronDown"
    })
  })), isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
  }, options.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      key: index,
      onClick: function onClick() {
        return handleOptionClick(option);
      },
      label: option.label,
      background: "bg-white",
      color: "text-gray-700",
      overwriteClass: "w-full text-left px-4 py-2 hover:bg-gray-100"
    });
  })));
}
var _default = exports["default"] = SplitButton;