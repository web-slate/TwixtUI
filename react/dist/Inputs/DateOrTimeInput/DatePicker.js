"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Popover = _interopRequireDefault(require("../../Containers/Popover"));
var _InputSingleLine = _interopRequireDefault(require("../InputSingleLine"));
var _dateFns = require("date-fns");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DatePicker = function DatePicker(_ref) {
  var label = _ref.label,
    popoverTitle = _ref.popoverTitle,
    _ref$selectionType = _ref.selectionType,
    selectionType = _ref$selectionType === void 0 ? 'single' : _ref$selectionType,
    onSelection = _ref.onSelection,
    _ref$dateFormat = _ref.dateFormat,
    dateFormat = _ref$dateFormat === void 0 ? 'd' : _ref$dateFormat;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    startDateValue = _useState2[0],
    setStartDateValue = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    endDateValue = _useState4[0],
    setEndDateValue = _useState4[1];
  var _useState5 = (0, _react.useState)(new Date()),
    _useState6 = _slicedToArray(_useState5, 2),
    currentMonth = _useState6[0],
    setCurrentMonth = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedDate = _useState8[0],
    setSelectedDate = _useState8[1];
  var _useState9 = (0, _react.useState)({
      start: null,
      end: null
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedRange = _useState10[0],
    setSelectedRange = _useState10[1];
  var daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  var handlePrevMonth = function handlePrevMonth() {
    setCurrentMonth((0, _dateFns.subMonths)(currentMonth, 1));
  };
  var handleNextMonth = function handleNextMonth() {
    setCurrentMonth((0, _dateFns.addMonths)(currentMonth, 1));
  };
  var handleDayClick = function handleDayClick(day) {
    if (selectionType === 'single') {
      setSelectedDate(day);
      if (onSelection) onSelection(day);
      setStartDateValue((0, _dateFns.format)(day, dateFormat));
    } else {
      if (!selectedRange.start || selectedRange.start && selectedRange.end) {
        setSelectedRange({
          start: day,
          end: null
        });
        if (onSelection) onSelection({
          start: day,
          end: null
        });
        setStartDateValue((0, _dateFns.format)(day, dateFormat));
      } else {
        setSelectedRange({
          start: selectedRange.start,
          end: day
        });
        if (onSelection) onSelection({
          start: selectedRange.start,
          end: day
        });
        setStartDateValue((0, _dateFns.format)(selectedRange.start, dateFormat));
        setEndDateValue((0, _dateFns.format)(day, dateFormat));
      }
    }
  };
  var renderDays = function renderDays() {
    var startMonth = (0, _dateFns.startOfMonth)(currentMonth);
    var endMonth = (0, _dateFns.endOfMonth)(currentMonth);
    var days = (0, _dateFns.eachDayOfInterval)({
      start: (0, _dateFns.startOfWeek)(startMonth, {
        weekStartsOn: 1
      }),
      end: (0, _dateFns.endOfWeek)(endMonth, {
        weekStartsOn: 1
      })
    });
    return days.map(function (day, index) {
      var isSelected = selectionType === 'single' ? selectedDate && (0, _dateFns.isSameDay)(day, selectedDate) : selectedRange.start && (0, _dateFns.isSameDay)(day, selectedRange.start) || selectedRange.end && (0, _dateFns.isSameDay)(day, selectedRange.end);
      var isInRange = selectedRange.start && selectedRange.end && day >= selectedRange.start && day <= selectedRange.end;
      return /*#__PURE__*/_react["default"].createElement("button", {
        key: index,
        className: "w-8 h-8 flex items-center justify-center rounded-full transition-colors ".concat(isSelected ? 'bg-blue-500 text-white' : isInRange ? 'bg-blue-100' : 'hover:bg-gray-200'),
        onClick: function onClick() {
          return handleDayClick(day);
        }
      }, (0, _dateFns.format)(day, 'd'));
    });
  };
  return /*#__PURE__*/_react["default"].createElement(_Popover["default"], {
    overwriteContentClass: "min-w-[250px] p-0",
    title: popoverTitle,
    hideOnBlur: false,
    content: /*#__PURE__*/_react["default"].createElement("div", {
      className: "p-4"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex justify-between mb-4"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: handlePrevMonth,
      className: "p-2 rounded-full hover:bg-gray-200"
    }, "<"), /*#__PURE__*/_react["default"].createElement("div", null, (0, _dateFns.format)(currentMonth, 'MMMM yyyy')), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: handleNextMonth,
      className: "p-2 rounded-full hover:bg-gray-200"
    }, ">")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "grid grid-cols-7 gap-1"
    }, daysOfWeek.map(function (day) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: day,
        className: "text-center font-semibold"
      }, day);
    }), renderDays())),
    position: "bottom"
  }, /*#__PURE__*/_react["default"].createElement(_InputSingleLine["default"], {
    label: label,
    value: startDateValue
  }), selectionType === 'single' ? null : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "to", /*#__PURE__*/_react["default"].createElement(_InputSingleLine["default"], {
    value: endDateValue
  })));
};
var _default = exports["default"] = DatePicker;