"use client";
import { FC } from "react";
import "./Footer.scss";

const Footer: FC = () => {
  return (
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
        <p className="footer__copyright">© 2024 Группа компаний HeadHunter</p>
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
  );
};

export default Footer;
