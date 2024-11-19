"use client";
import "./FormElements.scss";
import { TInputTips } from "@/types/types";

import SVG from "react-inlinesvg";

const InputTips = ({
  children,
  isMulty,
  isTips,
  selectOptions,
  onDelete,
  listOptions,
  onClick,
}: TInputTips) => {
  return (
    <>
      {isMulty && (
        <ul className="tips">
          {selectOptions.map((item) => (
            <li className="tips__item" key={item.id}>
              <button
                className="tips__button"
                type="button"
                onClick={() => {
                  onDelete(item);
                }}
              >
                {item.name}
                <SVG className="tips__img" src="/img/trash.svg" />
              </button>
            </li>
          ))}
        </ul>
      )}
      {children}
      {isTips && (
        <ul className="tips">
          {listOptions.map((item) =>
            item.tips ? (
              <li
                className="tips__item"
                key={item.id}
                onClick={() => {
                  onClick(item);
                }}
              >
                {item.name}
              </li>
            ) : (
              ""
            ),
          )}
        </ul>
      )}
    </>
  );
};

export default InputTips;
