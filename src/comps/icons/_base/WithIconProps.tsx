import classNames from "classnames";

export type IconBaseProps = {
  width?: string;
  height?: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "none";
  state?:
    | "default"
    | "primary"
    | "info"
    | "warning"
    | "error"
    | "inverse"
    | "complementary"
    | "disabled"
    | "none";
};
const sizeHash = {
  xs: "16",
  sm: "20",
  md: "24",
  lg: "30",
  xl: "36",
  none: undefined,
};

const colorHash = {
  default: "#455A64", //fill: var(--color-secondary-700, #455A64);
  primary: "#4CAF4F", //fill: var(--color-primary-500, #4CAF4F);
  info: "#2194F3", // fill: var(--color-info-500, #2194F3);
  warning: "#F9A825", //fill: var(--color-warning-800, #F9A825);
  error: "#F44236", //fill: var(--color-error-500, #F44236);
  inverse: "#FFFFFF", //fill: var(--color-based-50, #FFFFFF);
  complementary: "#7B1FA2", //fill: var(--color-complementary-700, #7B1FA2);
  disabled: "#B0BEC5", //fill: var(--color-secondary-200, #B0BEC5);
  none: undefined,
};

const WithIconProps = (
  props: IconBaseProps,
  createFn: (args: {
    width?: string;
    height?: string;
    fill?: string;
    className?: string;
  }) => React.ReactNode,
) => {
  const { size = "none", className, state = "none", width, height } = props;
  return (
    <>
      {createFn({
        width: width || sizeHash[size] || "20",
        height: height || sizeHash[size] || "20",
        fill: colorHash[state],
        className: classNames(className),
      })}
    </>
  );
};
export default WithIconProps;
