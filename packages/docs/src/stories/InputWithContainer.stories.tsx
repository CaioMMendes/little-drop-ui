import {
  Input,
  InputContainer,
  InputContainerProps,
  InputLabel,
  InputLabelText,
} from "@little-drop-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Data display/InputWithContainer",
  component: InputContainer,
} as Meta<InputContainerProps>;

export const Primary: StoryObj<InputContainerProps> = {
  args: {
    children: (
      <>
        <InputLabel>
          <InputLabelText>Nome:</InputLabelText>
          <Input placeholder="Digite alguma coisa..." className="w-full" />,
        </InputLabel>
      </>
    ),
  },
};

export const WithError: StoryObj<InputContainerProps> = {
  args: {
    error: true,
    errorMessage: "O nome digitado é inválido",
    children: (
      <>
        <InputLabel>
          <InputLabelText>Nome:</InputLabelText>
          <Input placeholder="Digite alguma coisa..." className="w-full" />,
        </InputLabel>
      </>
    ),
  },
};

export const TruncateTest: StoryObj<InputContainerProps> = {
  args: {
    error: true,
    errorMessage:
      "O nome digitado é inválido asd asdasda adsdasdasd asdasdadsa asdasdads a asdasda adsdasdasd asdasdadsa asdasdads a asdasda adsdasdasd asdasdadsa asdasdads asdad asdasd asda asdasda adsdasdasd asdasdadsa asdasdads asdad asdasd asda asdasda adsdasdasd asdasdadsa asdasdads asdad asdasd asda",
    errorNoWrap: true,
    children: (
      <>
        <InputLabel>
          <InputLabelText>Nome:</InputLabelText>
          <Input placeholder="Digite alguma coisa..." className="w-full" />,
        </InputLabel>
      </>
    ),
  },
};
