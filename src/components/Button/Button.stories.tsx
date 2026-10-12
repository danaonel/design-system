import { fn } from 'storybook/test';

import { Button } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/arg-types
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
};

export const Default = {
  args: {
    primary: true,
    label: 'Button',
    children: 'Button',
  },
  story: {
    parameters: {
      design: {
        type: 'figma',
        url: 'https://www.figma.com/design/ox3Gb2xmV4WwWJ13aA5fnE/Calendar-Learning?node-id=0-1'
      }
    }
  }
};