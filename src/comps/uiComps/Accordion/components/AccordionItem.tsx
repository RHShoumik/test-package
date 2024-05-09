import { CompBaseProps } from '../../_base/types/CompBaseProps'
import { Disclosure } from '@headlessui/react'

type AccordionItemProps = CompBaseProps & {}

const AccordionItem = ({ children }: AccordionItemProps) => {
  return <Disclosure>{children}</Disclosure>
}

export default AccordionItem
