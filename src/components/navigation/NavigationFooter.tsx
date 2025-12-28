import React from "react";
import { NavLink } from "react-router-dom";

export const NavigationFooter = () => {
    return (
               <div className="footer__menu menu">
              <ul className="menu__row menu__row_footer">
                <li className="menu__item">
                  <NavLink to="/company/" className="menu__link">О компании</NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to="/catalog/" className="menu__link">Каталог</NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to="/delivery/" className="menu__link">Доставка</NavLink>
                </li>
              </ul>
            </div>
    )
}