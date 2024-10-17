"use client";
import { FC } from "react";
import "@/scss/index.scss";

import { Formik, Form } from "formik";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FormikStepper from "@/components/FormikStepper/FormikStepper";
import DescriptionSpecialist from "@/components/Forms/DescriptionSpecialist";
import WorkConditions from "@/components/Forms/WorkConditions";

const Home: FC = () => {
  return (
    <div className="page">
      <main className="main">
        <Header />

        <FormikStepper
          initialValues={{
            vacancies: "",
          }}
          onSubmit={(values) => {
            console.log("values ", values);
          }}
        >
          <DescriptionSpecialist />
          <WorkConditions />
        </FormikStepper>

        {/* <Formik
          initialValues={{
            vacancies: "",
          }}
          onSubmit={(values) => {
            console.log("values ", values);
          }}
        >
          <div className="form-box">
            <FormProgress />

            <FormikStepper
              initialValues={{
                vacancies: "",
              }}
              onSubmit={(values) => {
                console.log("values ", values);
              }}
            >
              <DescriptionSpecialist />
            </FormikStepper>

            <div className="form-wrapper">
              <h1 className="form-wrapper__title title">
                Какого специалиста ищете?
              </h1>
              <Form className="form" autoComplete="off">
                <DescriptionSpecialist />

                <div className="form__btn-group">
                  <button className="form__button button" type="submit">
                    Сохранить и продолжить
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </Formik> */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
