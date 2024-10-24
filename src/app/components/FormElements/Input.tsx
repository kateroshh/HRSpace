"use client";
import "./FormElements.scss";
import { TInput } from "@/types/types";

import { Field, ErrorMessage, FieldProps } from "formik";

import TextError from "@/components/FormElements/TextError/TextError";

const Input = ({ label, name, onChange, ...rest }: TInput) => {
  return (
    <>
      <div className="form-elements">
        <label className="label" htmlFor={name}>
          {label}
        </label>

        <Field name={name}>
          {({ field, form }: FieldProps) => (
            <input
              className={`input ${form.errors[name] && form.touched[name] ? "input_error" : ""}`}
              {...field}
              name={name}
              onChange={(e) => {
                field.onChange(e);
                onChange ? onChange(e) : null;
              }}
              {...rest}
            />
          )}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </>
  );
};

export default Input;
