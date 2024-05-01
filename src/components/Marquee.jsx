import React from "react";

import { motion } from "framer-motion";
function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className=" w-full py-20 bg-[#004D43] rounded-xl"
    >
      <div className="border-t-2 border-b-2 border-zinc-300 flex items-center whitespace-nowrap overflow-hidden gap-4">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[10vw] font-bold uppercase"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[10vw] font-bold uppercase"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
