import React from "react";
import { NavBar } from "../Navbar";
import { motion } from "framer-motion";
import "../../styles/main.scss";
import { ReactComponent as MainImage } from "../../assets/mainimage.svg";
import { ReactComponent as ClickHereButton } from "../../assets/click-here-btn.svg";
import { useNavigate } from "react-router-dom";
import { AnimatedMainImage } from "../AnimatedMainImage";

export const MainPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about_me");
  };
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="mainContainer"
    >
      <img
        src={require("../../assets/decor1.png")}
        className="decore-image-main"
        alt="decore"
      />
      <div className="navbar">
        <NavBar />
      </div>
      <div className="main-content-wrapper">
        <div className="main-content">
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
            className="welcome-text"
          >
            Welcome to <br />
            My Playground! <span className="iam">I am</span>{" "}
            <span className="name">Kong Panhabot</span>
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
            className="description"
          >
            Building bridges between ideas and technology
          </motion.p>
          <button className="resume-btn">Resume</button>
        </div>
        <div className="main-image">
          <AnimatedMainImage className="main-img" />
        </div>
      </div>
      <div className="click-down">
        <ClickHereButton onClick={handleNavigate} className="click-here-btn" />
      </div>
    </motion.div>
  );
};
