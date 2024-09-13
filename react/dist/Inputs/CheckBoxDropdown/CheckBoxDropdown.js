"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("../../CallsToAction/Button"));
var _InputSingleLine = _interopRequireDefault(require("../InputSingleLine"));
var _Checkbox = _interopRequireDefault(require("../Checkbox"));
var _Icon = _interopRequireDefault(require("../../Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CheckBoxDropdown = function CheckBoxDropdown(_ref) {
  var id = _ref.id,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? 'Select Multiple options' : _ref$label,
    _ref$filterLabel = _ref.filterLabel,
    filterLabel = _ref$filterLabel === void 0 ? 'Filter options' : _ref$filterLabel,
    _ref$selectedItemsLab = _ref.selectedItemsLabel,
    selectedItemsLabel = _ref$selectedItemsLab === void 0 ? function (count) {
      return "".concat(count, " Item").concat(count > 1 ? 's' : '', " selected");
    } : _ref$selectedItemsLab,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    _ref$checkBoxOptions = _ref.checkBoxOptions,
    checkBoxOptions = _ref$checkBoxOptions === void 0 ? [] : _ref$checkBoxOptions,
    _ref$enableFilter = _ref.enableFilter,
    enableFilter = _ref$enableFilter === void 0 ? false : _ref$enableFilter,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? [] : _ref$defaultValue,
    onChange = _ref.onChange;
  var _useState = (0, _react.useState)(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    selectedOptions = _useState2[0],
    setSelectedOptions = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showDropdown = _useState4[0],
    setShowDropdown = _useState4[1];
  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    filterText = _useState6[0],
    setFilterText = _useState6[1]; // State for filter input
  var dropdownId = (0, _react.useId)(); // Generate unique id for each dropdown instance
  var buttonId = (0, _react.useId)(); // Generate unique id for each button
  var dropdownRef = (0, _react.useRef)(null); // Ref for dropdown menu

  // Close dropdown when clicking outside
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false); // Close dropdown if clicked outside
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Toggle dropdown visibility
  var toggleDropdown = function toggleDropdown() {
    if (!disabled) {
      setShowDropdown(!showDropdown);
    }
  };

  // Handle the change event for checkboxes
  var handleCheckboxChange = function handleCheckboxChange(value) {
    var updatedSelection;
    if (selectedOptions.includes(value)) {
      updatedSelection = selectedOptions.filter(function (option) {
        return option !== value;
      }); // Remove the option
    } else {
      updatedSelection = [].concat(_toConsumableArray(selectedOptions), [value]); // Add the option
    }
    setSelectedOptions(updatedSelection);
    // Notify parent component of the change if onChange is provided
    if (onChange) {
      onChange(updatedSelection);
    }
  };

  // Filtered options based on filter text
  var filteredOptions = checkBoxOptions.filter(function (option) {
    return option.label.toLowerCase().includes(filterText.toLowerCase());
  });

  // Get label text based on selected items
  var getLabel = function getLabel() {
    if (selectedOptions.length === 0) return label;
    if (selectedOptions.length === 1) {
      var selectedItem = checkBoxOptions.find(function (option) {
        return option.value === selectedOptions[0];
      });
      return selectedItem ? selectedItem.label : label;
    }
    return selectedItemsLabel(selectedOptions.length);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative inline-block text-left",
    ref: dropdownRef
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    id: buttonId // Unique button ID
    ,
    onClick: toggleDropdown,
    variant: variant,
    disabled: disabled,
    label: getLabel() // Dynamic label based on selected items
    ,
    rightIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      type: "chevronDown",
      variant: "filled",
      size: 16
    })
  }), showDropdown && !disabled && /*#__PURE__*/_react["default"].createElement("div", {
    id: dropdownId // Unique dropdown ID
    ,
    className: "absolute z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
  }, enableFilter && /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-2"
  }, /*#__PURE__*/_react["default"].createElement(_InputSingleLine["default"], {
    fieldId: "".concat(id, "-filter-input"),
    value: filterText,
    onChange: function onChange(e) {
      return setFilterText(e.target.value);
    },
    placeholder: filterLabel,
    disabled: disabled // Disable filter input if the dropdown is disabled
  })), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200",
    "aria-labelledby": buttonId
  }, filteredOptions.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
      name: "option_".concat(index),
      label: option.label,
      checked: selectedOptions.includes(option.value),
      onChange: function onChange() {
        return handleCheckboxChange(option.value);
      },
      disabled: option.disabled || disabled // Ensure checkbox is disabled if dropdown or option is disabled
    }));
  })), filteredOptions.length === 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-2 text-sm text-gray-500 dark:text-gray-400"
  }, "No options found")));
};
var _default = exports["default"] = CheckBoxDropdown;