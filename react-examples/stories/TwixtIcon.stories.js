import TwixtIcon from '../../react/src/Icon.js';

export default {
  title: 'Common/TwixtIcon',
  component: TwixtIcon,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select', options: [
        'notification', 'terminal', 'help', 'magnifier', 'hamburger', 'verticalThreeDots', 
        'horizontalThreeDots', 'pin', 'delete', 'add', 'chevronUp', 'chevronDown', 
        'chevronLeft', 'chevronRight', 'note', 'pencil', 'refresh', 'learn', 'monitor', 
        'import', 'export', 'filter', 'userAvatar','clipboard'] },
    },
    variant: {
      control: { type: 'select', options: ['filled', 'outline'] },
    },
    size: {
      control: { type: 'number' },
    },
    color: {
      control: { type: 'color' },
    },
  },
  args: {
    type: 'notification',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const NotificationIcon = {
  args: {
    type: 'notification',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const TerminalIcon = {
  args: {
    type: 'terminal',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const HelpIcon = {
  args: {
    type: 'help',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const MagnifierIcon = {
  args: {
    type: 'magnifier',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const HamburgerIcon = {
  args: {
    type: 'hamburger',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const VerticalThreeDotsIcon = {
  args: {
    type: 'verticalThreeDots',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const HorizontalThreeDotsIcon = {
  args: {
    type: 'horizontalThreeDots',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const PinIcon = {
  args: {
    type: 'pin',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const DeleteIcon = {
  args: {
    type: 'delete',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const AddIcon = {
  args: {
    type: 'add',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const ChevronUpIcon = {
  args: {
    type: 'chevronUp',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const ChevronDownIcon = {
  args: {
    type: 'chevronDown',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const ChevronLeftIcon = {
  args: {
    type: 'chevronLeft',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const ChevronRightIcon = {
  args: {
    type: 'chevronRight',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const NoteIcon = {
  args: {
    type: 'note',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const PencilIcon = {
  args: {
    type: 'pencil',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const RefreshIcon = {
  args: {
    type: 'refresh',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const LearnIcon = {
  args: {
    type: 'learn',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const MonitorIcon = {
  args: {
    type: 'monitor',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const ImportIcon = {
  args: {
    type: 'import',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const ExportIcon = {
  args: {
    type: 'export',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const FilterIcon = {
  args: {
    type: 'filter',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

export const UserAvatarIcon = {
  args: {
    type: 'userAvatar',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};
export const Clipboard = {
  args: {
    type: 'clipboard',
    variant: 'outline',
    size: 12,
    color: 'black',
  },
};
export const Checkedclipboard = {
  args: {
    type: 'clipboard',
    variant: 'filled',
    size: 12,
    color: 'black',
  },
};

