import { motion } from "framer-motion";
import React from "react";

const AnimatedBus = () => {
  return (
    <div className="relative w-full h-[200px] flex items-center justify-center">
      {/* SVG Path */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1000"
        height="200"
        viewBox="0 0 1000 200"
        className="absolute"
      >
        <path
          d="M 0 100 Q 250 0, 500 100 T 1000 100"
          stroke="gray"
          fill="transparent"
          strokeWidth="2"
          id="motionPath"
        />
      </svg> */}

      {/* Moving Bus */}
      <motion.div
        className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg"
        animate={{ x: [0, 500, 1000], y: [100, 0, 100] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        🚍
      </motion.div>
    </div>
  );
};

export default AnimatedBus;