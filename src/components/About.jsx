import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-[4vw] leading-[4vw] font-['Neue_Montreal'] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#a5b667]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach</h1>
          <button className="flex gap-10 items-center px-[12px] py-[15px] mt-10 bg-zinc-900 rounded-full w-40 text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#95a758]"></div>
      </div>
    </div>
  );
};

export default About;
