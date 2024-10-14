"use client";
import { FC } from "react";
import "@/scss/index.scss";

import Image from "next/image";
import LogoImg from "@/img/logo.svg";
import ProfileImg from "@/img/profile.png";

import SVG from "react-inlinesvg";

const Home: FC = () => {
  return (
    <div className="page">
      <main className="main">
        <header className="header">
          <div className="header__left">
            <a className="logo" href="/">
              <Image
                className="logo__img"
                src={LogoImg}
                alt="logo"
                priority={true}
              />
            </a>
            <nav className="menu">
              <li className="menu__item">
                <a className="menu__link" href="#">
                  Заявки
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  Исполнители
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="#">
                  Вопросы и ответы
                </a>
              </li>
            </nav>
          </div>
          <ul className="user-info">
            <li className="user-info__item">
              <a className="user-info__link" href="#">
                <SVG className="user-info__bell" src="/img/bell.svg" />
              </a>
            </li>
            <li className="user-info__item">
              <a className="user-info__link user-info__link_new" href="#">
                <SVG className="user-info__chat" src="/img/chat.svg" />
              </a>
            </li>
            <li className="user-info__item">
              <a className="user-info__link user-info__portfolio" href="#">
                <Image
                  className="user-info__img"
                  src={ProfileImg}
                  alt="user image"
                />
                <div className="user-info__about">
                  <p className="user-info__name">Виталий Крымов</p>
                  <p className="user-info__id">Клиент 45732</p>
                </div>
              </a>
            </li>
          </ul>
        </header>

        <div className="form-box">
          <div className="progress">
            <h2 className="progress__title title">Создание заявки</h2>
            <ul className="steps">
              <li className="steps__item steps__item_active">
                <a className="steps__link" href="#">
                  Выбор специалиста
                </a>
              </li>
              <li className="steps__item">
                <a className="steps__link" href="#">
                  Условия работы
                </a>
              </li>
              <li className="steps__item">
                <a className="steps__link" href="#">
                  Обязанности и требования к специалисту
                </a>
              </li>
              <li className="steps__item">
                <a className="steps__link" href="#">
                  Условия сотрудничества
                </a>
              </li>
              <li className="steps__item">
                <a className="steps__link" href="#">
                  Требования к рекрутеру
                </a>
              </li>
              <li className="steps__item">
                <a className="steps__link" href="#">
                  Оплата и публикация
                </a>
              </li>
            </ul>
          </div>
          <div className="form-wrapper">
            <h1 className="form-wrapper__title title">
              Какого специалиста ищете?
            </h1>
            <form className="form">
              <div className="form__element">
                <label className="form__lable" htmlFor="vacancies">
                  Название вакансии
                </label>
                <input
                  className="form__input"
                  type="text"
                  name="vacancies"
                  id="vacancies"
                  required
                  placeholder="Например, контент–менеджер"
                />
              </div>

              <div className="form__element">
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
              </div>
              <div className="form__btn-group">
                <button className="form__button button">
                  Сохранить и продолжить
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__text">
          <div className="footer__question">
            <p className="footer__info">
              Если остались вопросы, у нас уже готовы ответы в разделе
            </p>
            <a className="footer__link" href="#">
              «Вопрос — ответ»
            </a>
          </div>
          <p className="footer__copyright">
            © 2024 Группа компаний HeadHunter
          </p>
        </div>
        <div className="footer__contacts">
          <h3 className="footer__title">Всегда поддержим и поможем:</h3>
          <ul className="contacts">
            <li className="contact">
              по России <span className="contact__num">8 800 100-64-27</span>
            </li>
            <li className="contact">
              в Москве <span className="contact__num">+7 495 974-64-27</span>
            </li>
            <li className="contact">
              в Санкт-Петербурге{" "}
              <span className="contact__num">+7 812 458-45-45</span>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
