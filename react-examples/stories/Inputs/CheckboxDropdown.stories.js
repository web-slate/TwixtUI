import React, { useState } from 'react';
import TwixtCheckBoxDropdown from '../../../react/src/Inputs/CheckBoxDropdown';

export default {
  title: 'Inputs/TwixtCheckboxDropdown',
  component: TwixtCheckBoxDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultSelected: {
      control: 'array',
      description: 'The default selected checkbox options',
      defaultValue: ['Books'],
    },
    selectedItemsLabel: {
      control: 'text',
      description: 'Custom label for selected items',
      defaultValue: (count) => `${count} Item${count > 1 ? 's' : ''} selected`,
    },
  },
  args: {}
};

const Template = (args) => {
  const [selected, setSelected] = useState(args.defaultValue || []);

  const handleCheckboxChange = (updatedSelection) => {
    setSelected(updatedSelection);
  };

  const options = [
    { label: 'Books', value: 'Books', disabled: false },
    { label: 'Electronics', value: 'Electronics', disabled: false },
    { label: 'Clothing', value: 'Clothing', disabled: false },
    { label: 'Home Appliances', value: 'Home Appliances', disabled: false },
    { label: 'Groceries', value: 'Groceries', disabled: false },
    { label: 'Toys', value: 'Toys', disabled: false }, 
  ];

  return (
    <TwixtCheckBoxDropdown
      checkBoxOptions={options}
      onChange={handleCheckboxChange}
      defaultValue={selected}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  defaultValue: ['Books'],
};

export const DefaultVariant = Template.bind({});
DefaultVariant.args = {
  defaultValue: ['Books'],
  variant: 'default',
};

export const PrimaryVariant = Template.bind({});
PrimaryVariant.args = {
  defaultValue: ['Electronics'],
  variant: 'primary',
};

export const SecondaryVariant = Template.bind({});
SecondaryVariant.args = {
  defaultValue: ['Clothing'],
  variant: 'secondary',
};

export const WithFilter = Template.bind({});
WithFilter.args = {
  defaultValue: ['Groceries'],
  enableFilter: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  defaultValue: ['Toys'],
  disabled: true,
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  defaultValue: ['Books', 'Electronics', 'Clothing'],
  selectedItemsLabel: (count) => `${count} categories selected`,
};
