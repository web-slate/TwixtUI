import { fn } from '@storybook/test';
import TwixtPostItem from '../../react/src/PostItemList.js';

export default {
  title: 'Common/TwixtPostItem',
  component: TwixtPostItem ,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    title: 'Welcome to Twixt React  Component',
    desc: 'Explore the TwixtPostItem for improved layout designed to enhance your experience.'
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const postOne = {
  args: {
    items:[{name:'name',
     postedOn:'2/03/2023', 
     imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6KqC6o3QC_Cqr9khlI-HDHVJPnWAViS8hGynHYIulA&s',
      content:'i would like to share image', 
      likeCount:'1', 
      commentCount:1}]
  },
};
export const postTwo = {
  args: {
    items:[{name:'name',
     postedOn:'2/03/2023', 
     imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6KqC6o3QC_Cqr9khlI-HDHVJPnWAViS8hGynHYIulA&s',
      content:'i would like to share image', 
      likeCount:'1', 
      commentCount:1}]
  },
};



