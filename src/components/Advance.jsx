import React from "react";

const Advance = () => {
  return (
    <>
      <div className="max-w-[1296px] rounded-3xl bg-blue-700 mx-auto my-14 px-12 py-8">
        <div className=" flex justify-between">
          <div>
            <h3 className="text-white text-[32px] font-semibold ">Advance</h3>
            <p className="text-white font-semibold text-[18px]">Top-tier support for serious job hunters:</p>
            <hr className=" border border-gray-400 w-[391px] my-10" />
          </div>

          <h1 className="text-white text-[56px] font-bold">
            $$150<span className="font-bold text-[26px]">/week</span>
          </h1>
        </div>

        <div className="">
          <div className="flex flex-row gap-8 pb-4">
            <div className="flex">
              <img className="h-5 w-5 mr-3 mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-white ">Everything in Plus</p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3 mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-white ">Custom Resumes & Cover Letters</p>
            </div>
          </div>
          <div className="flex flex-row gap-8 pb-4">
            <div className="flex ">
              <img className="h-5 w-5 mr-3 mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-white">20 fully customized applications/week</p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3 mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-white ">Help with complex job searches</p>
            </div>
          </div>
          <div className="flex flex-row gap-8 pb-4">
            <div className="flex ">
              <img className="h-5 w-5 mr-3 mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-white">
                Access to senior resume experts, Founder & Exec Coaches
              </p>
            </div>
          </div>
        </div>
        <div className="justify-end flex ">
          <button className="text-blue-700  text-[20px] font-semibold rounded-full bg-white px-12 py-4">
            Get Started →
          </button>
        </div>
      </div>

      <hr className="border border-gray-400 w-full max-w-[1296px] mx-auto my-8" />
    </>
  );
};

export default Advance;
