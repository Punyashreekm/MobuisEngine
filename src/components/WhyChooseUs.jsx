import React from "react";

const WhyChooseUs = () => {
  const data = [
    {
      icon: "/assets/trust.png",
      name: "Tried, Tested, Trusted,",
      description: (
        <>
          Built by folks with 40+ years in tech <br /> and hiring — we know the game, and <br /> we’ve got your back.
        </>
      ),
    },
    {
      icon: "/assets/Profile 1 .png",
      name: "Real People, Real Help",
      description: (
        <>
          A hands-on team that actually cares <br /> — guiding you through every twist in <br /> your career path.
        </>
      ),
    },
    {
      icon: "/assets/star.png",
      name: "Beat the Line,",
      description: (
        <>
          We search, shortlist, and apply for <br /> you, so your name shows up first — <br /> every single day.
        </>
      ),
    },
  ];

  return (
    <div className="max-w-[1412px]  justify-center bg-blue-50 w-full mx-auto rounded-[34px] p-10 py-14 px-14 space-y-10">
      <div className="  ">
        <h3 className="font-medium text-[40px] text-blue-900">Why Choose Us?</h3>
      </div>
      <div className="flex gap-24 w-full   ">
        {data.map((item) => {
          return (
            <div className="flex flex-1 p-8 w-[356px]  border-2 border-blue-900 rounded-[34px]  flex-col  gap-6 pt-12 pb-12 ">
              <div className="">
                <img src={item.icon} alt="" />
              </div>
              <div>
                <p className="text-blue-900 text-[24px] font-semibold py-6">{item.name}</p>
                <p className="text-blue-900 text-[18px] font-normal">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
