import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".001"
      className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="border-t-[1px] border-zinc-400 border-b-[1px] pb-5 pt-2 flex whitespace-nowrap ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[24vw] leading-none font-['Founders_Grotesk_Medium'] tracking-tighter -mb-[7vw] mt-10 uppercase pr-20"
          style={{ fontWeight: "400" }}
        >
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className="text-[24vw] leading-none font-['Founders_Grotesk_Medium'] tracking-tighter -mb-[7vw] mt-10 uppercase pr-20"
          style={{ fontWeight: "40" }}
        >
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
