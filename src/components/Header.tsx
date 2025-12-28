import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAction } from "../hooks/action";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { NavigationHeader } from "./navigation/NavigationHeader";
const Logo = require("../assets/images/logo");
export const Header = () => {
  const { visible } = useTypedSelector((state) => state.menu);
  const { toggleBurger } = useAction();
  const burgerClass = ["header__burger", "burger"];
  if (visible) burgerClass.push("active");
  return (
    <header className="header">
      <div className="header__row container">
        <div className="header__logo">
          <NavLink to="/" className="header__link">
            <img src={Logo} />
          </NavLink>
        </div>
        <div className={burgerClass.join(" ")} onClick={() => toggleBurger()}>
          <span className="burger__line"></span>
        </div>
        <NavigationHeader />
      </div>
    </header>
  );
};
