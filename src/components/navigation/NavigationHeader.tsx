import React from "react";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
export const NavigationHeader = () => {
  const { visible } = useTypedSelector((state) => state.menu);
  const headerMenu = ["header__menu", "menu"];
  if (visible) {
    headerMenu.push("active");
  }
  return (
    <nav className={headerMenu.join(" ")}>
      <ul className="menu__row">
        <li className="menu__item">
          <NavLink
            to="/company/"
            className="menu__link"
            data-testid="company_link"
          >
            О компании
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/catalog/" className="menu__link">
            Каталог
          </NavLink>
        </li>
        <li className="menu__item menu__item_submenu">
          <NavLink to="/delivery/" className="menu__link">
            Доставка
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
