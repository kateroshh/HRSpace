"use client";
import React, { useState } from "react";
import "./FormikStepper.scss";

import { Form, Formik, FormikConfig, FormikValues } from "formik";

import FormProgress from "@/components/FormProgress/FormProgress";
// import { useLocalStorageState as useStorage } from "@/utils/hooks/useLocalStorageState";

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, "children" | "validationSchema"> {
  label: string;
}

const FormikStepper = ({ children, ...props }: FormikConfig<FormikValues>) => {
  const [steps, setSteps] = useState({});

  const childrenArray = children as React.ReactElement<FormikStepProps>[];

  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
        } else {
          setSteps(values);
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <div className="form-box">
          <FormProgress currentStep={step} />

          <div className="form-wrapper">
            <h1 className="form-wrapper__title title">
              {currentChild.props.label}
            </h1>
            <Form className="form" autoComplete="off">
              {currentChild}

              <div className="form__btn-group">
                {isLastStep() && (
                  <button
                    className="form__button button"
                    onClick={() => setStep((s) => s - 1)}
                    type="button"
                  >
                    Назад
                  </button>
                )}
                <button className="form__button button" type="submit">
                  {isSubmitting
                    ? "Отправлено!"
                    : isLastStep()
                      ? "Отправить"
                      : "Сохранить и продолжить"}
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default FormikStepper;
