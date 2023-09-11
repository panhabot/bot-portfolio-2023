import React from "react";
import "../../styles/navbar.scss";
import { ReactComponent as NavButton } from "../../assets/nav-btn.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  isContact?: boolean;
  className?: string;
};

export const NavBar: React.FC<Props> = (props) => {
  const { isContact, className } = props;
  const navigate = useNavigate();

  const handleClickNav = () => {
    navigate("/menu");
  };
  return (
    <div className={`nav-container ${className}`}>
      <div
        className={`logo-wrapper`}
        style={
          isContact
            ? { position: "absolute", left: "50px", marginTop: "15px" }
            : {}
        }
      >
        <div className="logo">bot.</div>
        <p className="copyright">©/2023</p>
      </div>
      <NavButton
        className="nav-btn"
        onClick={handleClickNav}
        style={isContact ? { right: "50px", marginTop: "30px" } : {}}
      />
    </div>
  );
};
