import React from "react";
import "../../styles/navbar.scss";
import { ReactComponent as NavButton } from "../../assets/nav-btn.svg";
export const NavBar = () => {
  return (
    <div className="container">
      <div className="logo-wrapper">
        <div className="logo">bot.</div>
        <p className="copyright">©/2023</p>
      </div>
      <NavButton className="nav-btn" />
    </div>
  );
};
