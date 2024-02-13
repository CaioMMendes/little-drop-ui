import type { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "@little-drop-ui/react";

export default {
  title: "form/Button",
  component: Button,
  args: {
    children: "Submit",
    variant: "primary",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: {
        type: "inline-radio",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onclick: {
      action: "click",
    },
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
