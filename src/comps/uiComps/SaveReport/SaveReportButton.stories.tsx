import { StoryFn, Meta } from '@storybook/react'
import FavouriteButton from './SaveReportButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Basic/FavouriteButton',
  component: FavouriteButton,
  tags:["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof FavouriteButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof FavouriteButton> = (args) => <FavouriteButton {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  selected: true,
  className: '',
}
