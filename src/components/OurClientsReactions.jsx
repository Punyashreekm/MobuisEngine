import React from "react";

const OurClientsReactions = () => {
  const data = [
    {
      name: (
        <>
          Holly is a <b>senior executive</b> who got <br /> over <b> 10 job interviews</b> and an offer <br /> she
          accepted
        </>
      ),
      icon: "/assets/rightIcon.png",
    },
    {
      name: (
        <>
          Holly is a <b>senior executive</b> who got <br /> over <b> 10 job interviews</b> and an offer <br /> she
          accepted
        </>
      ),
      icon: "/assets/rightIcon.png",
    },
    {
      name: (
        <>
          Holly is a <b>senior executive</b> who got <br /> over <b> 10 job interviews</b> and an offer <br /> she
          accepted
        </>
      ),
      icon: "/assets/rightIcon.png",
    },
  ];
  return (
    <div className="w-full max-w-[1304px] mx-auto mb-24 mt-12">
      <div className=" w-full mx-auto pb-12">
        <h3 className="font-medium text-[40px] text-blue-700">What our clients have to say</h3>
      </div>
      <div className="flex gap-10 w-full">
        {data.map((item) => {
          return (
            <div className="flex flex-1 bg-blue-700  border-blue-700 rounded-[34px]  flex-col  gap-6">
              <div className="h-[263px] bg-white w-full border-2 border-blue-700  justify-center flex items-center rounded-[34px]">
                <img src="/assets/button.png" alt="" />
              </div>
              <div className=" pl-8  text-[20px] leading-[104%]">
                <p className="text-white ">{item.name}</p>
              </div>
              <div className="text-end w-full flex justify-end items-center p-4 pt-0 ">
                <img className="bg-white rounded-full object-cover p-5 " src={item.icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-10 py-20 ">
        <button className=" border-blue-700 border-2 text-blue-700 bg-white text-[20px] font-normal rounded-full px-8 py-4">
          More customer testimonials ↗
        </button>
        <button className=" border-blue-700 border-2 text-white bg-blue-700 text-[20px] font-semibold rounded-full px-8 py-4">
          Get Started →
        </button>
      </div>
    </div>
  );
};

export default OurClientsReactions;
