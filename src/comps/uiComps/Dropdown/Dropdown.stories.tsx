import { StoryFn, Meta } from "@storybook/react";
import Dropdown from "./Dropdown";
import { UserCircleIcon, UserIcon } from "@heroicons/react/16/solid";
import DropdownItem from "./DropdownItem";
import Avatar from "../Avatars";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Basic/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Dropdown>;
const baseArgs = {
  btnColor: "primary",
  btnSize: "md",
  fillType: "solid",
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Dropdown> = (args) => (
  <Dropdown {...args}>
    <DropdownItem name="Hello World" value={1} />
    <DropdownItem name="Lorem Ipsum" value={2} />
  </Dropdown>
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  text: "Basic Dropdown",
  btnColor: "primary",
  btnSize: "md",
  fillType: "solid",
};
export const WithIcon = Template.bind({});
WithIcon.args = {
  text: "Dropdown with icon",
  icon: <UserIcon />,
  btnColor: "primary",
  btnSize: "md",
  fillType: "solid",
};

export const WithIconOnly = Template.bind({});
WithIconOnly.args = {
  icon: <UserCircleIcon />,
  btnColor: "primary",
  btnSize: "md",
  fillType: "solid",
};

const TemplateWithIocn: StoryFn<typeof Dropdown> = (args) => (
  <Dropdown {...args}>
    <DropdownItem name="Hello World" value={1} icon={<UserIcon />} />
    <DropdownItem name="Lorem Ipsum" value={2} icon={<UserCircleIcon />} />
  </Dropdown>
);

export const ItemsWithIcon = TemplateWithIocn.bind({});
ItemsWithIcon.args = {
  text: "Items with Icons",
  btnColor: "primary",
  btnSize: "md",
  fillType: "solid",
};

const TemplateWithGroupDivide: StoryFn<typeof Dropdown> = (args) => (
  <Dropdown {...args}>
    <DropdownItem
      name="Hello World"
      groupName="test"
      value={1}
      icon={<UserIcon />}
    />
    <DropdownItem
      name="Lorem Ipsum"
      groupName="test"
      value={2}
      icon={<UserCircleIcon />}
    />
    <DropdownItem
      name="Hello World 2"
      groupName="test2"
      value={3}
      icon={<UserIcon />}
    />
    <DropdownItem
      name="Lorem Ipsum 2"
      groupName="test3"
      value={4}
      icon={<UserCircleIcon />}
    />
    <DropdownItem name="Lorem Ipsum 3" value={5} icon={<UserCircleIcon />} />
    <DropdownItem name="Lorem Ipsum 4" value={6} icon={<UserCircleIcon />} />
  </Dropdown>
);

export const ItemsWithGroup = TemplateWithGroupDivide.bind({});
ItemsWithGroup.args = {
  text: "Items with group",
  btnColor: "primary",
  btnSize: "md",
  fillType: "solid",
};

const TemplateWithCustomeItem: StoryFn<typeof Dropdown> = (args) => (
  <Dropdown {...args}>
    <DropdownItem
      name="Some text"
      groupName="test"
      value={1}
      icon={<UserIcon />}
    />
    <DropdownItem groupName="custom" value={5} icon={<UserCircleIcon />}>
      <Avatar
        {...{
          shape: "circular",
          size: "md",
          src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          bordered: false,
          name: "mg",
        }}
      />
    </DropdownItem>
  </Dropdown>
);

export const CustomItem = TemplateWithCustomeItem.bind({});
CustomItem.args = {
  text: "Custom item",
  btnColor: "primary",
  btnSize: "md",
  fillType: "solid",
};
