import React from "react";
import "../../styles/menu.scss";
import { ReactComponent as CloseButton } from "../../assets/close-btn.svg";
import { useNavigate } from "react-router-dom";

export const MenuPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const handleNavigate = (str: string) => {
    navigate(`/${str}`);
  };
  return (
    <div className="menu-container">
      <CloseButton onClick={handleBack} className="close-btn" />

      <div onClick={() => handleNavigate("")}>Home</div>
      <div onClick={() => handleNavigate("about_me")}>About Me</div>
      <div onClick={() => handleNavigate("skill")}>Skills</div>
      <div onClick={() => handleNavigate("contact")}>Contact</div>
    </div>
  );
};
