"use client";
import { FC } from "react";
import "./Menu.scss";
import { MobileProps } from "@/types/types";

import { MENU } from "@/constants";

const Menu: FC<MobileProps> = ({ isMobile }) => {
  return (
    <nav className={`menu ${isMobile ? "menu_mobile" : ""}`}>
      {MENU.map(({ title, url }, index) => (
        <li key={index} className="menu__item">
          <a className={`menu__link`} href={url}>
            {title}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Menu;
