import React from "react";
import { motion } from "framer-motion";

type props = {
  className?: string;
};
export const AnimatedSkillTree: React.FC<props> = (props) => {
  const { className } = props;
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  return (
    <div className={`${className}`}>
      <motion.svg
        // width="323"
        // height="504"
        variants={{
          hidden: { opacity: 0, y: -60 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        viewBox="0 0 323 504"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="161.5" cy="161.5" r="161.5" fill="#F2EAD3" />
        <rect x="173" y="27" width="7" height="669" rx="3.5" fill="#3F2305" />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          d="M287.34 81.8243C288.99 80.8168 291.144 81.3373 292.151 82.9869V82.9869C293.159 84.6366 292.639 86.7907 290.989 87.7982L179.635 155.81C177.986 156.817 175.832 156.297 174.824 154.647V154.647C173.817 152.998 174.337 150.844 175.987 149.836L287.34 81.8243Z"
          fill="#3F2305"
        />
        <motion.rect
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
          x="180.809"
          y="221.656"
          width="7"
          height="192.375"
          rx="3.5"
          transform="rotate(118.655 180.809 221.656)"
          fill="#3F2305"
        />
        <rect
          x="193"
          y="415"
          width="7"
          height="20"
          rx="3.5"
          transform="rotate(90 193 415)"
          fill="#3F2305"
        />
      </motion.svg>
    </div>
  );
};
