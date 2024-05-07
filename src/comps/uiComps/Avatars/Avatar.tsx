import React, { useState } from "react";
import clsx from "clsx";

export interface IAvatar {
  src?: string;
  shape?: "circular" | "rounded";
  // For Sizes
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  presenceState?: "active" | "idle" | "inActive";
  bordered?: boolean;
  presence?: boolean;
  name?: string;
  withNameInitials?: boolean;
  disabled?: boolean;
  presenceIcon?: React.ReactNode;
  icon?: React.ReactNode;
}

const sizes: Record<IAvatar["size"] & string, string> = {
  xs: "h-6 w-6",
  sm: "h-7 w-7",
  md: "h-8 w-8",
  lg: "h-10 w-10",
  xl: "h-12 w-12",
  xxl: "",
};
const avatarIconSize = {
  xs: "scale-[.8]",
  sm: "scale-[1]",
  md: "scale-[1.2]",
  lg: "scale-[1.5]",
  xl: "scale-[1.5]",
  xxl: "",
};

const presenceIconSizes: Record<IAvatar["size"] & string, string> = {
  xs: "scale-[0.8]",
  sm: "scale-[1]",
  md: "scale-[1]",
  lg: "scale-[1]",
  xl: "scale-[1]",
  xxl: "",
};

const textSize = {
  xs: "text-xs",
  sm: "text-[13px]",
  md: "text-sm",
  lg: "text-base",
  xl: "text-xl",
  xxl: "",
};

const shapes: Record<IAvatar["shape"] & string, string> = {
  circular: "rounded-full",
  rounded: "rounded-md",
};

const presenceStates: Record<IAvatar["presenceState"] & string, string> = {
  active: "jg-green-500",
  idle: "jg-yellow-800",
  inActive: "jg-metal-400",
};

const Avatar: React.FC<IAvatar> = ({
  src = "",
  shape = "circular",
  size = "md",
  bordered = true,
  presence = false,
  icon,
  disabled = false,
  presenceState = "active",
  name = "",
  withNameInitials = false,
  presenceIcon,
}) => {
  const [img, setImg] = useState(src);

  const className = clsx(
    bordered ? "border border-jg-metal-100 " : "",
    "flex-shrink-0 block overflow-hidden object-cover",
    sizes[size] || sizes.md,
    shapes[shape] || shapes.circular,
    bordered && "ring-2 ring-white",
  );

  const Presence = () => (
    <>
      {presence && (
        <span
          className={`${
            size && presenceIconSizes[size]
          } absolute bottom-0 right-0 w-3 h-3 rounded-full bg-white shadow-md border-[2px] border-white flex items-center justify-center`}
        >
          {presenceIcon && presenceIcon ? (
            <span
              className={`text-${presenceState && presenceStates[presenceState]} scale-[.5]`}
            >
              {presenceIcon}
            </span>
          ) : (
            <span
              className={`w-full h-full bg-${presenceState && presenceStates[presenceState]} rounded-full`}
            ></span>
          )}
        </span>
      )}
    </>
  );

  if (withNameInitials) {
    return (
      <span className={`relative inline-block ${disabled && "opacity-40"}`}>
        <AvatarWithInitials className={className} name={name} size={size} />
        <Presence />
      </span>
    );
  }

  if (img) {
    return (
      <span className={`relative inline-block ${disabled && "opacity-40"}`}>
        <img
          className={className}
          src={src}
          alt={name}
          loading="lazy"
          onError={() => {
            setImg("");
          }}
        />
        <Presence />
      </span>
    );
  }

  return (
    <span role="avatar" className={`relative inline-block ${disabled && "opacity-40"}`}>
      {icon && icon ? (
        <AvatarWithIcon className={className} icon={icon} size={size} />
      ) : (
        <EmptyAvatar className={className} />
      )}
      <Presence />
    </span>
  );
};

function AvatarWithIcon({
  className = "h-8 w-8 rounded-full",
  icon,
  size = "md",
}: {
  className?: string;
  icon: React.ReactNode;
  size?: IAvatar["size"];
}) {
  return (
    <span
      className={`inline-flex items-center justify-center bg-jg-grey-100  border border-jg-metal-100  shadow ${className}`}
    >
      <span
        className={`${avatarIconSize[size]} font-normal leading-none text-jg-metal-700`}
      >
        {icon}
      </span>
    </span>
  );
}

function AvatarWithInitials({
  className = "h-8 w-8 rounded-full",
  name = "",
  size = "md",
}: {
  className?: string;
  name: string;
  size?: IAvatar["size"];
}) {
  return (
    <span
      className={`inline-flex items-center justify-center bg-jg-grey-50  border border-jg-metal-200  shadow ${className}`}
    >
      <span
        className={`${textSize[size]} font-normal leading-none text-jg-metal-300`}
      >
        {createAvatarInitials(name)}
      </span>
    </span>
  );
}

function EmptyAvatar({
  className = "inline-block rounded-full overflow-hidden h-10 w-10",
}: {
  className?: string;
}) {
  return (
    <span className={`bg-gray-100 ${className}`}>
      <svg
        className="h-full w-full text-gray-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </span>
  );
}

const createAvatarInitials = (name = ""): string =>
  name
    .match(/(^\S\S?|\s\S)?/g)!
    .map((v) => v.trim())
    .join("")
    .match(/(^\S|\S$)?/g)!
    .join("")
    .toLocaleUpperCase();

export default Avatar;
