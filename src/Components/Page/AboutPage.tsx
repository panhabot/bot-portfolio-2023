import React, { useEffect, useState } from "react";
import "../../styles/about.scss";
import { motion } from "framer-motion";
import { ReactComponent as BackwardButton } from "../../assets/backward.svg";
import { ReactComponent as ForwardButton } from "../../assets/forward-button.svg";
import { ReactComponent as DecoreAbout } from "../../assets/decore2.svg";
import { useNavigate } from "react-router-dom";
export const AboutPage = () => {
  const navigate = useNavigate();
  const [isVisble, setIsVisble] = useState(false);
  const handleBack = () => {
    navigate("/");
  };
  const handleForward = () => {
    navigate("/skill");
  };
  const handleAboutMe = () => {
    navigate("/more_me");
  };
  useEffect(() => {
    setIsVisble(false);
    setTimeout(() => {
      setIsVisble(true);
    }, 500);
  }, []);

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
      className="about-container"
    >
      <DecoreAbout className="about-decore" />
      <BackwardButton onClick={handleBack} className="backward-btn" />
      <div className="about-content">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          className="about-title"
        >
          about.
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          className="about-description"
        >
          Howdy, I am a recent graduate currently <br /> working as a software
          engineer in Tokyo.
          <br /> I have gained four years of experience as <br /> a frontend
          developer but there’re more.
          <div className="border-right"></div>
          <div className="border-left"></div>
        </motion.div>
        <motion.button
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          className="learn-btn"
          onClick={handleAboutMe}
        >
          Learn More About Me
        </motion.button>
        <div className="mb-btn-wrapper">
          <BackwardButton onClick={handleBack} className="backward-btn-mb" />
          <ForwardButton onClick={handleForward} className="forward-btn-mb" />
        </div>
      </div>
      <ForwardButton onClick={handleForward} className="forward-btn" />
    </motion.div>
  );
};
