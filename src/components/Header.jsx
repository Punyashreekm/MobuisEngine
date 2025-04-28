import React from "react";

const Header = () => {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-[1304px] w-full mx-auto py-36 flex justify-between ">
        <div className="flex flex-col gap-10">
          <h1 className="text-white font-[600] leading-[104%] text-[80px] ">
            Land job interviews <br />
            <span className="text-[#0649E7]">10x </span>faster
          </h1>
          <p className="text-[20px] font-normal text-white leading-[104%]">
            Custom-built resumes that match your goals, keywords, and <br />
            recruiter expectations.
          </p>
          <button className="text-blue-800  text-[21px] bg-white rounded-full py-3 px-10 font-medium flex-none w-fit">
            Get Started →
          </button>
        </div>
        <div>
          <img src="/assets/header-img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
