import React from 'react';
import TwixtCheckbox  from '../../../react/src/Inputs/Checkbox';

export default {
  title: 'Inputs/TwixtCheckbox',
  component: TwixtCheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    checked: true,
    label: 'Checkbox Label',
  }
};

export const Default = () => <TwixtCheckbox label="Default checkbox" />;

export const SimpleAgreeCheckbox = {
  args: {
    checked: true,
    label: 'Accept Terms and Conditions',
    onChange: (newCheckedState) => console.log('Checkbox is now:', newCheckedState),
  },
}

export const UncheckedCheckbox = {
  args: {
    checked: false,
    label: 'Subscribe to Newsletter',
    onChange: (newCheckedState) => console.log('Checkbox is now:', newCheckedState),
  },
};


export const Checked = () => (
  <TwixtCheckbox label="Checked checkbox" checked={true} />
);

export const Indeterminate = () => (
  <TwixtCheckbox label="Indeterminate checkbox" indeterminate={true} />
);

export const Disabled = () => (
  <TwixtCheckbox label="Disabled checkbox" disabled={true} />
);

export const CheckboxWithDescriptionAndLink = () => (
  <TwixtCheckbox
    label="Accept terms"
    description="Please read the terms and conditions carefully before agreeing."
  >
    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
      terms and conditions
    </a>
  </TwixtCheckbox>
);

export const CheckboxWithChildrenElements = () => (
  <TwixtCheckbox label="I agree to the following:">
    <div>
      <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
        Privacy Policy
      </a>
      {' and '}
      <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
        Terms of Service
      </a>
    </div>
  </TwixtCheckbox>
);

export const CheckboxOnTheRight = () => (
  <TwixtCheckbox label="Accept terms" position="right">
    <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">
      Read more
    </a>
  </TwixtCheckbox>
);

export const CheckboxWithDifferentColor = () => (
  <TwixtCheckbox label="Pear" checkboxColor="text-red-600" />
);

export const CheckboxWithOverwriteClass = () => (
  <TwixtCheckbox label="Custom Styled" overwriteClass="border-green-300" checkboxColor="text-green-500" />
);