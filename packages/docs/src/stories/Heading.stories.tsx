import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@little-drop-ui/react";

export default {
  title: "typography/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum dolor sit amet.",
  },
} as Meta<HeadingProps>;

export const Normal_h2: StoryObj<HeadingProps> = {};

export const Secondary_h1: StoryObj<HeadingProps> = {
  args: {
    level: "h1",
  },
};
