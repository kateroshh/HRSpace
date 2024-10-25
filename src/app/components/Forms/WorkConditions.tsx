"use client";

import { Field } from "formik";
import { FormikStepProps } from "@/components/FormikStepper/FormikStepper";

const WorkConditions = ({ validationSchema }: FormikStepProps) => {
  return (
    <>
      <div className="form__element">
        <label className="form__lable" htmlFor="other">
          Другое поле
        </label>
        <Field
          className="form__input"
          id="other"
          name="other"
          placeholder="Другое поле"
        />
      </div>
    </>
  );
};

export default WorkConditions;
