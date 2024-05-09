import { SVGProps } from '../SVGProps'
type viewBoxProps = {
  viewBox?: string
  path?: string
}
export default function HeartIcon({ fill, height, width, className, viewBox, path }: SVGProps & viewBoxProps) {
  return (
    <>
      <svg
        width={width || `12`}
        height={height || `12`}
        viewBox={viewBox || '0 0 12 12'}
        fill={fill || `currentColor`}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d={
            path ||
            'M10.1 16.3752L10 16.4752L9.89 16.3752C5.14 12.0652 2 9.2152 2 6.3252C2 4.3252 3.5 2.8252 5.5 2.8252C7.04 2.8252 8.54 3.8252 9.07 5.1852H10.93C11.46 3.8252 12.96 2.8252 14.5 2.8252C16.5 2.8252 18 4.3252 18 6.3252C18 9.2152 14.86 12.0652 10.1 16.3752ZM14.5 0.825195C12.76 0.825195 11.09 1.6352 10 2.9052C8.91 1.6352 7.24 0.825195 5.5 0.825195C2.42 0.825195 0 3.2352 0 6.3252C0 10.0952 3.4 13.1852 8.55 17.8552L10 19.1752L11.45 17.8552C16.6 13.1852 20 10.0952 20 6.3252C20 3.2352 17.58 0.825195 14.5 0.825195'
          }
          fill={fill || `currentColor`}
        />
      </svg>
    </>
  )
}
