import { useEffect, useRef, useState } from 'react'

import { CompBaseProps } from '../../_base/types/CompBaseProps'
import { Disclosure, Transition } from '@headlessui/react'
import { useAccordionContext, useAccordionItemContext } from '../AccordionProvider'
type AccordionPanelProps = CompBaseProps & {}
const AccordionPanel = ({ children }: AccordionPanelProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [maxH, setMaxH] = useState<number>(0)
  const { index, onChange } = useAccordionItemContext()
  const { currentOpen } = useAccordionContext()
  useEffect(() => {
    setMaxH(currentOpen.findIndex((e) => e === index) > -1 ? ref.current?.scrollHeight || 0 : 0)
  }, [])
  return (
    <Transition
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-y-95 opacity-0"
      enterTo="transform scale-y-100 opacity-100"
      leave="transition duration-100 ease-out"
      leaveFrom="transform scale-y-100 opacity-100"
      leaveTo="transform scale-y-95 opacity-0"
      beforeEnter={() => {
        setMaxH(ref.current?.scrollHeight || 0)
        onChange({ isOpen: true })
      }}
      beforeLeave={() => {
        setMaxH(0)
        onChange({ isOpen: false })
      }}
    >
      <Disclosure.Panel ref={ref} style={{ transition: 'max-height 0.1s ease-out', maxHeight: `${maxH}px` }}>
        {children}
      </Disclosure.Panel>
    </Transition>
  )
}

export default AccordionPanel
