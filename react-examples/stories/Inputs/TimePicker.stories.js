import React from 'react';
import TwixtTimePicker from '../../../react/src/Inputs/DateOrTimeInput/TimePicker';

export default {
  title: 'Inputs/TwixtTimePicker',
  component: TwixtTimePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {

  },
};

export const SingleSelection = {
  args: {
    label: 'Choose Time',
    popoverTitle: 'Choose Time',
    selectionType: 'single',
    onSelection: (selection) => {
      console.log('Selected date or range:', selection);
    }
  },
};

export const RangeSelection = {
  args: {
    label: 'Choose Time',
    popoverTitle: 'Choose Time',
    selectionType: 'multiple',
    onSelection: (selection) => {
      console.log('Selected date or range:', selection);
    }
  },
};
