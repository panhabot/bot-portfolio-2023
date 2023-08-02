import React from "react";
import { NavBar } from "../Navbar";
import "../../styles/contact.scss";
import { ReactComponent as TopButton } from "../../assets/top-button.svg";
import { useNavigate } from "react-router-dom";
export const ContactPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="contact-container">
      <NavBar className="nav-bar-contact" isContact={true} />
      <div className="content-wrapper">
        <div className="contact-content">
          <div style={{ fontSize: "16px" }}>contact</div>
          <div style={{ fontSize: "64px" }}>Let's Connect!</div>
          <div style={{ fontSize: "26px" }}>
            Get in touch with me by <span>email</span>
          </div>
          <div style={{ fontSize: "26px" }}>Follow me from a far:</div>
          <div style={{ fontSize: "14px" }}>
            <span>facebook</span> / <span>instagram</span> /{" "}
            <span>linkedin</span> / <span>github</span>
          </div>
        </div>
        <div className="contact-info">
          <div className="info-wrapper">
            <div className="subject">email</div>
            <div className="info">kongpanhabot2000@gmail.com</div>
          </div>
          <div className="info-wrapper">
            <div className="subject">github</div>
            <div className="info">@panhabot</div>
          </div>
          <div className="info-wrapper">
            <div className="subject">instagram</div>
            <div className="info">@iambot_</div>
          </div>
          <div className="info-wrapper">
            <div className="subject">linkedin</div>
            <div className="info">@kongpanhabot</div>
          </div>
          <div className="info-wrapper">
            <div className="subject">facebook</div>
            <div className="info">Panha Bot</div>
          </div>
        </div>
      </div>

      {/* <div className="marquee">
        <div className="marquee__inner">
          <p className="marquee__line">
            Innovative Logical Detail-Oriented Problem Solver Adaptable
          </p>
          <p className="marquee__line">
            Innovative Logical Detail-Oriented Problem Solver Adaptable
          </p>
        </div>
      </div> */}
      <TopButton onClick={handleBack} className="top-btn" />
    </div>
  );
};
