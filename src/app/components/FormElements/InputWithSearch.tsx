"use client";
import { ChangeEvent, useState } from "react";
import "./FormElements.scss";
import { TInputWithSearch, TOption } from "@/types/types";

import { useFormikContext, useField } from "formik";

import Input from "@/components/FormElements/Input";
import InputOptions from "@/components/FormElements/InputOptions";
import InputTips from "@/components/FormElements/InputTips";

const listOptions = [
  {
    id: 1,
    name: "Менеджер",
    tips: true,
  },
  {
    id: 2,
    name: "Дизайнер",
    tips: true,
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

const InputWithSearch = ({ isMulty, isTips, ...rest }: TInputWithSearch) => {
  const formik = useFormikContext();
  const [field] = useField(rest);

  // console.log(f);
  // console.log(field);
  const [options, setOptions] = useState(listOptions);
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const [selectOptions, setSelectOptions] = useState<TOption[]>(
    field.value ? [...field.value] : [],
  );
  const [isEmptyOptions, setIsEmptyOptions] = useState(
    listOptions.length === 0 ? true : false,
  );

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim() === "") {
      setIsOpenOptions(false);
    } else {
      setIsOpenOptions(true);
    }

    const filterValue = listOptions?.filter((option) =>
      option.name.toLowerCase().includes(e.target.value.trim().toLowerCase()),
    );

    const listFilter = filterValue?.filter(
      (option) => !selectOptions.includes(option),
    );

    setOptions(isMulty ? listFilter : filterValue);

    if (filterValue.length === 0 || listFilter.length === 0) {
      setIsEmptyOptions(true);
    } else {
      setIsEmptyOptions(false);
    }
  };

  const handleOnClick = (option: TOption) => {
    if (isMulty) {
      setSelectOptions([...selectOptions, option]);
      formik.setFieldValue(field.name, [...selectOptions, option]);
    } else {
      formik.setFieldValue(field.name, [option]);
    }

    setIsOpenOptions(false);
  };

  const deleteOption = (item: TOption) => {
    const deletedOptions = selectOptions.filter((o) => o !== item);

    setSelectOptions(deletedOptions);
    formik.setFieldValue(field.name, deletedOptions);
  };

  const getValue = () => {
    if (!isMulty && field.value.length !== 0) {
      return field.value[0]?.name;
    }
  };

  return (
    <div className="input-with-search">
      <InputTips
        isMulty={isMulty}
        isTips={isTips}
        selectOptions={selectOptions}
        onDelete={deleteOption}
        listOptions={listOptions}
        onClick={handleOnClick}
      >
        <Input
          {...rest}
          value={getValue()}
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
        {isOpenOptions && !isEmptyOptions && (
          <InputOptions options={options} onClick={handleOnClick} />
        )}
      </InputTips>
    </div>
  );
};

export default InputWithSearch;
