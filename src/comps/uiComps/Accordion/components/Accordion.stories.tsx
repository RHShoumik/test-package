import Accordion from './Accordion'
import AccordionItem from './AccordionItem'
import AccordionButton from './AccordionButton'
import AccordionPanel from './AccordionPanel'
import ContentFiller from '../../_base/ContentFiller'
import { useEffect } from 'react'
import { useAccordionItemContext } from '../AccordionProvider'
import { Meta, StoryFn } from '@storybook/react'

// export default createSBItem(Accordion, { section: 'Basic', title: 'Accordion' })
export default {
  title: 'Basic/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Accordion>

const AccordionContent = () => {
  console.log('AccordionContent')
  useEffect(() => {
    console.log('PR  AccordionContent')
  }, [])
  return (
    <>
      <ContentFiller len={500} />
    </>
  )
}

const CustomItemButton = ({ label }: { label: string }) => {
  const { open } = useAccordionItemContext()
  return (
    <>
      {`${open ? 'Open' : 'Closed'}`} - {label}
    </>
  )
}
const tpl: StoryFn<typeof Accordion> = (args) => {
  return (
    <div className="w-[600px]">
      <Accordion {...args}>
        <AccordionItem>
          <AccordionButton>
            <div className="p-2">Accordion Button 1</div>
          </AccordionButton>
          <AccordionPanel>
            <div className="p-2">
              <ContentFiller len={500} />
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <div className="p-2">Accordion Button 2</div>
          </AccordionButton>
          <AccordionPanel>
            <div className="p-2">
              <ContentFiller len={100} />
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <div className="p-2">
              <CustomItemButton label="Accordion Button 3" />
            </div>
          </AccordionButton>
          <AccordionPanel>
            <div className="p-2">
              <AccordionContent />
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export const Basic = tpl.bind({})
Basic.args = {
  defaultOpen: -1,
  alwaysOpen: false,
}

export const AlwaysOpen = tpl.bind({})
AlwaysOpen.args = {
  defaultOpen: 0,
  alwaysOpen: true,
}

export const DefaultOpen = tpl.bind({})
DefaultOpen.args = {
  defaultOpen: 2,
  alwaysOpen: true,
}
