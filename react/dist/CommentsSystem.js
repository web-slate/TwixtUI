"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TwixtCommentsSystem() {
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-2xl mx-auto px-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-between items-center mb-6"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-lg lg:text-2xl font-bold text-gray-900 dark:text-white"
  }, "Discussion (20)")), /*#__PURE__*/_react["default"].createElement("form", {
    className: "mb-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    "for": "comment",
    className: "sr-only"
  }, "Your comment"), /*#__PURE__*/_react["default"].createElement("textarea", {
    id: "comment",
    rows: "6",
    className: "px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800",
    placeholder: "Write a comment...",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
  }, "Post comment")), /*#__PURE__*/_react["default"].createElement("article", {
    className: "p-6 text-base bg-white rounded-lg dark:bg-gray-900"
  }, /*#__PURE__*/_react["default"].createElement("footer", {
    className: "flex justify-between items-center mb-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "mr-2 w-6 h-6 rounded-full",
    src: "https://via.placeholder.com/150",
    alt: "Manickam"
  }), "Manickam"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-600 dark:text-gray-400"
  }, /*#__PURE__*/_react["default"].createElement("time", {
    pubdate: true,
    datetime: "2019-02-09",
    title: "February 9th, 2019"
  }, "Feb. 8, 2019"))), /*#__PURE__*/_react["default"].createElement("button", {
    id: "dropdownComment1Button",
    "data-dropdown-toggle": "dropdownComment1",
    className: "inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-4 h-4",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 16 3"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Comment settings")), /*#__PURE__*/_react["default"].createElement("div", {
    id: "dropdownComment1",
    className: "hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "py-1 text-sm text-gray-700 dark:text-gray-200",
    "aria-labelledby": "dropdownMenuIconHorizontalButton"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  }, "Edit")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  }, "Remove")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  }, "Report"))))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-500 dark:text-gray-400"
  }, "Lot of books available"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center mt-4 space-x-4"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "mr-1.5 w-3.5 h-3.5",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 18"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
  })), "Reply"))), /*#__PURE__*/_react["default"].createElement("article", {
    className: "p-6 mb-3 ml-6 lg:ml-12 text-base bg-white rounded-lg dark:bg-gray-900"
  }, /*#__PURE__*/_react["default"].createElement("footer", {
    className: "flex justify-between items-center mb-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "mr-2 w-6 h-6 rounded-full",
    src: "https://via.placeholder.com/150",
    alt: "Sendhoora"
  }), "Sendhoora"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-600 dark:text-gray-400"
  }, /*#__PURE__*/_react["default"].createElement("time", {
    pubdate: true,
    datetime: "2022-02-12",
    title: "March 12th, 2021"
  }, "Feb. 12, 2021"))), /*#__PURE__*/_react["default"].createElement("button", {
    id: "dropdownComment2Button",
    "data-dropdown-toggle": "dropdownComment2",
    className: "inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-4 h-4",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 16 3"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Comment settings")), /*#__PURE__*/_react["default"].createElement("div", {
    id: "dropdownComment2",
    className: "hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "py-1 text-sm text-gray-700 dark:text-gray-200",
    "aria-labelledby": "dropdownMenuIconHorizontalButton"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  }, "Edit")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  }, "Remove")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  }, "Report"))))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-500 dark:text-gray-400"
  }, "Great news!"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center mt-4 space-x-4"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "mr-1.5 w-3.5 h-3.5",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 18"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
  })), "Reply"))), /*#__PURE__*/_react["default"].createElement("article", {
    className: "p-6 mb-3 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900"
  }, /*#__PURE__*/_react["default"].createElement("footer", {
    className: "flex justify-between items-center mb-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "mr-2 w-6 h-6 rounded-full",
    src: "https://via.placeholder.com/150",
    alt: "Johny"
  }), "Johny"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-600 dark:text-gray-400"
  }, /*#__PURE__*/_react["default"].createElement("time", {
    pubdate: true,
    datetime: "2022-03-12",
    title: "March 12th, 2022"
  }, "Mar. 12, 2022"))), /*#__PURE__*/_react["default"].createElement("button", {
    id: "dropdownComment3Button",
    "data-dropdown-toggle": "dropdownComment3",
    className: "inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-4 h-4",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 16 3"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
  })), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Comment settings")), /*#__PURE__*/_react["default"].createElement("div", {
    id: "dropdownComment3",
    className: "hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "py-1 text-sm text-gray-700 dark:text-gray-200",
    "aria-labelledby": "dropdownMenuIconHorizontalButton"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  }, "Edit")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  }, "Remove")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  }, "Report"))))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-500 dark:text-gray-400"
  }, "I have the entire info, i will teach you"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center mt-4 space-x-4"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "mr-1.5 w-3.5 h-3.5",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 18"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
  })), "Reply"))), /*#__PURE__*/_react["default"].createElement("article", {
    className: "p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900"
  }, /*#__PURE__*/_react["default"].createElement("footer", {
    className: "flex justify-between items-center mb-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "mr-2 w-6 h-6 rounded-full",
    src: "https://via.placeholder.com/150",
    alt: "Anjala"
  }), "Anjala"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-600 dark:text-gray-400"
  }, /*#__PURE__*/_react["default"].createElement("time", {
    pubdate: true,
    datetime: "2022-06-23",
    title: "June 23rd, 2022"
  }, "Jun. 23, 2022"))), /*#__PURE__*/_react["default"].createElement("button", {
    id: "dropdownComment4Button",
    "data-dropdown-toggle": "dropdownComment4",
    className: "inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-4 h-4",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 16 3"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    id: "dropdownComment4",
    className: "hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "py-1 text-sm text-gray-700 dark:text-gray-200",
    "aria-labelledby": "dropdownMenuIconHorizontalButton"
  }, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  }, "Edit")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  }, "Remove")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  }, "Report"))))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-500 dark:text-gray-400"
  }, "Thanks da."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center mt-4 space-x-4"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "mr-1.5 w-3.5 h-3.5",
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 20 18"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
  })), "Reply")))));
}
var _default = exports["default"] = TwixtCommentsSystem;