import React from "react";
import "../../styles/_404.scss";
import { useNavigate } from "react-router-dom";

export const _404page = () => {
  const navigate = useNavigate();
  const handleReturnHome = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <p className="title"> {"< 404 Page Not Found />"}</p>
      <div onClick={handleReturnHome} className="btn-return">
        Return
      </div>
    </div>
  );
};
