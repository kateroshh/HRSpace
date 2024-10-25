"use client";
import "./FormElements.scss";
import { TInputOptions } from "@/types/types";

const InputOptions = ({ options, onClick }: TInputOptions) => {
  // console.log(options);
  return (
    <ul className="options">
      {options.map((item) => (
        <li
          className="option"
          key={item.id}
          onClick={() => {
            onClick(item);
          }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default InputOptions;
