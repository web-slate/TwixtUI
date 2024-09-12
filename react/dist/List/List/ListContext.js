"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useListContext = exports.ListContext = void 0;
var _react = require("react");
// Create a context for the List component
var ListContext = exports.ListContext = /*#__PURE__*/(0, _react.createContext)();

// Custom hook to use the List context
var useListContext = exports.useListContext = function useListContext() {
  var context = (0, _react.useContext)(ListContext);
  if (!context) {
    throw new Error('useListContext must be used within a ListProvider');
  }
  return context;
};