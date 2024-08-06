import { motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-48 px-5">
        {["We Create", "Eye-Opening", "Presentation"].map((item, index) => (
          <div className="masker ">
            <div className="w-fit flex">
              {index == 1 && (
                <motion.div
                  initial={{ width: "0" }}
                  animate={{ width: "8vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="mr-[1vw] rounded-md w-[8vw] h-[5.7vw] bg-green-500 relative -top-[0.6vw]"
                ></motion.div>
              )}
              <h1
                key={index}
                className=" uppercase text-[8vw] leading-[7.5vw] tracking-tighter font-['Founders_Grotesk_Medium'] font-medium"
              >
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t-[2px] mt-9 border-zinc-800 flex text-center justify-between px-12 py-4">
        {[
          "For Public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-zinc-300">{item}</p>
        ))}

        <div className="button flex text-center gap-1">
          <div className="px-4 py-1 border-[2px] text-zinc-200 border-zinc-600 text-sm font-light rounded-full">
            START THE PROJECT
          </div>
          <div className="w-9 h-9 flex items-center justify-center border-[2px] border-zinc-600 rounded-full">
            <span className="rotate-[-45deg]">
              <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
