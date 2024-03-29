import React from "react";
import { HvInfoMessage } from "../../..";

export default {
  title: "Forms/Form Element Blocks/Info Message",
  parameters: {
    componentSubtitle: null,
    usage: 'import { HvInfoMessage } from "@hv/uikit-react-core"',
  },
  component: HvInfoMessage,
};

export const Main = () => <HvInfoMessage id="infoMessage">Info message</HvInfoMessage>;

export const DisabledInfoMessage = () => {
  return (
    <HvInfoMessage id="infoMessage-disabled" disabled>
      Info message
    </HvInfoMessage>
  );
};

DisabledInfoMessage.parameters = {
  docs: {
    description: { story: "Info message showcasing the disabled state." },
  },
  pa11y: {
    ignore: [
      "region",
      // Text or images of text that are part of an inactive user interface component have no contrast requirement.
      // https://github.com/lumada-design/hv-uikit-react/issues/775#issuecomment-557167364
      "WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail",
      "color-contrast",
    ],
  },
};
