import React from 'react';
import {
  FaBell,
  FaBellSlash,
  FaTerminal,
  FaTerminalSlash,
  FaQuestionCircle,
  FaQuestionCircleSlash,
  FaSearch,
  FaSearchPlus,
  FaBars,
  FaHamburger,
  FaEllipsisV,
  FaEllipsisH,
  FaThumbtack,
  FaThumbtackSlash,
  FaTrash,
  FaTrashAlt,
  FaPlus,
  FaPlusSquare,
  FaChevronUp,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaStickyNote,
  FaPencilAlt,
  FaRedo,
  FaSyncAlt,
  FaBook,
  FaBookOpen,
  FaDesktop,
  FaDesktopAlt,
  FaFileImport,
  FaFileExport,
  FaFilter,
  FaFilterAlt,
  FaUser,
  FaUserCircle,
} from 'react-icons/fa';

const iconTypes = {
  notification: { filled: FaBell, outline: FaBellSlash },
  terminal: { filled: FaTerminal, outline: FaTerminalSlash },
  help: { filled: FaQuestionCircle, outline: FaQuestionCircleSlash },
  magnifier: { filled: FaSearch, outline: FaSearchPlus },
  hamburger: { filled: FaBars, outline: FaHamburger },
  verticalThreeDots: { filled: FaEllipsisV, outline: FaEllipsisV },
  horizontalThreeDots: { filled: FaEllipsisH, outline: FaEllipsisH },
  pin: { filled: FaThumbtack, outline: FaThumbtackSlash },
  delete: { filled: FaTrash, outline: FaTrashAlt },
  add: { filled: FaPlus, outline: FaPlusSquare },
  chevronUp: { filled: FaChevronUp, outline: FaChevronUp },
  chevronDown: { filled: FaChevronDown, outline: FaChevronDown },
  chevronLeft: { filled: FaChevronLeft, outline: FaChevronLeft },
  chevronRight: { filled: FaChevronRight, outline: FaChevronRight },
  note: { filled: FaStickyNote, outline: FaStickyNote },
  pencil: { filled: FaPencilAlt, outline: FaPencilAlt },
  refresh: { filled: FaRedo, outline: FaSyncAlt },
  learn: { filled: FaBook, outline: FaBookOpen },
  monitor: { filled: FaDesktop, outline: FaDesktopAlt },
  import: { filled: FaFileImport, outline: FaFileImport },
  export: { filled: FaFileExport, outline: FaFileExport },
  filter: { filled: FaFilter, outline: FaFilterAlt },
  userAvatar: { filled: FaUser, outline: FaUserCircle },
};

export default function TwixtIcon({ type = 'notification', variant = 'filled', size = 12, color = 'black' }) {
  if (!iconTypes[type] || !iconTypes[type]?.[variant]) {
    return null;
  }

  const IconComponent = iconTypes[type]?.[variant] || iconTypes.notification[filled];
  return <IconComponent size={size} color={color} />
}
