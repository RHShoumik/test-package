import  { useState } from "react";
import ArrowDropDown from "../Icons/SVG/ArrowDropDown";
type DropdownCustomProps = {
  options: {
    value: number;
    label: string;
  }[];
  optionTitle: string;
  setOptionTitle: any;
  dropdownHeight?: string;
  className?: string;
};
const DropdownCustom = ({
  options,
  optionTitle,
  className = "",
  setOptionTitle,
  dropdownHeight = "",
}: DropdownCustomProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOption = (e: any) => {
    setOptionTitle(e);
    setOpen(false);
  };

  return (
    <>
      <div
        className={`relative z-10 bg-white rounded p-2 border text-[13px] ${className && className}`}
      >
        <div
          className="cursor-pointer flex items-center justify-between gap-4"
          onClick={() => setOpen((preState) => !preState)}
        >
          <span className="truncate" title={optionTitle}>
            {optionTitle}
          </span>
          <span>
            <ArrowDropDown />
          </span>
        </div>
        <div
          className={`absolute ${
            open === true ? "visible" : "invisible"
          } top-full left-0 bg-white rounded border w-full overflow-auto ${dropdownHeight}`}
        >
          {options &&
            options.length > 0 &&
            options.map((option, i) => (
              <div
                className="overflow-hidden px-2 py-1 hover:text-white cursor-pointer hover:bg-blue-500"
                key={i}
                data-value={option.value}
                onClick={() => handleOption(option.label)}
              >
                {option.label}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DropdownCustom;
