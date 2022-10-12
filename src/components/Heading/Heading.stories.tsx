import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from '../Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    asChild: {
      control: {
        type: null,
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
  },
};

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
  },
};

export const Custom: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Lorem ipsum dolor sit amet, consectetur adipiscing</h1>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
};
