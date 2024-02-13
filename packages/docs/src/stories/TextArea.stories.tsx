import {
  TextArea,
  TextAreaContainer,
  TextAreaContainerProps,
  TextAreaLabel,
  TextAreaLabelText,
} from "@little-drop-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "form/TextAreaWithContainer",
  component: TextAreaContainer,
} as Meta<TextAreaContainerProps>;

export const Primary: StoryObj<TextAreaContainerProps> = {
  args: {
    children: (
      <>
        <TextAreaLabel>
          <TextAreaLabelText>Nome:</TextAreaLabelText>
          <TextArea placeholder="Digite alguma coisa..." className="w-full" />,
        </TextAreaLabel>
      </>
    ),
  },
};

export const WithError: StoryObj<TextAreaContainerProps> = {
  args: {
    error: true,
    errorMessage: "O nome digitado é inválido",
    children: (
      <>
        <TextAreaLabel>
          <TextAreaLabelText>Nome:</TextAreaLabelText>
          <TextArea placeholder="Digite alguma coisa..." className="w-full" />,
        </TextAreaLabel>
      </>
    ),
  },
};

export const TruncateTest: StoryObj<TextAreaContainerProps> = {
  args: {
    error: true,
    errorMessage:
      "O nome digitado é inválido asd asdasda adsdasdasd asdasdadsa asdasdads a asdasda adsdasdasd asdasdadsa asdasdads a asdasda adsdasdasd asdasdadsa asdasdads asdad asdasd asda asdasda adsdasdasd asdasdadsa asdasdads asdad asdasd asda asdasda adsdasdasd asdasdadsa asdasdads asdad asdasd asda",
    children: (
      <>
        <TextAreaLabel>
          <TextAreaLabelText>Nome:</TextAreaLabelText>
          <TextArea placeholder="Digite alguma coisa..." className="w-full" />,
        </TextAreaLabel>
      </>
    ),
  },
};
