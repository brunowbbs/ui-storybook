import { Story, Meta } from "@storybook/react";

import ProgressBar, {
  ProgressBarProps,
} from "../components/ProgressBar/ProgressBar";

export default {
  title: "Example/ProgressBar",
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Deseja realmente sair?",
};
