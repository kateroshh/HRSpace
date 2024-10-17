"use client";
import { FC } from "react";

import { Field } from "formik";

const DescriptionSpecialist: FC = () => {
  return (
    <>
      <div className="form__element">
        <label className="form__lable" htmlFor="vacancies">
          Название вакансии
        </label>
        <Field
          className="form__input"
          id="vacancies"
          name="vacancies"
          placeholder="Например, контент–менеджер"
        />

        {/* <label className="form__lable" htmlFor="vacancies">
          Название вакансии
        </label>
        <input
          className="form__input"
          type="text"
          name="vacancies"
          id="vacancies"
          required
          placeholder="Например, контент–менеджер"
        /> */}
      </div>

      {/* <div className="form__element">
        <label className="form__lable" htmlFor="vacancies">
          Должность
        </label>
        <input
          className="form__input"
          type="text"
          name="vacancies"
          id="vacancies"
          required
          placeholder="Начните вводить и выберите должность из списка"
        />
      </div>

      <div className="form__element">
        <label className="form__lable" htmlFor="vacancies">
          Сфера деятельности
        </label>
        <input
          className="form__input"
          type="text"
          name="vacancies"
          id="vacancies"
          required
          placeholder="Например, маркетинг"
        />
      </div> */}
    </>
  );
};

export default DescriptionSpecialist;
