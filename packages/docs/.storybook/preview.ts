import { themes } from "@storybook/theming";
import type { Preview } from "@storybook/react";

import "@little-drop-ui/react/dist/output.css";

//Todo Arrumar a fonte, acho que não ta carregando a fonte roboto no preview

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
