"use client";
import { FC } from "react";

import FormikStepper from "@/components/FormikStepper/FormikStepper";
import DescriptionSpecialist from "@/components/Forms/DescriptionSpecialist";
import WorkConditions from "@/components/Forms/WorkConditions";
import { CONFIG_FORMS } from "@/constants";

const MultiStepForm: FC = () => {
  return (
    <FormikStepper
      initialValues={CONFIG_FORMS.initialValues}
      onSubmit={(values) => {
        console.log("values ", values);
      }}
    >
      <DescriptionSpecialist
        label={CONFIG_FORMS.descriptionSpecialist.label}
        validationSchema={CONFIG_FORMS.descriptionSpecialist.validationSchema}
      />
      <WorkConditions
        label={CONFIG_FORMS.workConditions.label}
        validationSchema={CONFIG_FORMS.workConditions.validationSchema}
      />
    </FormikStepper>
  );
};

export default MultiStepForm;
