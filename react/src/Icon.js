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
  FaHeadphones,
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
  FaFile,
  FaLock,
  FaShareAlt,
  FaFileAlt,
  FaLockOpen,
} from 'react-icons/fa';

import { CiHeadphones } from "react-icons/ci";

import {
  PiSpeakerSimpleHighFill, PiSpeakerSimpleHighLight,
  PiSpeakerSlash,
  PiSpeakerSlashFill,
  PiWatchFill, PiWatchLight
} from "react-icons/pi";

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
  checkedClipboard:{filled: FaClipboardCheck, outline:FaClipboardCheck},
  headphone: {filled: FaHeadphones, outline: CiHeadphones},
  watch: {filled: PiWatchFill, outline: PiWatchLight },
  speaker: {filled: PiSpeakerSimpleHighFill, outline: PiSpeakerSimpleHighLight },
  speakerSlashed: {filled: PiSpeakerSlashFill, outline: PiSpeakerSlash },
  file: {filled: FaFile, outline: FaFileAlt },
  lock: {filled: FaLock, outline: FaLockOpen },
  share: {filled: FaShareAlt, outline: null },
};

export default function TwixtIcon({ type = 'notification', variant = 'filled', size = 12, color = 'black' }) {
  if (!iconTypes[type] || !iconTypes[type]?.[variant]) {
    return null;
  }

  const IconComponent = iconTypes[type]?.[variant] || iconTypes.notification[filled];
  return <IconComponent size={size} color={color} />
}
