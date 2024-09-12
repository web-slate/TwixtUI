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
var TimePicker = function TimePicker(_ref) {
  var _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$popoverTitle = _ref.popoverTitle,
    popoverTitle = _ref$popoverTitle === void 0 ? '' : _ref$popoverTitle,
    _ref$selectionType = _ref.selectionType,
    selectionType = _ref$selectionType === void 0 ? 'single' : _ref$selectionType,
    onSelection = _ref.onSelection;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    timeValue = _useState2[0],
    setTimeValue = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    endTimeValue = _useState4[0],
    setEndTimeValue = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedTime = _useState6[0],
    setSelectedTime = _useState6[1];
  var _useState7 = (0, _react.useState)({
      start: null,
      end: null
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedTimeRange = _useState8[0],
    setSelectedTimeRange = _useState8[1];
  (0, _react.useEffect)(function () {
    var now = new Date();
    var end = (0, _dateFns.addMinutes)(now, 30);
    if (selectionType === 'range') {
      setSelectedTimeRange({
        start: (0, _dateFns.format)(now, 'HH:mm'),
        end: (0, _dateFns.format)(end, 'HH:mm')
      });
      if (onSelection) onSelection({
        start: (0, _dateFns.format)(now, 'HH:mm'),
        end: (0, _dateFns.format)(end, 'HH:mm')
      });
    }
  }, [selectionType, onSelection]);
  var generateTimeSlots = function generateTimeSlots() {
    var times = [];
    var start = (0, _dateFns.startOfDay)(new Date());
    for (var hour = 0; hour < 24; hour++) {
      for (var minute = 0; minute < 60; minute += 30) {
        times.push((0, _dateFns.format)((0, _dateFns.addMinutes)(start, hour * 60 + minute), 'HH:mm'));
      }
    }
    return times;
  };
  var handleTimeClick = function handleTimeClick(time) {
    if (selectionType === 'single') {
      setSelectedTime(time);
      setTimeValue(time);
      if (onSelection) onSelection(time);
    } else {
      if (!selectedTimeRange.start || selectedTimeRange.start && selectedTimeRange.end) {
        setSelectedTimeRange({
          start: time,
          end: null
        });
        if (onSelection) onSelection({
          start: time,
          end: null
        });
        setTimeValue(time);
      } else {
        setSelectedTimeRange({
          start: selectedTimeRange.start,
          end: time
        });
        if (onSelection) onSelection({
          start: selectedTimeRange.start,
          end: time
        });
        setTimeValue(selectedTimeRange.start);
        setEndTimeValue(time);
      }
    }
  };
  var renderTimeSlots = function renderTimeSlots() {
    var times = generateTimeSlots();
    return times.map(function (time, index) {
      var isSelected = selectionType === 'single' ? selectedTime === time : selectedTimeRange.start === time || selectedTimeRange.end === time;
      var isInRange = selectedTimeRange.start && selectedTimeRange.end && (0, _dateFns.isSameMinute)(new Date("1970-01-01T".concat(time, ":00")), new Date("1970-01-01T".concat(selectedTimeRange.start, ":00"))) || new Date("1970-01-01T".concat(time, ":00")) >= new Date("1970-01-01T".concat(selectedTimeRange.start, ":00")) && new Date("1970-01-01T".concat(time, ":00")) <= new Date("1970-01-01T".concat(selectedTimeRange.end, ":00"));
      return /*#__PURE__*/_react["default"].createElement("button", {
        key: index,
        className: "p-2 m-1 rounded ".concat(isSelected ? 'bg-blue-500 text-white' : isInRange ? 'bg-blue-100' : 'hover:bg-gray-200'),
        onClick: function onClick() {
          return handleTimeClick(time);
        }
      }, time);
    });
  };
  return /*#__PURE__*/_react["default"].createElement(_Popover["default"], {
    overwriteContentClass: "min-w-[300px] px-1",
    title: popoverTitle,
    hideOnBlur: false,
    scrollable: true,
    content: /*#__PURE__*/_react["default"].createElement("div", {
      className: "p-4"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "grid grid-cols-4 gap-2"
    }, renderTimeSlots())),
    position: "bottom"
  }, /*#__PURE__*/_react["default"].createElement(_InputSingleLine["default"], {
    label: label,
    value: timeValue
  }), " ", selectionType === 'single' ? null : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "to", /*#__PURE__*/_react["default"].createElement(_InputSingleLine["default"], {
    value: endTimeValue
  })));
};
var _default = exports["default"] = TimePicker;