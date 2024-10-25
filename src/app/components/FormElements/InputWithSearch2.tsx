"use client";
import { ChangeEvent, useState, useEffect } from "react";
import "./FormElements.scss";
import { TInput } from "@/types/types";

import Input from "@/components/FormElements/Input";
import InputOptions from "@/components/FormElements/InputOptions";

const listOptions = [
  "Менеджер",
  "Дизайнер",
  "Руководитель направления",
  "React разработчик",
];

const InputWithSearch = ({ ...rest }: TInput) => {
  const [filterOptions, setFilterOptions] = useState(listOptions);
  const [inputValue, setInputValue] = useState("");
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === "") {
      setIsOpenOptions(false);
    } else {
      setIsOpenOptions(true);
    }

    const filterValue = listOptions?.filter((option) =>
      option.toLowerCase().includes(e.target.value.trim().toLowerCase()),
    );

    if (filterValue.length === 0) {
      setFilterOptions(["Другое"]);
    } else {
      setFilterOptions(filterValue);
    }
  };

  const handleOnClick = (item: string) => {
    setInputValue(item);
    setIsOpenOptions(false);
  };

  return (
    <div className="input-with-search">
      <Input
        {...rest}
        value={inputValue}
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
      {isOpenOptions && (
        <InputOptions options={filterOptions} onClick={handleOnClick} />
      )}
    </div>
  );
};

export default InputWithSearch;
