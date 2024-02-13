import type { StoryObj, Meta } from "@storybook/react";
import { Input, InputProps } from "@little-drop-ui/react";

export default {
  title: "form/Input",
  component: Input,
  args: {
    placeholder: "Digite alguma coisa...",
  },
} as Meta<InputProps>;

export const Primary: StoryObj<InputProps> = {};

export const WithError: StoryObj<InputProps> = {
  args: {
    error: true,
  },
};
