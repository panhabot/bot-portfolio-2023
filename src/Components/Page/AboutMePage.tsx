import React from "react";
import "../../styles/abouteme.scss";
import { ReactComponent as KHFlag } from "../../assets/kh-flag.svg";
import { ReactComponent as CloseButton } from "../../assets/close-btn.svg";
import { useNavigate } from "react-router-dom";
export const AboutMePage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="about-me-container">
      <CloseButton onClick={handleBack} className="close-btn" />
      <div className="description-container">
        <div className="description">
          <div>2mins read... Trust me 😉</div>
          <div className="intro">
            I'm Kong Panhabot,
            <br /> a software developer <br /> based in Tokyo
          </div>
          <div className="nationality-wrapper">
            <span>Nationality: </span>
            <KHFlag className="flag" />
          </div>
          <div className="intro-desc">
            I recently graduated as a software engineering <br />
            student from Kirirom Institute of Technology. <br />
            With a diverse range of experience in various <br />
            projects, including project management, <br />
            user research, fintech, mobile banking, <br />
            e-commerce, payment gateways, and more. <br />I have honed my skills
            as a versatile developer. <br />
            Additionally, my passion for design fuels my <br />
            enthusiasm for creating visually appealing <br />
            and innovative websites.
          </div>
        </div>
        <div>
          <img
            className="my-image"
            src={require("../../assets/my-image.png")}
            alt="me"
          />
        </div>
      </div>
      <div className="edu-background-wrapper">
        <div className="edu-header">
          <span>Educational Background</span>
        </div>
        <div className="edu-info">
          <div className="year-wrapper">
            <div className="year">2018</div>
            <div className="info">
              High School Graduate <br />
              Bridgeton School, Phnom Penh Cambodia
            </div>
          </div>
          <div className="year-wrapper">
            <div className="year">2018</div>
            <div className="info">
              General English Program <br />
              ACE, Phnom Penh Cambodia
            </div>
          </div>
          <div className="year-wrapper">
            <div className="year">2023</div>
            <div className="info">
              Bachelor of Software Engineering <br />
              Kirirom Institute of Technology, Kampong Speu Cambodia
            </div>
          </div>
        </div>
      </div>
      <div className="work-wrapper">
        <div className="work-header">
          <span>Working Experience</span>{" "}
        </div>
        <div className="work-desc">
          <div className="work-info">
            <div className="dot"></div>
            <div className="work-year">Apr 2023 - Present</div>
            <div className="workplace">Quad</div>
            <div className="location-title">
              Tokyo Japan <br /> Software Developer
            </div>
          </div>
          <div className="work-info">
            <div className="dot"></div>

            <div className="work-year">Nov 2021 - Feb 2023</div>
            <div className="workplace">APD Bank</div>
            <div className="location-title">
              Phnom Penh Cambodia <br /> Mobile App Developer
            </div>
          </div>
          <div className="work-info">
            <div className="dot"></div>

            <div className="work-year">Nov 2020 - Dec 2022</div>
            <div className="workplace">NAPT</div>
            <div className="location-title">
              Phnom Penh Cambodia <br /> Project Lead and Frontend Developer
            </div>
          </div>
          <div className="work-info">
            <div className="dot"></div>

            <div className="work-year">Feb 2020 - Dec Feb 2021</div>
            <div className="workplace">VTeam Cambodia</div>
            <div className="location-title">
              Phnom Penh Cambodia <br /> Mobile App Developer
            </div>
          </div>
        </div>
      </div>
      <div className="program-skill-wrapper">
        <div className="program-header">
          <span>Programming Skills</span>
        </div>
        <div className="program-desc">
          typescript / react / vue / javascript / html <br />/ python / php /
          flutter / dart / react native
        </div>
      </div>
      <div className="skill-wrapper">
        <div className="skill-header">
          <span>Skills</span>
        </div>
        <div className="skill-desc">
          typescript / react / vue / javascript / html <br />/ python / php /
          flutter / dart / react native
        </div>
      </div>
      <div className="find-wrapper">
        <div className="find-header">
          <span>Find Me</span>
        </div>
        <div className="find-desc">
          <div>@github</div>
          <div>@instagram</div>
          <div>@linkedin</div>
          <div>@facebook</div>
        </div>
      </div>
    </div>
  );
};
