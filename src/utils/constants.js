import * as Yup from "yup";

export const MENU = [
  {
    title: "Заявки",
    url: "/",
  },
  {
    title: "Исполнители",
    url: "/",
  },
  {
    title: "Вопросы и ответы",
    url: "/",
  },
];

export const STEPS = [
  {
    step: "Выбор специалиста",
    titleForm: "Какого специалиста ищете?",
  },
  {
    step: "Условия работы",
    titleForm: "Что вы можете предложить специалисту?",
  },
  {
    step: "Обязанности и требования к специалисту",
    titleForm: "Что вы ждете от специалиста?",
  },
  {
    step: "Условия сотрудничества",
    titleForm: "Что вы можете предложить рекрутеру?",
  },
  {
    step: "Требования к рекрутеру",
    titleForm: "Что вы ожидаете от рекрутера?",
  },
  {
    step: "Оплата и публикация",
    titleForm: "Публикация и оплата",
  },
];

export const CONFIG_FORMS = {
  initialValues: {
    vacancies: "",
    other: "",
  },
  descriptionSpecialist: {
    label: "Какого специалиста ищете?",
    validationSchema: Yup.object({
      vacancies: Yup.string().required(),
    }),
  },
  workConditions: {
    label: "Что вы можете предложить специалисту?",
    validationSchema: Yup.object({
      other: Yup.string().required(),
    }),
  },
};
