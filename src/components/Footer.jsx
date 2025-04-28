import React from "react";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1920px] py-5 px-20 mx-auto flex flex-col gap-10">
        <div className="space-y-10">
          <img src="/assets/footerLogo.png" alt="" />
          <hr className="border border-gray-500 max-w-[390px]" />
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex flex-col text-blue-700 space-y-2">
            <p className="font-semibold text-[16px] underline">Address</p>
            <p className="text-[18px] font-medium leading-[104%]">
              1875 Mission St Ste 103 #450 <br />
              San Francisco, CA 94103
            </p>
          </div>
          <div className="text-blue-700 space-y-2">
            <p className="font-semibold text-[16px] underline">Email</p>
            <p className="text-[18px] font-medium leading-[104%] underline">finance@mobiusengine.ai</p>
          </div>
          <div className="text-blue-700 space-y-2">
            <p className="font-semibold text-[16px] underline">Telephone</p>
            <p className="text-[18px] font-medium leading-[104%]">650-889-6026</p>
          </div>
          <div className="text-blue-700 space-y-2">
            <p className="font-semibold text-[16px] underline">Socials</p>
            <div className="h-[44px] w-[44px] border border-blue-700 rounded-full flex justify-center items-center">
              <img className=" object-contain  " src="/assets/in.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-700 mt-10">
        <div className="max-w-[1920px] py-5 px-20 mx-auto flex justify-between items-center gap-5">
          <p className="font-semibold text-[16px] text-white ">© 2023 Mobiusservices LLC</p>
          <div className="flex gap-20">
            <p className="font-semibold text-white text-[16px] ">Terms & Conditions</p>
            <p className="font-semibold  text-white text-[16px] ">Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
