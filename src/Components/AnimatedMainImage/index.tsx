import React from "react";
import { motion } from "framer-motion";

type Props = {
  className?: string;
};
export const AnimatedMainImage: React.FC<Props> = (props) => {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };
  return (
    <svg
      width="789"
      height="676"
      viewBox="0 0 789 676"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.className}`}
    >
      <motion.path
        d="M23.2646 596.5L167 360.96L310.735 596.5H23.2646Z"
        fill="#3F2305"
        stroke="black"
        variants={{
          hidden: { opacity: 0, y: -60 },
          visible: { opacity: 1, y: 0, transition: { duration: 2.5 } },
        }}
      />
      <motion.path
        d="M164.238 34.3528L845.192 30.5028L847.925 513.922L166.971 517.772L164.238 34.3528Z"
        fill="#F5F5F5"
        stroke="#DFD7BF"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.path
        d="M165 364L263 518"
        stroke="#DFD7BF"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.circle
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
        cx="415.5"
        cy="226.5"
        r="109.5"
        fill="#F2EAD3"
      />
      <motion.rect
        x="392.544"
        y="143.689"
        width="338"
        height="111"
        rx="55.5"
        transform="rotate(32.0207 392.544 143.689)"
        stroke="#DFD7BF"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.path
        d="M450.142 94.428C451.42 91.6477 453.073 89.4754 455.1 87.9109C457.159 86.3615 459.402 85.4907 461.828 85.2985C464.254 85.1063 466.694 85.5741 469.147 86.7019C472.516 88.2508 474.865 90.3807 476.194 93.0917C477.571 95.785 477.849 98.6271 477.029 101.618L476.048 101.167C476.825 98.3546 476.546 95.73 475.21 93.2931C473.874 90.8561 471.717 88.9535 468.741 87.5851C466.615 86.6076 464.434 86.1797 462.199 86.3012C460.012 86.405 457.942 87.1574 455.991 88.5583C454.039 89.9592 452.417 92.0661 451.124 94.8791C449.83 97.6921 449.287 100.295 449.495 102.689C449.702 105.082 450.471 107.159 451.801 108.919C453.179 110.662 454.931 112.023 457.057 113C460.033 114.368 462.881 114.766 465.601 114.194C468.321 113.622 470.495 112.125 472.123 109.704L473.104 110.155C471.368 112.725 469.022 114.38 466.066 115.121C463.158 115.845 460.02 115.432 456.651 113.883C454.198 112.755 452.254 111.208 450.821 109.242C449.387 107.275 448.588 105.006 448.423 102.434C448.291 99.8768 448.864 97.2082 450.142 94.428Z"
        fill="#3F2305"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      />
      <motion.path
        d="M488.808 134.725C486.773 132.95 485.332 130.906 484.485 128.591C483.661 126.248 483.508 123.822 484.025 121.312C484.593 118.798 485.883 116.388 487.894 114.082C489.905 111.775 492.106 110.183 494.495 109.306C496.935 108.424 499.36 108.246 501.769 108.77C504.201 109.267 506.435 110.403 508.47 112.178C510.505 113.952 511.934 116.011 512.757 118.353C513.604 120.668 513.744 123.082 513.176 125.596C512.631 128.083 511.354 130.479 509.343 132.785C507.331 135.092 505.119 136.697 502.706 137.602C500.317 138.48 497.906 138.67 495.473 138.173C493.065 137.649 490.843 136.499 488.808 134.725ZM489.447 133.992C491.21 135.53 493.169 136.57 495.324 137.112C497.503 137.626 499.739 137.499 502.034 136.73C504.329 135.96 506.494 134.409 508.529 132.076C510.563 129.742 511.806 127.386 512.255 125.008C512.705 122.63 512.515 120.41 511.685 118.349C510.879 116.261 509.594 114.448 507.831 112.91C506.067 111.372 504.083 110.334 501.877 109.796C499.722 109.255 497.486 109.382 495.167 110.178C492.872 110.947 490.719 112.485 488.708 114.792C486.697 117.098 485.455 119.454 484.981 121.859C484.531 124.237 484.71 126.47 485.516 128.558C486.373 130.643 487.683 132.454 489.447 133.992Z"
        fill="#3F2305"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      />
      <motion.path
        d="M519.411 144.374C522.009 142.757 524.57 141.864 527.093 141.694C529.646 141.504 531.997 142.013 534.147 143.219C536.327 144.407 538.15 146.177 539.614 148.531C541.383 151.374 542.127 154.239 541.846 157.127C541.615 160.027 540.562 162.526 538.688 164.625L555.424 154.213L555.966 155.084L522.036 176.193L521.494 175.322L529.105 170.587C526.364 171.36 523.626 171.219 520.892 170.164C518.208 169.12 515.982 167.177 514.213 164.334C512.749 161.981 511.95 159.573 511.818 157.111C511.716 154.631 512.299 152.297 513.567 150.109C514.865 147.902 516.813 145.99 519.411 144.374ZM533.874 167.62C536.227 166.156 537.986 164.383 539.151 162.302C540.365 160.232 540.928 158.037 540.841 155.717C540.804 153.408 540.12 151.184 538.789 149.044C537.382 146.782 535.681 145.106 533.688 144.014C531.713 142.953 529.539 142.525 527.165 142.73C524.821 142.916 522.427 143.77 519.982 145.291C517.536 146.812 515.697 148.593 514.464 150.632C513.262 152.652 512.7 154.782 512.78 157.022C512.878 159.293 513.631 161.559 515.038 163.821C516.369 165.961 518.047 167.567 520.071 168.639C522.145 169.724 524.363 170.188 526.725 170.032C529.137 169.889 531.52 169.085 533.874 167.62Z"
        fill="#3F2305"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      />
      <motion.path
        d="M531.55 201.545C532.402 204.708 533.917 207.152 536.097 208.877C538.276 210.601 540.817 211.315 543.72 211.018L544.001 212.061C540.915 212.37 538.142 211.626 535.682 209.828C533.266 208.055 531.575 205.378 530.611 201.798C529.909 199.191 529.855 196.707 530.45 194.347C531.045 191.988 532.278 189.922 534.15 188.15C536.031 186.413 538.449 185.147 541.404 184.351C544.358 183.555 547.085 183.436 549.584 183.994C552.092 184.586 554.196 185.753 555.896 187.495C557.595 189.237 558.796 191.411 559.498 194.018C560.238 196.765 560.279 199.27 559.621 201.535C558.998 203.791 557.896 205.653 556.316 207.123C554.745 208.627 552.934 209.655 550.884 210.207C549.632 210.544 548.689 210.78 548.054 210.914L541.215 185.52C538.339 186.332 536.083 187.574 534.445 189.245C532.816 190.951 531.768 192.874 531.301 195.013C530.868 197.143 530.951 199.32 531.55 201.545ZM558.559 194.271C557.96 192.046 556.921 190.127 555.442 188.512C553.998 186.887 552.144 185.746 549.879 185.089C547.623 184.466 545.048 184.525 542.154 185.268L548.754 209.774C551.686 209.171 553.975 208.051 555.622 206.415C557.279 204.813 558.319 202.93 558.742 200.765C559.21 198.626 559.149 196.461 558.559 194.271Z"
        fill="#3F2305"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      />
      <motion.path
        d="M403.414 233.697C406.395 231.539 408.7 229.601 410.329 227.884C411.974 226.152 412.811 224.446 412.839 222.766C412.858 221.662 412.592 220.778 412.044 220.112C411.511 219.431 410.621 219.08 409.373 219.059C408.157 219.039 407.207 219.407 406.522 220.163C405.853 220.904 405.468 221.906 405.367 223.168L403.735 223.141C403.861 221.367 404.428 220 405.437 219.041C406.461 218.066 407.781 217.592 409.397 217.619C410.949 217.645 412.197 218.106 413.142 219.003C414.088 219.883 414.547 221.122 414.52 222.722C414.488 224.658 413.648 226.524 412.002 228.321C410.371 230.102 408.366 231.836 405.985 233.524L414.864 233.674L414.84 235.089L403.394 234.897L403.414 233.697ZM417.604 222.438C417.74 220.984 418.319 219.85 419.341 219.035C420.379 218.204 421.706 217.802 423.322 217.829C424.394 217.847 425.31 218.055 426.072 218.452C426.833 218.849 427.4 219.386 427.773 220.065C428.162 220.727 428.349 221.474 428.335 222.306C428.318 223.314 428.008 224.181 427.404 224.907C426.799 225.633 425.952 226.075 424.861 226.232L424.859 226.352C425.991 226.596 426.886 227.107 427.545 227.886C428.205 228.649 428.524 229.647 428.503 230.878C428.48 232.254 427.997 233.374 427.055 234.238C426.128 235.087 424.793 235.497 423.049 235.467C421.386 235.439 420.025 234.984 418.968 234.103C417.911 233.205 417.316 231.954 417.183 230.352L418.814 230.379C418.94 231.454 419.374 232.333 420.114 233.018C420.855 233.686 421.841 234.031 423.073 234.052C424.289 234.072 425.222 233.768 425.873 233.138C426.54 232.51 426.881 231.699 426.898 230.707C426.939 228.276 425.208 227.03 421.704 226.972L421.176 226.963L421.2 225.547L421.752 225.556C425.015 225.611 426.665 224.575 426.701 222.447C426.716 221.519 426.425 220.77 425.826 220.2C425.228 219.614 424.369 219.311 423.249 219.292C422.161 219.274 421.253 219.547 420.523 220.111C419.81 220.659 419.381 221.444 419.235 222.465L417.604 222.438Z"
        fill="#3F2305"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.rect
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
        x="207.5"
        y="0.5"
        width="620"
        height="487"
        stroke="#3F2305"
      />
      <motion.path
        d="M243.5 487.5L207.5 431V487.5H243.5Z"
        fill="#3F2305"
        stroke="#DFD7BF"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      />
      <motion.path
        d="M580.927 399.966L578.333 406.51C577.924 407.542 577.865 408.402 578.154 409.09C578.453 409.782 579.029 410.297 579.882 410.635C580.735 410.974 581.495 410.994 582.164 410.697C582.846 410.394 583.394 409.721 583.807 408.68L586.401 402.136L587.442 402.548L584.854 409.078C584.331 410.397 583.586 411.249 582.619 411.634C581.661 412.023 580.622 411.996 579.502 411.552C578.381 411.108 577.6 410.414 577.16 409.47C576.729 408.531 576.775 407.402 577.298 406.083L579.886 399.553L580.927 399.966Z"
        fill="#3F2305"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.path
        d="M596.462 404.735L595.131 415.84L594.019 415.706L595.35 404.602L596.462 404.735Z"
        fill="#3F2305"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.path
        d="M606.909 400.994L604.253 419.038L603.154 419.147L605.779 401.106L606.909 400.994Z"
        fill="#3F2305"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.path
        d="M613.898 403.911L616.618 410.404C617.047 411.427 617.605 412.084 618.293 412.374C618.991 412.659 619.764 412.625 620.61 412.271C621.456 411.916 622.014 411.399 622.284 410.719C622.56 410.025 622.482 409.162 622.049 408.129L619.328 401.636L620.361 401.203L623.076 407.681C623.624 408.989 623.687 410.12 623.264 411.071C622.852 412.019 622.09 412.726 620.978 413.192C619.867 413.657 618.823 413.707 617.849 413.341C616.884 412.97 616.127 412.131 615.579 410.822L612.865 404.344L613.898 403.911Z"
        fill="#3F2305"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.path
        d="M633.343 399.714L639.59 401.629L638.658 402.459L633.424 400.864L634.511 406.151L633.579 406.981L632.355 400.53L626.142 398.628L627.074 397.798L632.285 399.392L631.233 394.096L632.165 393.266L633.343 399.714Z"
        fill="#3F2305"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.path
        d="M654.847 236.824L651.977 296.946L601.345 264.399L654.847 236.824Z"
        fill="#DFD7BF"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
      />
    </svg>
  );
};
