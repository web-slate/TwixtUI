import React from 'react';
import TwixtDatePicker from '../../../react/src/Inputs/DateOrTimeInput/DatePicker';

export default {
  title: 'Inputs/TwixtDatePicker',
  component: TwixtDatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    selectionType: '',
    onSelection: () => { },
    children: null,
  },
};

export const SingleSelection = {
  args: {
    label: 'Choose Date',
    popoverTitle: 'Choose Date',
    dateFormat: 'dd/MM/yyyy',
    selectionType: 'single',
    onSelection: (selection) => {
      console.log('Selected date or range:', selection);
    },
    children: (
      <input type="text" placeholder="Choose Date" />
    )
  },
};

export const RangeSelection = {
  args: {
    label: 'Choose Range Date',
    popoverTitle: 'Choose Range Date',
    dateFormat: 'dd/MM/yyyy',
    selectionType: 'multiple',
    onSelection: (selection) => {
      console.log('Selected date or range:', selection);
    },
    children: (
      <input type="text" label="Range Selection" />
    )
  },
};
