import { Story, Meta } from "@storybook/react";

import Confirm, { ConfirmProps } from "../components/Confirm/Confirm";

export default {
  title: "Example/Confirm",
  component: Confirm,
  /*   argTypes: {
    backgroundColor: { control: "color" },
  }, */
} as Meta;

const Template: Story<ConfirmProps> = (args) => <Confirm {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Deseja realmente sair?",
  onCancel: () => window.alert("cancelado"),
  onConfirm: () => window.alert("confirmado"),
};
