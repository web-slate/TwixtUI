"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Radio = function Radio(_ref) {
  var _ref$id = _ref.id,
    id = _ref$id === void 0 ? '' : _ref$id,
    _ref$name = _ref.name,
    name = _ref$name === void 0 ? '' : _ref$name,
    label = _ref.label,
    _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? false : _ref$checked,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$radioColor = _ref.radioColor,
    radioColor = _ref$radioColor === void 0 ? 'text-blue-600' : _ref$radioColor,
    _ref$overwriteClass = _ref.overwriteClass,
    overwriteClass = _ref$overwriteClass === void 0 ? '' : _ref$overwriteClass,
    description = _ref.description,
    onChange = _ref.onChange,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'left' : _ref$position;
  var _useState = (0, _react.useState)(checked),
    _useState2 = _slicedToArray(_useState, 2),
    isChecked = _useState2[0],
    setIsChecked = _useState2[1];
  var handleChange = function handleChange(event) {
    if (disabled) return;
    setIsChecked(event.target.checked);
    if (onChange) {
      onChange(event);
    }
  };
  var inputRadioId = id || "twixt-radio-".concat(name === null || name === void 0 ? void 0 : name.toLowerCase());
  var radioClasses = "w-5 h-5 shrink-0 border-gray-200 rounded-full focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:focus:ring-offset-gray-800 ".concat(radioColor, " ").concat(overwriteClass, " ").concat(disabled ? 'opacity-50' : 'cursor-pointer');
  var labelClasses = "text-sm text-gray-600 dark:text-neutral-500 ".concat(disabled ? 'cursor-not-allowed' : 'cursor-pointer');
  var RadioInput = function RadioInput() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex items-center h-5"
    }, /*#__PURE__*/_react["default"].createElement("input", {
      id: inputRadioId,
      type: "radio",
      name: name,
      checked: isChecked,
      disabled: disabled,
      className: radioClasses,
      onChange: handleChange
    }));
  };
  var LabelContent = function LabelContent() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex flex-col"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "block text-sm font-semibold text-gray-800 dark:text-neutral-300"
    }, label), description && /*#__PURE__*/_react["default"].createElement("span", {
      className: labelClasses
    }, description));
  };
  var LeftLabelContent = function LeftLabelContent() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex-grow mr-2"
    }, /*#__PURE__*/_react["default"].createElement(LabelContent, null));
  };
  var RightLabelContent = function RightLabelContent() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex-grow ml-2"
    }, /*#__PURE__*/_react["default"].createElement(LabelContent, null));
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex items-center py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: inputRadioId,
    className: "flex items-center w-full cursor-pointer ".concat(position === 'right' ? 'flex-row-reverse justify-between' : '')
  }, position === 'right' && /*#__PURE__*/_react["default"].createElement(LeftLabelContent, null), /*#__PURE__*/_react["default"].createElement(RadioInput, null), position === 'left' && /*#__PURE__*/_react["default"].createElement(RightLabelContent, null)));
};
var _default = exports["default"] = Radio;