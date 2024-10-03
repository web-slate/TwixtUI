import React from 'react';
import TwixtTextarea from '../../../react/src/Inputs/Textarea';
import TwixtButton from '../../../react/src/CallsToAction/Button';
import TwixtIcon from '../../../react/src/Icon';
import TwixtFlexBox from '../../../react/src/Containers/FlexBox'
import TwixtBoxItem from '../../../react/src/Containers/BoxItem'


export default {
  title: 'Inputs/TwixtTextarea',
  component: TwixtTextarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    validationState: {
      control: 'radio',
      options: [null, 'error', 'success'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    type: {
      control: 'select',
      options: ['default', 'underline'],
    },
  },
};

// Template for all the stories
const Template = (args) => <TwixtTextarea {...args} />;

// Default Textarea
export const Default = Template.bind({});
Default.args = {
  label: 'Comment',
  placeholder: 'Enter your comment...',
  type: 'default',
  size: 'default',
  autoHeight: false,
  helpMessage: '',
  showWordCount: false,
  validationState: null,
  disabled: false,
  readOnly: false,
};

// Small Textarea
export const Small = Template.bind({});
Small.args = {
  label: 'Small Comment',
  placeholder: 'Enter a short comment...',
  size: 'small',
};

// Large Textarea
export const Large = Template.bind({});
Large.args = {
  label: 'Large Comment',
  placeholder: 'Enter a detailed comment...',
  size: 'large',
};

// Underline Textarea
export const Underline = Template.bind({});
Underline.args = {
  label: 'Comment with Underline',
  placeholder: 'Enter your text...',
  type: 'underline',
};

// Disabled Textarea
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Comment',
  placeholder: 'Cannot enter text...',
  disabled: true,
};

// Read-only Textarea
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Read-only Comment',
  placeholder: 'Read-only text...',
  readOnly: true,
  value: 'This is read-only',
};

// Auto Height Textarea
export const AutoHeight = Template.bind({});
AutoHeight.args = {
  label: 'Auto Height Comment',
  placeholder: 'Type more to expand...',
  autoHeight: true,
};

// Textarea with Help Message
export const WithHelpMessage = Template.bind({});
WithHelpMessage.args = {
  label: 'Question',
  placeholder: 'Leave your question here...',
  helpMessage: 'We will respond shortly.',
};

// Textarea with Word Count
export const WithWordCount = Template.bind({});
WithWordCount.args = {
  label: 'Feedback',
  placeholder: 'Enter your message...',
  showWordCount: true,
};

// Textarea with Error Validation
export const WithErrorValidation = Template.bind({});
WithErrorValidation.args = {
  label: 'Comment',
  placeholder: 'Type your message...',
  validationState: 'error',
};

// Textarea with Warning Validation
export const WithWarningValidation = Template.bind({});
WithWarningValidation.args = {
  label: 'Comment',
  placeholder: 'Type your message...',
  validationState: 'warning',
};

// Textarea with Success Validation
export const WithSuccessValidation = Template.bind({});
WithSuccessValidation.args = {
  label: 'Comment',
  placeholder: 'Type your message...',
  validationState: 'success',
};

// Right Bottom Send
export const RightBottomSendButton = Template.bind({});
RightBottomSendButton.args = {
  label: 'AI',
  placeholder: 'How can i help you today?',
  minRows: '7',
  cols: '50',
  rightBottom: (
    <TwixtFlexBox
      direction="row"
      rowGap="1"
      wrap
    >
      <>
        <TwixtBoxItem>
          <TwixtButton
            variant="transparent"
            hideLabel
            leftIcon={<TwixtIcon size="16" color="blue" type="mic" variant="filled" />}
            onClick={() => { alert('mic clicked') }}
            overwriteClass="px-1"
          />
        </TwixtBoxItem>
        <TwixtBoxItem>
          <TwixtButton
            variant="transparent"
            hideLabel
            leftIcon={<TwixtIcon size="16" color="blue" type="send" variant="filled" />}
            onClick={() => { alert('send clicked') }}
            overwriteClass="px-1"
          />
        </TwixtBoxItem>
      </>
    </TwixtFlexBox>
  )
};
