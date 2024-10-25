"use client";
import { ChangeEvent, useState, useEffect } from "react";
import "./FormElements.scss";
import { TInputWithSearch, TOption } from "@/types/types";

import SVG from "react-inlinesvg";

import Input from "@/components/FormElements/Input";
import InputOptions from "@/components/FormElements/InputOptions";

const listOptions = [
  {
    id: 1,
    name: "Менеджер",
  },
  {
    id: 2,
    name: "Дизайнер",
  },
  {
    id: 3,
    name: "Руководитель направления",
  },
  {
    id: 4,
    name: "React разработчик",
  },
];

const InputWithSearch = ({ isMulty, ...rest }: TInputWithSearch) => {
  const [filterOptions, setFilterOptions] = useState(listOptions);
  const [inputValue, setInputValue] = useState("");
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const [selectOptions, setSelectOptions] = useState<TOption[]>([]);

  useEffect(() => {
    <InputOptions options={filterOptions} onClick={handleOnClick} />;
  }, [filterOptions]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value.trim() === "") {
      setIsOpenOptions(false);
    } else {
      setIsOpenOptions(true);
    }

    const filterValue = listOptions?.filter((option) =>
      option.name.toLowerCase().includes(e.target.value.trim().toLowerCase()),
    );

    if (filterValue.length === 0) {
      setFilterOptions([{ id: 0, name: "Другое" }]);
    } else {
      setFilterOptions(filterValue);
    }
  };

  const handleOnClick = (item: TOption) => {
    if (isMulty) {
      setSelectOptions([...selectOptions, item]);
      setInputValue("");
      // setFilterOptions(filterOptions.filter((o) => o !== item));
      setFilterOptions([]);
    } else {
      setInputValue(item.name);
    }

    setIsOpenOptions(false);
  };

  const deleteOption = (item: TOption) => {
    setSelectOptions(selectOptions.filter((o) => o !== item));
  };

  return (
    <div className="input-with-search">
      {isMulty && (
        <ul className="tips">
          {selectOptions.map((item) => (
            <li className="tips__item" key={item.id}>
              {item.name}
              <button
                className="tips__button"
                type="button"
                onClick={() => {
                  deleteOption(item);
                }}
              >
                <SVG className="tips__img" src="/img/trash.svg" />
              </button>
            </li>
          ))}
        </ul>
      )}
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
      {/* <ul className="tips">
        {listOptions.map((item, index) => (
          <li className="tips__item" key={index}>
            {item}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default InputWithSearch;
