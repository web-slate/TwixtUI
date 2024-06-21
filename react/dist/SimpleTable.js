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
var TableHeader = function TableHeader(_ref) {
  var title = _ref.title;
  if (!title) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 md:px-10 py-4 md:py-7"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Sort By:"), /*#__PURE__*/_react["default"].createElement("select", {
    "aria-label": "select",
    className: "focus:text-indigo-600 focus:outline-none bg-transparent ml-1"
  }, /*#__PURE__*/_react["default"].createElement("option", {
    className: "text-sm text-indigo-800"
  }, "Latest"), /*#__PURE__*/_react["default"].createElement("option", {
    className: "text-sm text-indigo-800"
  }, "Oldest")))));
};
var TableFilters = function TableFilters() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sm:flex items-center justify-between"
  }, "Table Filter under development");
};
var TableAddButton = function TableAddButton(_ref2) {
  var label = _ref2.label,
    onClick = _ref2.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    className: "focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm font-medium leading-none text-white"
  }, label));
};
var TableTable = function TableTable(_ref3) {
  var config = _ref3.config,
    data = _ref3.data;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-7 overflow-x-auto"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "w-full whitespace-nowrap"
  }, /*#__PURE__*/_react["default"].createElement("tbody", null, data.map(function (dataItem) {
    return /*#__PURE__*/_react["default"].createElement(TableRow, {
      key: dataItem[config.uniqueFieldId],
      config: config,
      dataItem: dataItem
    });
  })))));
};
var TableRow = function TableRow(_ref4) {
  var config = _ref4.config,
    dataItem = _ref4.dataItem;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isChecked = _useState2[0],
    setIsChecked = _useState2[1];
  var displayFields = (config === null || config === void 0 ? void 0 : config.displayFields) || [];
  var actionButtons = (config === null || config === void 0 ? void 0 : config.actionButtons) || [];
  var handleCheckboxChange = function handleCheckboxChange() {
    setIsChecked(!isChecked);
  };
  return /*#__PURE__*/_react["default"].createElement("tr", {
    className: "focus:outline-none h-16 border border-gray-100 rounded"
  }, (config === null || config === void 0 ? void 0 : config.canRowThisSelectable) && /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "ml-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    checked: isChecked,
    onChange: handleCheckboxChange,
    className: "checkbox opacity-0 absolute cursor-pointer w-full h-full"
  }), isChecked && /*#__PURE__*/_react["default"].createElement("div", {
    className: "check-icon bg-indigo-700 text-white rounded-sm"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "icon icon-tabler icon-tabler-check",
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 12l5 5l10 -10"
  })))))), displayFields.map(function (field) {
    return /*#__PURE__*/_react["default"].createElement("td", {
      className: field.rowStyle
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: field.cellStyle
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: field.textStyle
    }, dataItem[field.fieldId])));
  }), actionButtons.map(function (button) {
    return /*#__PURE__*/_react["default"].createElement("td", {
      className: "pl-4"
    }, button.label !== '' && /*#__PURE__*/_react["default"].createElement("button", {
      className: "focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none",
      onClick: function onClick() {
        if (button.onClick) {
          button.onClick(dataItem);
        }
      }
    }, button.label));
  }));
};
var DropdownButton = function DropdownButton(_ref5) {
  var onClick = _ref5.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "focus:ring-2 rounded-md focus:outline-none",
    onClick: onClick,
    role: "button",
    "aria-label": "option"
  });
};
var DropdownContent = function DropdownContent(_ref6) {
  var rowId = _ref6.rowId;
} // DropdownContent implementation
;
var SimpleTable = function SimpleTable(_ref7) {
  var title = _ref7.title,
    config = _ref7.config,
    data = _ref7.data;
  var _config$canShowFilter = config.canShowFilter,
    canShowFilter = _config$canShowFilter === void 0 ? false : _config$canShowFilter,
    _config$canShowHeader = config.canShowHeader,
    canShowHeader = _config$canShowHeader === void 0 ? false : _config$canShowHeader,
    _config$canShowAddBut = config.canShowAddButton,
    canShowAddButton = _config$canShowAddBut === void 0 ? false : _config$canShowAddBut;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sm:px-6 w-full"
  }, canShowHeader && /*#__PURE__*/_react["default"].createElement(TableHeader, {
    title: title
  }), canShowFilter && /*#__PURE__*/_react["default"].createElement(TableFilters, null), canShowAddButton && /*#__PURE__*/_react["default"].createElement(TableAddButton, {
    label: config.addLabel,
    onClick: config.onAddClick
  }), /*#__PURE__*/_react["default"].createElement(TableTable, {
    config: config,
    data: data
  }));
};
var _default = exports["default"] = SimpleTable;