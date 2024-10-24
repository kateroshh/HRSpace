"use client";

import { FormikStepProps } from "@/components/FormikStepper/FormikStepper";
import Input from "@/components/FormElements/Input";
import InputWithSearch from "@/components/FormElements/InputWithSearch";

const DescriptionSpecialist = ({ validationSchema }: FormikStepProps) => {
  return (
    <>
      <Input
        label="Название вакансии"
        name="nameVacancy"
        type="text"
        placeholder="Например, контент–менеджер"
      />

      <InputWithSearch
        label="Должность"
        name="vacancy"
        type="text"
        placeholder="Начните вводить и выберите должность из списка"
        isMulty={true}
      />

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
