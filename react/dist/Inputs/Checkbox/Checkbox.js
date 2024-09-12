"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TwixtCheckbox;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function TwixtCheckbox(_ref) {
  var _ref$checked = _ref.checked,
    checked = _ref$checked === void 0 ? false : _ref$checked,
    label = _ref.label,
    description = _ref.description,
    children = _ref.children,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'left' : _ref$position,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$indeterminate = _ref.indeterminate,
    indeterminate = _ref$indeterminate === void 0 ? false : _ref$indeterminate,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$overwriteClass = _ref.overwriteClass,
    overwriteClass = _ref$overwriteClass === void 0 ? '' : _ref$overwriteClass,
    _ref$checkboxColor = _ref.checkboxColor,
    checkboxColor = _ref$checkboxColor === void 0 ? 'text-blue-600' : _ref$checkboxColor;
  var _useState = (0, _react.useState)(checked),
    _useState2 = _slicedToArray(_useState, 2),
    isChecked = _useState2[0],
    setIsChecked = _useState2[1];
  (0, _react.useEffect)(function () {
    setIsChecked(checked);
  }, [checked]);
  var handleCheckboxChange = function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
    onChange(event.target.checked);
  };

  // Apply indeterminate state if needed
  var checkboxRef = _react["default"].useRef(null);
  (0, _react.useEffect)(function () {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  // Define default classes and apply the overwriteClass
  var defaultClasses = "form-checkbox h-5 w-5 mt-0.5 border-gray-200 rounded ".concat(checkboxColor, " focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed \n    dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 ").concat(overwriteClass);
  return /*#__PURE__*/_react["default"].createElement("label", {
    className: "inline-flex items-center space-x-3 cursor-pointer"
  }, position === 'left' && /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    ref: checkboxRef,
    checked: isChecked,
    onChange: handleCheckboxChange,
    disabled: disabled,
    className: defaultClasses
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ms-3 flex flex-col ".concat(position === 'right' ? 'me-auto' : '')
  }, label && /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-sm font-medium ".concat(disabled ? 'text-gray-400' : 'text-gray-700', " dark:text-neutral-400")
  }, label), description && /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xs ".concat(disabled ? 'text-gray-400' : 'text-gray-500', " dark:text-neutral-500")
  }, description), children), position === 'right' && /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    ref: checkboxRef,
    checked: isChecked,
    onChange: handleCheckboxChange,
    disabled: disabled,
    className: defaultClasses
  }));
}