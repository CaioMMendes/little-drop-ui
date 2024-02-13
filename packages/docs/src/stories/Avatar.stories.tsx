import type { StoryObj, Meta } from "@storybook/react";
import {
  Avatar,
  AvatarProps,
  AvatarImage,
  AvatarFallback,
} from "@little-drop-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    children: (
      <>
        <AvatarFallback></AvatarFallback>
        <AvatarImage
          src="https://github.com/CaioMMendes.png"
          alt="Caio Martins"
        />
      </>
    ),
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    children: (
      <>
        <AvatarFallback></AvatarFallback>
        <AvatarImage src={undefined} alt="Caio Martins" />
      </>
    ),
  },
};
