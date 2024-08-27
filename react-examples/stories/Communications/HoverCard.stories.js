import React from 'react';
import TwixtHoverCard from '../../../react/src/Communications/HoverCard';
import TwixtIcon from '../../../react/src/Icon';
import { format } from 'date-fns';

export default {
  title: 'Communications/TwixtHoverCard',
  component: TwixtHoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

const Template = (args) => <TwixtHoverCard {...args} />;

export const DefaultInRight = Template.bind({});
DefaultInRight.args = {
  cardDetails: {
    title: 'CEO',
    link: 'https://www.linkedin.com/in/sundarpichai/',
    avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQFrmDuWUxQoMg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715645354619?e=1730332800&v=beta&t=anVTKtG8AuE6DqTIdryd8lOZhdoAEqQgxcVwP5FmtdI',
    name: 'Sundar Pichai',
    role: 'CEO',
    viewLabel: 'View Profile',
    details: [
      {
        icon: <TwixtIcon type="office" variant="outline" />,
        content: 'Google Inc',
      },
      {
        icon: <TwixtIcon type="mobile" variant="filled" />,
        content: '(555) 123-4567',
      },
      {
        icon: <TwixtIcon type="mail" variant="outline" />,
        content: 'Sundar.Pichai@example.com',
      },
    ],
  },
  children: (
    <a href="#">Hover me default link</a>
  ),
};

export const WithIDLinkedInTop  = Template.bind({});
WithIDLinkedInTop.args = {
  ...DefaultInRight.args,
  position: 'top',
  children: (
    <button className="ml-auto py-1 px-3 bg-green-500 text-white text-sm rounded">
      Contact
    </button>
  ),
};
WithIDLinkedInTop.args.cardDetails = {
  ...DefaultInRight.args.cardDetails,
  id: 'ProfileID1231',
  idLink: 'https://www.linkedin.com/in/sundarpichai/',
}

export const WithMainTitleInBottom  = Template.bind({});
WithMainTitleInBottom.args = {
  ...DefaultInRight.args,
  position: 'bottom',
  children: (
    <a href="#" className="ml-auto text-sm text-green-500 hover:underline">
      View Details
    </a>
  ),
};
WithMainTitleInBottom.args.cardDetails = {
  ...DefaultInRight.args.cardDetails,
  id: 'ProfileID1231',
  idLink: 'https://www.linkedin.com/in/sundarpichai/',
  mainTitle: 'Google CEO (Main Title)',
  mainLink: 'https://www.linkedin.com/in/sundarpichai/',
}

export const WithDateLabelWithLeft  = Template.bind({});
WithDateLabelWithLeft.args = {
  ...DefaultInRight.args,
  position: 'left',
  children: (
    <a href="#" className="ml-auto text-sm text-green-500 hover:underline">
      View Details
    </a>
  ),
};
WithDateLabelWithLeft.args.cardDetails = {
  ...DefaultInRight.args.cardDetails,
  id: 'ProfileID1231',
  idLink: 'https://www.linkedin.com/in/sundarpichai/',
  mainTitle: 'Google CEO (Main Title)',
  mainLink: 'https://www.linkedin.com/in/sundarpichai/',
  when: '2024-08-27T00:00:00Z',
  whenFormat: 'MMM dd, yyyy',
  whenLabel: 'Commenced on ',
}
