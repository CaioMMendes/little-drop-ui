import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps } from "@little-drop-ui/react";

export default {
  title: "Box",
  component: Box,
  args: {
    children: <p>Lorem ipsum dolor sit amet.</p>,
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {
  args: {
    variant: "primary",
  },
};

export const Secondary: StoryObj<BoxProps> = {
  args: {
    variant: "secondary",
  },
};
