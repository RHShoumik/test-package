import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import Button from "./Button";
import IconApple from "@/comps/icons/IconApple";

const meta = {
  title: "Basic/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: "Primary",
    btnSize: "lg",
    btnColor: "primary",
    disabled: false,
    fillType: "solid",
    rounded: false,
  },
};

export const WithIcon: Story = {
  args: {
    text: "Button with icon",
    btnSize: "lg",
    btnColor: "primary",
    disabled: false,
    fillType: "solid",
    rounded: false,
    icon: <IconApple />,
    iconPosition: "left",
  },
};
