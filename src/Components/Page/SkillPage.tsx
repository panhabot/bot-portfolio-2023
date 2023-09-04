import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as BackwardButton } from "../../assets/backward.svg";
import { ReactComponent as ForwardButton } from "../../assets/forward-button.svg";
import { ReactComponent as SkillTree } from "../../assets/skilltree.svg";
import { ReactComponent as DecoreRight } from "../../assets/decore3.svg";
import { ReactComponent as DecoreLeft } from "../../assets/decore4.svg";
import "../../styles/skill.scss";
import { useNavigate } from "react-router-dom";
import { AnimatedSkillTree } from "../AnimatedSkillTree";
export const SkillPage = () => {
  const navigate = useNavigate();
  const handleBackward = () => {
    navigate("/about_me");
  };
  const handleForward = () => {
    navigate("/contact");
  };
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="skill-container"
    >
      <DecoreLeft className="decore-left" />
      <div className="skill-content-wrapper">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          className="skill-title"
        >
          skills
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          className="skill-object"
        >
          frontend / backend / project management / agile method <br />
          mobile app development / design / collaboration / project sprint{" "}
        </motion.div>
      </div>
      <AnimatedSkillTree className="skill-tree" />
      {/* <SkillTree className="skill-tree" /> */}
      <BackwardButton onClick={handleBackward} className="backward-btn" />
      <ForwardButton onClick={handleForward} className="forward-btn" />
      <DecoreRight className="decore-right" />
    </motion.div>
  );
};
