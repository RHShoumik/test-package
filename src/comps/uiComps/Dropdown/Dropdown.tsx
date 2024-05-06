import React from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  Children,
  Fragment,
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from "react";
import IconMenuDown from "@/comps/icons/IconMenuDown";

import { CompBaseProps } from "../_base/types/CompBaseProps";
import { DropdownItemProps } from "./DropdownItem";
import DropdownItemGroup from "./DropdownItemGroup";
import Button from "../Button/Button";

type DropdownProps = CompBaseProps & {
  text?: string | import("react").ReactNode;
  btnSize?: "xs" | "sm" | "md" | "lg" | "xl";
  fillType?: "solid" | "outline" | "plain";
  btnColor?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "complementary";
  disabled?: boolean;
  // onClick?: (item: ButtonProps)=> void
  customButton?: React.ReactNode;
  icon?: import("react").ReactNode;
  btnIconClassName?: string;
  // onClick?: ()=> void,
  onSelect?: (value: any, index: number, item: DropdownItemProps) => void;
};
const groupByKey = (children: ReactNode) => {
  const items: any[] = [];
  Children.map(children, (child, index) => {
    items.push(child);
  });

  return items.reduce((hash, child) => {
    const item = child as ReactElement<PropsWithChildren<DropdownItemProps>>;
    if (item.props.groupName === undefined) {
      return Object.assign(hash, {
        ".": ((hash["."] || []) as []).concat(child),
      });
    }
    return Object.assign(hash, {
      [item.props.groupName]: ((hash[item.props.groupName] || []) as []).concat(
        child,
      ),
    });
  }, {});
};

function Dropdown(props: DropdownProps) {
  const {
    children,
    disabled,
    text,
    btnSize = "md",
    btnColor = "primary",
    fillType = "solid",
    icon,
    customButton,
    className,
    btnIconClassName,
    onSelect = (value: any, index: number, item: DropdownItemProps) => {},
  } = props;

  const arrayChildren = Children.toArray(children);

  const menuItemsCls =
    "origin-top-right absolute right-0 mt-1.5 min-w-max rounded-sm shadow-lg bg-white dark:bg-gray-800 z-10";

  const groupWiseChildren: object = groupByKey(arrayChildren);
  const groups = [];
  for (const [k, _children] of Object.entries(groupWiseChildren)) {
    groups.push(
      <DropdownItemGroup key={k}>
        {Children.map(_children, (child, index) => {
          const item = child as ReactElement<
            PropsWithChildren<DropdownItemProps>
          >;
          // item.props.name = 'ss'
          // const _child= child as ReactElement;

          return (
            <Menu.Item>
              {({ active }) => (
                <div
                  key={index}
                  onClick={(e) => {
                    onSelect(item.props.value, index, item.props);
                  }}
                  className={active ? "" : ""}
                  role="menuitem"
                >
                  {React.cloneElement(child, { active })}
                </div>
              )}
            </Menu.Item>
          );
        })}
      </DropdownItemGroup>,
    );
  }
  return (
    <div className={`${className} relative inline-block text-left `}>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex">
          {customButton ? (
            customButton
          ) : (
            <Button
              className={`${btnIconClassName} ${className}`}
              disabled={disabled}
              icon={icon}
              iconPosition="left"
              btnColor={btnColor}
              btnSize={btnSize}
              fillType={fillType}
              as="span"
              text={
                <span className="inline-flex">
                  <span>
                    {text}
                    &nbsp;
                  </span>
                  <span className="btn-icon">
                    <IconMenuDown />
                  </span>
                </span>
              }
            />
          )}
        </Menu.Button>
        {!disabled && (
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-80 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-80 scale-95"
          >
            <Menu.Items className={menuItemsCls}>
              <div
                className="py-1 divide-y divide-gray-100 min-w-[140px]"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {groups.map((group) => group)}
              </div>
            </Menu.Items>
          </Transition>
        )}
      </Menu>
    </div>
  );
}

export default Dropdown;
