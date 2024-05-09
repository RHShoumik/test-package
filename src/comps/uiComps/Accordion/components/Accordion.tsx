import { Children } from 'react'
import { CompBaseProps } from '../../_base/types/CompBaseProps'
import AccordionProvider, { AccordionItemProvider } from '../AccordionProvider'

const ItemWraper = ({ children, index }: { index: number } & CompBaseProps) => {
  return <AccordionItemProvider index={index}>{children}</AccordionItemProvider>
}
type AccordionProps = CompBaseProps & {
  defaultOpen?: number
  alwaysOpen?: boolean
}
const Accordion = ({ children, defaultOpen, alwaysOpen }: AccordionProps) => {
  return (
    <>
      <AccordionProvider {...{ defaultOpen, alwaysOpen }}>
        {Children.map(children, (e, index) => (
          <ItemWraper index={index}>{e}</ItemWraper>
        ))}
      </AccordionProvider>
    </>
  )
}

export default Accordion
