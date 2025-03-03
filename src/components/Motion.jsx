import React from "react";
import { motion } from "framer-motion";

const Motion = () => {
  return (
    <div className="relative w-full h-[200px] overflow-hidden">
      <svg className="absolute w-full h-full" viewBox="0 0 1000 200">
        <path
          id="motionPath"
          d="M 0 100 Q 250 0, 500 100 T 1000 100"
          fill="transparent"
          stroke="gray"
          strokeWidth="2"
        />
      </svg>
      <motion.div
        className="w-[100px] h-[100px] bg-blue-500 rounded-full absolute top-0 left-0"
        animate={{ offsetDistance: "100%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          offsetPath: "path('M 0 100 Q 250 0, 500 100 T 1000 100')",
          offsetRotate: "auto",
        }}
      />
    </div>
  );
};

export default Motion;