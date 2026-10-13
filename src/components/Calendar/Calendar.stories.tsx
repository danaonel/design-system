import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { Calendar } from './Calendar';

/**
 * Calendar Component
 * 
 * A full-featured calendar component with date selection and navigation.
 * 
 * Code generated via Slingshot tool based on Figma design specifications (`/Initiate Figma to Code`)
 */
const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/ox3Gb2xmV4WwWJ13aA5fnE/Calendar-Learning?node-id=0-1'
    }
  },
  argTypes: {
    selectedDate: {
      control: 'date',
      description: 'Currently selected date',
    },
    initialMonth: {
      control: 'date',
      description: 'Initial month to display',
    },
  },
  args: {
    onDateSelect: fn(),
    onTodayClick: fn(),
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default calendar showing January 2021 with 7th selected (matches Figma design)
 */
export const Default: Story = {
  args: {
    initialMonth: new Date(2021, 0, 1),
    selectedDate: new Date(2021, 0, 7),
  },
};

/**
 * Current month calendar
 */
export const CurrentMonth: Story = {
  args: {
    initialMonth: new Date(),
    selectedDate: new Date(),
  },
};

/**
 * Calendar without selection
 */
export const WithoutSelection: Story = {
  args: {
    initialMonth: new Date(2021, 0, 1),
  },
};

/**
 * February in a leap year
 */
export const FebruaryLeapYear: Story = {
  args: {
    initialMonth: new Date(2024, 1, 1),
    selectedDate: new Date(2024, 1, 29),
  },
};

/**
 * December month
 */
export const December: Story = {
  args: {
    initialMonth: new Date(2023, 11, 1),
    selectedDate: new Date(2023, 11, 25),
  },
};
