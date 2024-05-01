import React from "react";

import { motion } from "framer-motion";
function Marquee() {
  return (
    <div className=" w-full py-20 bg-[#004D43] rounded-xl">
      <div className="border-t-2 border-b-2 border-zinc-300 flex items-center gap-4 whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[10vw] font-bold uppercase"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[10vw] font-bold uppercase"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
