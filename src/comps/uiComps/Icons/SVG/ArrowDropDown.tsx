import { SVGProps } from '../SVGProps'

export default function ArrowDropDown({ fill, height, width, className }: SVGProps) {
  return (
    <>
      <svg
        width={width || `20`}
        height={height || `20`}
        viewBox="0 0 20 20"
        className={className}
        fill={fill || `currentColor`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.0002 12.0834L5.8335 7.91675H14.1668L10.0002 12.0834Z" fill={fill || `currentColor`} />
      </svg>
    </>
  )
}
