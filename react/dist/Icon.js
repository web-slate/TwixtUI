"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TwixtIcon;
var _react = _interopRequireDefault(require("react"));
var _fa = require("react-icons/fa");
var _io = require("react-icons/io");
var _md = require("react-icons/md");
var _ci = require("react-icons/ci");
var _io2 = require("react-icons/io5");
var _pi = require("react-icons/pi");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var iconTypes = {
  notification: {
    filled: _fa.FaBell,
    outline: _fa.FaBellSlash
  },
  terminal: {
    filled: _fa.FaTerminal,
    outline: _fa.FaTerminalSlash
  },
  help: {
    filled: _fa.FaQuestionCircle,
    outline: _fa.FaQuestionCircleSlash
  },
  magnifier: {
    filled: _fa.FaSearch,
    outline: _fa.FaSearchPlus
  },
  hamburger: {
    filled: _fa.FaBars,
    outline: _fa.FaHamburger
  },
  verticalThreeDots: {
    filled: _fa.FaEllipsisV,
    outline: _fa.FaEllipsisV
  },
  horizontalThreeDots: {
    filled: _fa.FaEllipsisH,
    outline: _fa.FaEllipsisH
  },
  pin: {
    filled: _fa.FaThumbtack,
    outline: _fa.FaThumbtackSlash
  },
  "delete": {
    filled: _fa.FaTrash,
    outline: _fa.FaTrashAlt
  },
  add: {
    filled: _fa.FaPlus,
    outline: _fa.FaPlusSquare
  },
  chevronUp: {
    filled: _fa.FaChevronUp,
    outline: _fa.FaChevronUp
  },
  chevronDown: {
    filled: _fa.FaChevronDown,
    outline: _fa.FaChevronDown
  },
  chevronLeft: {
    filled: _fa.FaChevronLeft,
    outline: _fa.FaChevronLeft
  },
  chevronRight: {
    filled: _fa.FaChevronRight,
    outline: _fa.FaChevronRight
  },
  note: {
    filled: _fa.FaStickyNote,
    outline: _fa.FaStickyNote
  },
  pencil: {
    filled: _fa.FaPencilAlt,
    outline: _fa.FaPencilAlt
  },
  refresh: {
    filled: _fa.FaRedo,
    outline: _fa.FaSyncAlt
  },
  learn: {
    filled: _fa.FaBook,
    outline: _fa.FaBookOpen
  },
  monitor: {
    filled: _fa.FaDesktop,
    outline: _fa.FaDesktopAlt
  },
  "import": {
    filled: _fa.FaFileImport,
    outline: _fa.FaFileImport
  },
  "export": {
    filled: _fa.FaFileExport,
    outline: _fa.FaFileExport
  },
  filter: {
    filled: _fa.FaFilter,
    outline: _fa.FaFilterAlt
  },
  userAvatar: {
    filled: _fa.FaUser,
    outline: _fa.FaUserCircle
  },
  clipboard: {
    filled: _fa.FaRegClipboard,
    outline: _fa.FaRegClipboard
  },
  checkedClipboard: {
    filled: _fa.FaClipboardCheck,
    outline: _fa.FaClipboardCheck
  },
  headphone: {
    filled: _fa.FaHeadphones,
    outline: _ci.CiHeadphones
  },
  watch: {
    filled: _pi.PiWatchFill,
    outline: _pi.PiWatchLight
  },
  speaker: {
    filled: _pi.PiSpeakerSimpleHighFill,
    outline: _pi.PiSpeakerSimpleHighLight
  },
  speakerSlashed: {
    filled: _pi.PiSpeakerSlashFill,
    outline: _pi.PiSpeakerSlash
  },
  file: {
    filled: _fa.FaFile,
    outline: _fa.FaFileAlt
  },
  lock: {
    filled: _fa.FaLock,
    outline: _fa.FaLockOpen
  },
  share: {
    filled: _fa.FaShareAlt,
    outline: null
  },
  user: {
    filled: _fa.FaUser,
    outline: _fa.FaRegUser
  },
  userSlashed: {
    filled: _fa.FaUserAltSlash,
    outline: null
  },
  userGraduate: {
    filled: _fa.FaUserGraduate,
    outline: null
  },
  userGroup: {
    filled: _fa.FaUserGroup,
    outline: null
  },
  office: {
    filled: _fa.FaBuilding,
    outline: _fa.FaRegBuilding
  },
  mobile: {
    filled: _fa.FaMobileAlt,
    outline: null
  },
  mail: {
    filled: null,
    outline: _ci.CiMail
  },
  settings: {
    filled: _io2.IoSettings,
    outline: _io2.IoSettingsOutline
  },
  warning: {
    filled: _io.IoIosWarning,
    outline: null
  },
  success: {
    filled: _io.IoIosCheckmarkCircle,
    outline: _io.IoIosCheckmarkCircleOutline
  },
  error: {
    filled: _md.MdError,
    outline: _md.MdErrorOutline
  },
  info: {
    filled: _fa.FaInfoCircle,
    outline: _io2.IoInformationCircleOutline
  },
  close: {
    filled: _md.MdClear,
    outline: _md.MdOutlineClear
  }
};
function TwixtIcon(_ref) {
  var _iconTypes$type, _iconTypes$type2;
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'notification' : _ref$type,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'filled' : _ref$variant,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 12 : _ref$size,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '' : _ref$color,
    _ref$overwriteClass = _ref.overwriteClass,
    overwriteClass = _ref$overwriteClass === void 0 ? '' : _ref$overwriteClass;
  if (!iconTypes[type] || !((_iconTypes$type = iconTypes[type]) !== null && _iconTypes$type !== void 0 && _iconTypes$type[variant])) {
    return null;
  }
  var IconComponent = ((_iconTypes$type2 = iconTypes[type]) === null || _iconTypes$type2 === void 0 ? void 0 : _iconTypes$type2[variant]) || iconTypes.notification[filled];
  return /*#__PURE__*/_react["default"].createElement(IconComponent, {
    size: size,
    color: color,
    className: overwriteClass
  });
}