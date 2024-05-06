import { StoryFn, Meta } from "@storybook/react";
import IconApple from "@/comps/icons/IconApple";
import Avatar, { IAvatar } from "./Avatar";

export default {
  title: "Basic/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
  },
} as Meta<typeof Avatar>;

const Template: StoryFn<IAvatar> = (args) => <Avatar {...args} />;

export const SingleAvatar = Template.bind({});
SingleAvatar.args = {
  shape: "circular",
  size: "md",
  src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  bordered: false,
  name: "mg",
  presence: false,
  presenceIcon: <IconApple />,
  icon: <IconApple />,
  presenceState: "idle",
  disabled: false,
};

export const EmptyAvatar = Template.bind({});
EmptyAvatar.args = {
  shape: "circular",
  size: "md",
  bordered: false,
  withNameInitials: false,
  presence: false,
  presenceState: "idle",
  disabled: false,
};

export const AvatarWithInitials = Template.bind({});
AvatarWithInitials.args = {
  shape: "circular",
  size: "md",
  bordered: false,
  withNameInitials: true,
  name: "mg",
  src: "",
  presence: false,
  disabled: false,
};
