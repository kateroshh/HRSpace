"use client";
import { FC } from "react";
import "./FormProgress.scss";
import { TFormProgress } from "@/types/types";

import { STEPS } from "@/constants";

const FormProgress: FC<TFormProgress> = ({ currentStep }) => {
  const getActiveSteps = (index: number) => {
    if (index <= currentStep && index !== currentStep) {
      return "steps__item_active";
    }

    if (index === currentStep) {
      return "steps__item_active steps__item_last-step";
    }

    return "";
  };

  return (
    <div className="progress">
      <h2 className="progress__title title">Создание заявки</h2>
      <ul className="steps">
        {STEPS.map(({ step }, index) => (
          <li key={index} className={`steps__item ${getActiveSteps(index)} `}>
            <a className="steps__link" href="#">
              {step}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormProgress;
