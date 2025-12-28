import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationFooter } from "./navigation/NavigationFooter";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main container">
        <div className="footer__body">
          <NavigationFooter />
          <div className="footer_copyrate">copyrate</div>
        </div>
      </div>
    </footer>
  );
};
