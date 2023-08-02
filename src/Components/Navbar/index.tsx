import React from "react";
import "../../styles/navbar.scss";
import { ReactComponent as NavButton } from "../../assets/nav-btn.svg";

type Props = {
  isContact?: boolean;
  className?: string;
};

export const NavBar: React.FC<Props> = (props) => {
  const { isContact, className } = props;
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
        style={isContact ? { right: "50px", marginTop: "30px" } : {}}
      />
    </div>
  );
};
