import React from 'react';
import {
  FaBars,
  FaBell,
  FaBellSlash,
  FaBook,
  FaBookOpen,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaChevronUp,
  FaClipboardCheck,
  FaDesktop,
  FaDesktopAlt,
  FaEllipsisH,
  FaEllipsisV,
  FaFileExport,
  FaFileImport,
  FaFilter,
  FaFilterAlt,
  FaHamburger,
  FaPencilAlt,
  FaPlus,
  FaPlusSquare,
  FaQuestionCircle,
  FaQuestionCircleSlash,
  FaRedo,
  FaRegClipboard,
  FaSearch,
  FaSearchPlus,
  FaStickyNote,
  FaSyncAlt,
  FaTerminal,
  FaTerminalSlash,
  FaThumbtack,
  FaThumbtackSlash,
  FaTrash,
  FaTrashAlt,
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
  clipboard:{filled: FaRegClipboard, outline: FaRegClipboard},
  checkedClipboard:{filled: FaClipboardCheck, outline:FaClipboardCheck}
};

export default function TwixtIcon({ type = 'notification', variant = 'filled', size = 12, color = 'black' }) {
  if (!iconTypes[type] || !iconTypes[type]?.[variant]) {
    return null;
  }

  const IconComponent = iconTypes[type]?.[variant] || iconTypes.notification[filled];
  return <IconComponent size={size} color={color} />
}
