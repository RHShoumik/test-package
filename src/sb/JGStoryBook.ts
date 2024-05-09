import { Meta, StoryFn } from '@storybook/react'
import { JSXElementConstructor } from 'react'
export enum JGSBGROUP {
  BASIC = 'Basic',
  FORM = 'Form',
  OVERLAY = 'Overlay',
  NAV = 'Navigation',
  JG_COMP = 'JG Components',
  OTHER = 'Other',
  REPORT = 'Report & Dashboard',
  DATA_SVC = 'Data Service',
  MVP = 'MVP',
  EVENTMANAGEMENT = 'Event Management',
}
type createStoryBookItemArgInternal = {
  title: string | JGSBGROUP
  section: string
  component: React.ComponentType<any>
}
type createStoryBookItemArg = {
  title: string
  section: string
}
const createStoryBookItem = <T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>({
  title,
  section,
  component,
}: createStoryBookItemArgInternal) => {
  return {
    title: `${section}/${title}`,
    component: component,
  } as Meta<T>
}

const create = (component: React.ComponentType<any>, { title, section }: createStoryBookItemArg) => {
  return createStoryBookItem<typeof component>({ title, section, component })
}

const createTpl = <T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>(fn: StoryFn<T>) => {
  return fn
}

export { create as createSBItem, createTpl as createSBTpl }
