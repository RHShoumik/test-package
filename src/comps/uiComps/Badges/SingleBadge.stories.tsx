import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Badge, { BadgeProps } from './Badge'

export default {
  title: 'Basic/Badges',
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: 'text' },
    className: { control: 'text' },
  },
} as Meta<typeof Badge>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<React.FC<BadgeProps>> = (args) => {
  const { ...rest } = args
  return (
    <div>
      <Badge {...rest} />
    </div>
  )
}

export const SingleBadge = Template.bind({})

SingleBadge.args = {
  variant: 'primary',
  fillType: 'solid',
  size: 'md',
  label: 'Badge',
}
