import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@little-drop-ui/react";

export default {
  title: "form/Button",
  component: Button,
  args: {
    children: "Submit",
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
  },
};
