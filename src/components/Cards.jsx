import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 items-center flex gap-5 px-20">
      <div className="cardcontainer w-1/2 h-[60vh]">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center	justify-center	">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-3 py-1 border-[1px] border-[#CDEA68] bottom-3 left-3 rounded-full text-sm text-[#CDEA68]">
            ©️2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[60vh]">
        <div className="card relative w-full h-full rounded-xl bg-[#212121] flex items-center	justify-center	">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-3 py-1 border-[1px] left-4 bottom-3 rounded-full text-sm">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card relative w-full h-full rounded-xl bg-[#212121] flex items-center	justify-center	">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-3 py-1 border-[1px] left-5 bottom-3 rounded-full text-sm">
            BUSSINESS BOOTCAMP ALUMINI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
