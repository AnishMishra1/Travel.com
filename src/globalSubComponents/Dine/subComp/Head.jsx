import React from "react";
import FreeService from "./FreeService";


const Head = () => {
  return (
    <div className="flex flex-col justify-center items-center p-[4rem] h-auto w-auto bg-white">
      <div className=" lg:py-[4rem] py-[2rem]">
        <h3 className=" font-bold text-1xl text-center ">Kwality Experience</h3>
        <div className="py-[0.8rem]">
          <h1 className=" font-bold md:text-5xl text-3xl text-center font-['Kanit']">
            Kwality <span className="  text-[#56ab91] ">Premium </span>Select
          </h1>
        </div>
      </div>
      <FreeService />
    </div>
  );
};

export default Head;
