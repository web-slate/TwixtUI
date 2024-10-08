"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ProfilePic = _interopRequireDefault(require("../../../../Communications/ProfilePic"));
var _Icon = _interopRequireDefault(require("../../../../Icon"));
var _Popover = _interopRequireDefault(require("../../../Popover"));
var _Button = _interopRequireDefault(require("../../../../CallsToAction/Button"));
var _BoxItem = _interopRequireDefault(require("../../../../Containers/BoxItem"));
var _NotificationItem = _interopRequireDefault(require("../../../NotificationItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ApplicationShellHeaderNotificationPopover() {
  return /*#__PURE__*/_react["default"].createElement(_BoxItem["default"], {
    overwriteClass: "relative inline-block text-left"
  }, /*#__PURE__*/_react["default"].createElement(_Popover["default"], {
    overwriteContentClass: "w-80 list-none bg-white rounded shadow-lg rounded-xl",
    title: "Notifications",
    hideOnBlur: false,
    content: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_BoxItem["default"], null, /*#__PURE__*/_react["default"].createElement(_NotificationItem["default"], {
      leftContent: /*#__PURE__*/_react["default"].createElement(_ProfilePic["default"], {
        label: "JD",
        shortName: true
      }),
      altText: "Bonnie Green avatar",
      name: "Bonnie Green",
      message: "sent message 'Hey, what's up? All set for the presentation?'",
      time: "a few moments ago",
      iconColor: "bg-primary-700",
      iconPath: "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293zM3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
    }), /*#__PURE__*/_react["default"].createElement(_NotificationItem["default"], {
      leftContent: /*#__PURE__*/_react["default"].createElement(_ProfilePic["default"], {
        label: "JL",
        shortName: true
      }),
      altText: "Jese Leos avatar",
      name: "Jese Leos",
      message: " and 5 others started following you.",
      time: "10 minutes ago",
      iconColor: "bg-gray-900",
      iconPath: "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
    }), /*#__PURE__*/_react["default"].createElement(_NotificationItem["default"], {
      leftContent: /*#__PURE__*/_react["default"].createElement(_ProfilePic["default"], {
        label: "JM",
        shortName: true
      }),
      altText: "Joseph McFall avatar",
      name: "Joseph Mcfall",
      message: " and 141 others love your story. See it and view more stories.",
      time: "44 minutes ago",
      iconColor: "bg-red-600",
      iconPath: "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
    }), /*#__PURE__*/_react["default"].createElement(_NotificationItem["default"], {
      leftContent: /*#__PURE__*/_react["default"].createElement(_ProfilePic["default"], {
        label: "RC",
        shortName: true
      }),
      altText: "Roberta Casas image",
      name: "Leslie Livingston",
      message: " mentioned you in a comment: @bonnie.green what do you say?",
      time: "1 hour ago",
      iconColor: "bg-green-400",
      iconPath: "M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
    }), /*#__PURE__*/_react["default"].createElement(_NotificationItem["default"], {
      leftContent: /*#__PURE__*/_react["default"].createElement(_ProfilePic["default"], {
        label: "RB",
        shortName: true
      }),
      altText: "Robert image",
      name: "Robert Brown",
      message: " posted a new video: Glassmorphism - learn how to implement the new design trend.",
      time: "3 hours ago",
      iconColor: "bg-purple-500",
      iconPath: "M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
    })), /*#__PURE__*/_react["default"].createElement("a", {
      href: "#",
      className: "block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
    }, /*#__PURE__*/_react["default"].createElement(_BoxItem["default"], {
      overwriteClass: "inline-flex items-center gap-x-2"
    }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      size: "20",
      type: "eye",
      variant: "filled"
    }), "View all"))),
    position: "bottom-right"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    leftIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      size: "20",
      type: "notification",
      variant: "filled"
    }),
    hideLabel: true,
    overwriteClass: "bg-transparent"
  })));
}
var _default = exports["default"] = ApplicationShellHeaderNotificationPopover;