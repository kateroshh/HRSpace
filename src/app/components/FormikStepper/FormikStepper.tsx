"use client";
import React, { useState } from "react";
import "./FormikStepper.scss";

import { Form, Formik, FormikConfig, FormikValues } from "formik";

import FormProgress from "@/components/FormProgress/FormProgress";

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {}

const FormikStepper = ({ children, ...props }: FormikConfig<FormikValues>) => {
  const childrenArray = children as React.ReactElement<FormikStepProps>[];

  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      // validationSchema={currentChild.props.validationSchema}
      onSubmit={(values, helpers) => {
        if (isLastStep()) {
          props.onSubmit(values, helpers);
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      <div className="form-box">
        <FormProgress currentStep={step} />

        <div className="form-wrapper">
          <h1 className="form-wrapper__title title">
            Какого специалиста ищете?
          </h1>
          <Form className="form" autoComplete="off">
            {currentChild}

            <div className="form__btn-group">
              <button
                className="form__button button"
                onClick={() => setStep((s) => s - 1)}
                type="button"
              >
                Назад
              </button>
              <button className="form__button button" type="submit">
                Сохранить и продолжить
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default FormikStepper;
