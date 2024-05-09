import './style.css'

export type TooltipProps = {
  className?: string
  children?: React.ReactNode
  title?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const Tooltip = (props: TooltipProps): React.ReactElement => {
  const { children, title, position='bottom', className = 'flex' } = props
  return (
    <span className={className}>
      <span className="tooltip" data-position={position} data-tool-tip={title}>
        {children}
      </span>
    </span>
  )
}

export default Tooltip
