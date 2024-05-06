import React, { useState } from "react";
import DropdownCustom from "./DropdownCustom";

const DropdownTest = () => {
  const options = [
    {
      value: 1,
      label: "Option 1 as selected",
    },
    {
      value: 2,
      label:
        "Item 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sed porro soluta natus minima fugit nisi iusto voluptates sint provident? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugit, quas at optio laborum animi fuga modi laudantium sit esse! At aut, quasi eveniet culpa repellendus quidem corporis! Officiis, sequi.",
    },
    {
      value: 3,
      label: "Option 3",
    },
    {
      value: 4,
      label: "Option 4",
    },
    {
      value: 5,
      label: "Option 5",
    },
    {
      value: 6,
      label: "Option 6",
    },
    {
      value: 7,
      label: "Option 7",
    },
  ];

  const [optionTitle, setOptionTitle] = useState<string>("Select option");

  return (
    <div>
      <div className="">
        <DropdownCustom
          options={options}
          optionTitle={optionTitle}
          setOptionTitle={setOptionTitle}
          dropdownHeight="h-36"
        />
      </div>
    </div>
  );
};

export default DropdownTest;
