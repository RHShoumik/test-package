import { createContext, useContext, useEffect, useState } from 'react'
import { CompBaseProps } from '../_base/types/CompBaseProps'

interface IAccordion {
  alwaysOpen?: boolean
  defaultOpen?: number
  currentOpen: number[]
  onChange: (arg: { isOpen: boolean; index: number }) => void
}

const Context = createContext<IAccordion>({ currentOpen: [-1], onChange: () => {} })

export const useAccordionContext = () => {
  return useContext(Context)
}
type AccordionProviderProps = CompBaseProps & {
  defaultOpen?: number
  alwaysOpen?: boolean
}
const AccordionProvider = ({ children, defaultOpen = 0, alwaysOpen = true }: AccordionProviderProps) => {
  const [currentOpen, setCurrentOpen] = useState<number[]>([])
  return (
    <Context.Provider
      value={{
        defaultOpen,
        currentOpen,
        alwaysOpen,
        onChange: ({ isOpen, index }) => {
          if (!alwaysOpen) {
            isOpen ? setCurrentOpen([index]) : setCurrentOpen([])
          } else {
            if (isOpen) setCurrentOpen([...currentOpen, ...[index]])
            else {
              const _currentOpen = [...currentOpen]
              _currentOpen.splice(index, 1)
              setCurrentOpen(_currentOpen)
            }
          }
        },
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default AccordionProvider

interface IAccordionItem {
  index: number
  name?: string
  open: boolean
  onChange: (arg: { isOpen: boolean }) => void
}

const ContextItem = createContext<IAccordionItem>({ index: 0, open: false, onChange: () => {} })

export const useAccordionItemContext = () => {
  return useContext(ContextItem)
}
type AccordionItemProviderProps = CompBaseProps & {
  index: number
}
export const AccordionItemProvider = ({ children, index }: AccordionItemProviderProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const { onChange } = useAccordionContext()
  useEffect(() => {
    onChange({ index, isOpen: open })
  }, [open])
  return (
    <ContextItem.Provider
      value={{
        index,
        open,
        onChange: ({ isOpen }) => {
          setOpen(isOpen)
        },
      }}
    >
      {children}
    </ContextItem.Provider>
  )
}
