"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = _interopRequireDefault(require("../../CallsToAction/Button"));
var _Link = _interopRequireDefault(require("../../CallsToAction/Link"));
var _BoxItem = _interopRequireDefault(require("../../Containers/BoxItem"));
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
// SectionHeader Component: Displays section title and sort options
var SectionHeader = function SectionHeader(_ref) {
  var title = _ref.title;
  if (!title) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 md:px-10 py-4 md:py-7"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
  }, title)));
};

// TableFilters Component: Placeholder for table filters
var TableFilters = function TableFilters() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sm:flex items-center justify-between py-4 px-4"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-gray-600"
  }, "Table Filter under development"));
};

// AddButton Component: Button to add new entries
var AddButton = function AddButton(_ref2) {
  var label = _ref2.label,
    onClick = _ref2.onClick;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-4 md:px-10 py-4 md:py-7"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "primary",
    label: label,
    onClick: onClick,
    type: "secondary"
  }));
};

// TableHeader Component: Contains the thead section of the table
var TableHeader = function TableHeader(_ref3) {
  var _config$actions;
  var config = _ref3.config,
    sortField = _ref3.sortField,
    sortOrder = _ref3.sortOrder,
    onSort = _ref3.onSort;
  var displayFields = (config === null || config === void 0 ? void 0 : config.displayFields) || [];
  return /*#__PURE__*/_react["default"].createElement("thead", {
    className: "bg-gray-50 dark:bg-neutral-700"
  }, /*#__PURE__*/_react["default"].createElement("tr", {
    className: "focus:outline-none border border-gray-100 rounded"
  }, displayFields.map(function (field) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: field.fieldId,
      className: "px-6 py-3 text-start text-xs font-strong text-gray-500 uppercase dark:text-neutral-500 cursor-pointer",
      onClick: function onClick() {
        return onSort(field.fieldId);
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex items-center"
    }, field.label, sortField === field.fieldId && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      type: sortOrder === 'asc' ? "chevronUp" : "chevronDown",
      variant: "outline",
      overwriteClass: "ml-2 h-4 w-4"
    })));
  }), (config === null || config === void 0 || (_config$actions = config.actions) === null || _config$actions === void 0 ? void 0 : _config$actions.length) > 0 && /*#__PURE__*/_react["default"].createElement("th", {
    className: "px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
  }, "Actions")));
};

// TableBody Component: Handles the table's body rows
var TableBody = function TableBody(_ref4) {
  var config = _ref4.config,
    data = _ref4.data;
  return /*#__PURE__*/_react["default"].createElement("tbody", null, data.map(function (dataItem) {
    return /*#__PURE__*/_react["default"].createElement(TableRow, {
      key: dataItem[config.uniqueFieldId],
      config: config,
      dataItem: dataItem
    });
  }));
};

// TableRow Component: Handles individual row display and actions
var TableRow = function TableRow(_ref5) {
  var _config$actions2;
  var config = _ref5.config,
    dataItem = _ref5.dataItem;
  var displayFields = (config === null || config === void 0 ? void 0 : config.displayFields) || [];
  var actions = (config === null || config === void 0 ? void 0 : config.actions) || [];
  return /*#__PURE__*/_react["default"].createElement("tr", {
    className: "focus:outline-none h-12 border border-gray-100 rounded"
  }, displayFields.map(function (field) {
    return /*#__PURE__*/_react["default"].createElement("td", {
      className: field.rowStyle,
      key: field.fieldId
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: field.cellStyle
    }, /*#__PURE__*/_react["default"].createElement("p", {
      className: field.textStyle
    }, dataItem[field.fieldId])));
  }), (config === null || config === void 0 || (_config$actions2 = config.actions) === null || _config$actions2 === void 0 ? void 0 : _config$actions2.length) > 0 && /*#__PURE__*/_react["default"].createElement("td", {
    className: "pl-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex px-2"
  }, actions.map(function (action) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "space-x-2",
      key: action.label
    }, action.actionType === 'button' && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      type: action.type,
      label: action.label,
      leftIcon: action.icon,
      onClick: function onClick() {
        if (action.onClick) {
          action.onClick(dataItem);
        }
      },
      overwriteClass: action.overwriteClass
    }), action.actionType === 'link' && /*#__PURE__*/_react["default"].createElement(_Link["default"], {
      label: action.label,
      leftIcon: action.icon,
      link: action.link,
      onClick: function onClick() {
        if (action.onClick) {
          action.onClick(dataItem);
        }
      },
      overwriteClass: action.overwriteClass
    }), action.actionType === 'box-item' && /*#__PURE__*/_react["default"].createElement(_BoxItem["default"], {
      type: "inline",
      overwriteClass: action.overwriteClass
    }, action.label));
  }))));
};

// Table Component: Main component containing the header, body, and optional sections like filters and add button
var Table = function Table(_ref6) {
  var _config$sorting, _config$sorting2;
  var title = _ref6.title,
    config = _ref6.config,
    data = _ref6.data;
  var _useState = (0, _react.useState)(((_config$sorting = config.sorting) === null || _config$sorting === void 0 ? void 0 : _config$sorting.fieldId) || null),
    _useState2 = _slicedToArray(_useState, 2),
    sortField = _useState2[0],
    setSortField = _useState2[1];
  var _useState3 = (0, _react.useState)(((_config$sorting2 = config.sorting) === null || _config$sorting2 === void 0 ? void 0 : _config$sorting2.order) || 'asc'),
    _useState4 = _slicedToArray(_useState3, 2),
    sortOrder = _useState4[0],
    setSortOrder = _useState4[1];
  var handleSort = function handleSort(fieldId) {
    var newSortOrder = sortField === fieldId && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(fieldId);
    setSortOrder(newSortOrder);
  };
  var sortedData = (0, _react.useMemo)(function () {
    if (!sortField) return data;
    return _toConsumableArray(data).sort(function (a, b) {
      var aValue = a[sortField];
      var bValue = b[sortField];
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortField, sortOrder]);
  var _config$canShowFilter = config.canShowFilter,
    canShowFilter = _config$canShowFilter === void 0 ? false : _config$canShowFilter,
    _config$canShowHeader = config.canShowHeader,
    canShowHeader = _config$canShowHeader === void 0 ? false : _config$canShowHeader,
    _config$canShowAddBut = config.canShowAddButton,
    canShowAddButton = _config$canShowAddBut === void 0 ? false : _config$canShowAddBut;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sm:px-6 w-full"
  }, canShowHeader && /*#__PURE__*/_react["default"].createElement(SectionHeader, {
    title: title
  }), canShowFilter && /*#__PURE__*/_react["default"].createElement(TableFilters, null), canShowAddButton && /*#__PURE__*/_react["default"].createElement(AddButton, {
    label: config.addLabel,
    onClick: config.onAddClick
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white px-4 md:px-8 xl:px-10"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "w-full whitespace-nowrap"
  }, /*#__PURE__*/_react["default"].createElement(TableHeader, {
    config: config,
    sortField: sortField,
    sortOrder: sortOrder,
    onSort: handleSort
  }), /*#__PURE__*/_react["default"].createElement(TableBody, {
    config: config,
    data: sortedData
  })))));
};
var _default = exports["default"] = Table;