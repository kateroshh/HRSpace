"use client";
import { FC } from "react";
import "./UserInfo.scss";
import { MobileProps } from "@/types/types";

import Image from "next/image";
import SVG from "react-inlinesvg";

import ProfileImg from "@/img/profile.png";

const UserInfo: FC<MobileProps> = ({ isMobile }) => {
  return (
    <ul className={`user-info ${isMobile ? "user-info_mobile" : ""}`}>
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
          <Image className="user-info__img" src={ProfileImg} alt="user image" />
          <div className="user-info__about">
            <p className="user-info__name">Виталий Крымов</p>
            <p className="user-info__id">Клиент 45732</p>
          </div>
        </a>
      </li>
    </ul>
  );
};

export default UserInfo;
