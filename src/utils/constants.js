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
    nameVacancy: "",
    vacancy: "",
    vacancy2: "",
    other: "",
  },
  descriptionSpecialist: {
    label: "Какого специалиста ищете?",
    validationSchema: Yup.object({
      nameVacancy: Yup.string()
        .min(2, "Название вакансии должно быть больше 2 символов")
        .max(50, "Название вакансии должно быть менее 50 символов")
        .required("Укажите название вакансии"),
      vacancy: Yup.string().required("Укажите название должности"),
      vacancy2: Yup.string().required("Укажите название должности"),
    }),
  },
  workConditions: {
    label: "Что вы можете предложить специалисту?",
    validationSchema: Yup.object({
      other: Yup.string().required(),
    }),
  },
};
