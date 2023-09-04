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
  const handleContactUrl = (value: string) => {
    const link = document.createElement("a");
    link.href = value;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
  };

  const handleSendMail = (email: string) => {
    const link = document.createElement("a");
    link.href = `mailto:${email}`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
  };
  return (
    <div className="contact-container">
      <NavBar className="nav-bar-contact" isContact={true} />
      <div className="content-wrapper">
        <div className="contact-content">
          <div className="contact-text">contact</div>
          <div className="contact-text-connect">Let's Connect!</div>
          <div className="in-touch-text">
            Get in touch with me by <span>email</span>
          </div>
          <div className="in-touch-text">Follow me from a far:</div>
          <div className="social">
            <span>facebook</span> / <span>instagram</span> /{" "}
            <span>linkedin</span> / <span>github</span>
          </div>
        </div>
        <div className="contact-info">
          <div
            className="info-wrapper"
            onClick={() => handleSendMail("kongpanhabot2000@gmail.com")}
          >
            <div className="subject">email</div>
            <div className="info">kongpanhabot2000@gmail.com</div>
          </div>
          <div
            className="info-wrapper"
            onClick={() => handleContactUrl("https://github.com/panhabot")}
          >
            <div className="subject">github</div>
            <div className="info">@panhabot</div>
          </div>
          <div
            className="info-wrapper"
            onClick={() =>
              handleContactUrl("https://www.instagram.com/iambot_/")
            }
          >
            <div className="subject">instagram</div>
            <div className="info">@iambot_</div>
          </div>
          <div
            className="info-wrapper"
            onClick={() =>
              handleContactUrl(
                "https://www.linkedin.com/in/kong-panhabot-743832190/"
              )
            }
          >
            <div className="subject">linkedin</div>
            <div className="info">@kongpanhabot</div>
          </div>
          <div
            className="info-wrapper"
            onClick={() =>
              handleContactUrl("https://www.facebook.com/panha.bot.944")
            }
          >
            <div className="subject">facebook</div>
            <div className="info">Panha Bot</div>
          </div>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee__inner">
          <p className="marquee__line">
            Innovative Logical Detail-Oriented Problem Solver Adaptable
          </p>
          <p className="marquee__line">
            Innovative Logical Detail-Oriented Problem Solver Adaptable
          </p>
        </div>
      </div>
      <TopButton onClick={handleBack} className="top-btn" />
    </div>
  );
};
