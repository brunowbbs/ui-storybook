import { Story, Meta } from "@storybook/react";

import Paragraph, { ParagraphProps } from "../components/Typography/Paragraph";

export default {
  title: "Typography/Paragraph",
  component: Paragraph,
  /*   argTypes: {
    backgroundColor: { control: "color" },
  }, */
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const ParagraphDefault = Template.bind({});
ParagraphDefault.args = {
  size: "default",
  children:
    "Lorem sint dolore exercitation duis ipsum duis exercitation elit magna amet sit cillum. Ad sint dolor culpa veniam id. Incididunt veniam amet officia ut veniam eiusmod velit aliquip excepteur enim sit. Quis deserunt exercitation sint laborum enim sunt sint laboris mollit duis esse.",
};

export const ParagraphSmall = Template.bind({});
ParagraphSmall.args = {
  size: "small",
  children:
    "Lorem sint dolore exercitation duis ipsum duis exercitation elit magna amet sit cillum. Ad sint dolor culpa veniam id. Incididunt veniam amet officia ut veniam eiusmod velit aliquip excepteur enim sit. Quis deserunt exercitation sint laborum enim sunt sint laboris mollit duis esse.",
};
