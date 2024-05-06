import WithIconProps, { IconBaseProps } from "./_base/WithIconProps";

const IconMenuDown = (props: IconBaseProps) => {
  return WithIconProps(props, ({ width, height, fill, className }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={fill || `currentColor`}
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M12 15L7 10H17L12 15Z" fill={fill || `currentColor`} />
      </svg>
    );
  });
};
export default IconMenuDown;
