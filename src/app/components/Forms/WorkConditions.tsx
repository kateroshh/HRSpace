"use client";
import { FC } from "react";

import { Field } from "formik";

const WorkConditions: FC = () => {
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
