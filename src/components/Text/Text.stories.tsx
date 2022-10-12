import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '../Text';

export default {
  title: 'Components/Text',
  component: Text,
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
        type: 'boolean',
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
};

export const Custom: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
};
