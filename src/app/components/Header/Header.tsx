"use client";
import { FC, useState } from "react";
import "./Header.scss";

import Image from "next/image";

import LogoImg from "@/img/logo.svg";
import Menu from "@/components/Menu/Menu";
import UserInfo from "@/components/UserInfo/UserInfo";

const Header: FC = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleClick = () => {
    setIsMobileMenu(!isMobileMenu);

    if (isMobileMenu) {
      document.body.classList.remove("hide-scroll");
    } else {
      document.body.classList.add("hide-scroll");
    }
  };

  return (
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
        <Menu isMobile={isMobileMenu} />
      </div>
      <UserInfo isMobile={isMobileMenu} />
      <button
        className={`burger ${isMobileMenu ? "burger_active" : ""}`}
        onClick={handleClick}
      ></button>
      <div
        className={`mobile-menu ${isMobileMenu ? "mobile-menu_active" : ""}`}
      >
        <div className="mobile-menu__bg"></div>
      </div>
    </header>
  );
};

export default Header;
