import { CompBaseProps } from '../../_base/types/CompBaseProps'
import { Disclosure } from '@headlessui/react'
import { useEffect, useRef } from 'react'
import { useAccordionContext, useAccordionItemContext } from '../AccordionProvider'

type AccordionButtonProps = CompBaseProps & {}
const AccordionButton = ({ children }: AccordionButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { index, open } = useAccordionItemContext()
  const { currentOpen, alwaysOpen, defaultOpen } = useAccordionContext()
  useEffect(() => {
    if (currentOpen.length === 0 && defaultOpen === index) {
      ref.current?.click()
    }
  }, [])
  useEffect(() => {
    if (!alwaysOpen) {
      const nextOpenIndex = [...currentOpen].pop()
      if (nextOpenIndex !== undefined) {
        if (nextOpenIndex != index && open) {
          ref.current?.click()
        }
      }
    }
  }, [currentOpen])
  return (
    <Disclosure.Button as={'button'} ref={ref} className={'w-full'}>
      <div className="text-left">{children}</div>
    </Disclosure.Button>
  )
}

export default AccordionButton
