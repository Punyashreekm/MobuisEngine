import React from "react";

const HowWeWork = () => {
  const data = [
    {
      name: "Submit Intake Form",
    },
    {
      name: "We do the search and curation for list of jobs",
    },
    {
      name: "You approve, we do the tedious part (applying)",
    },
    {
      name: "You get the interviews",
    },
  ];
  return (
    <div className="w-full mx-auto mb-24 mt-10">
      <div className="max-w-[1304px] w-full mx-auto">
        <h3 className="text-blue-600 font-medium text-[40px] pt-7 pb-10">How we work?</h3>
        <div className="flex w-full justify-between  mx-auto">
          {data.map((item, index) => {
            return (
              <div className="w-[290px] space-y-4">
                <figure className="rounded-full border-blue-900 text-black  text-[56px] font-normal w-[81px] h-[81px] border flex justify-center items-center">
                  {index + 1}
                </figure>
                <hr className="border border-blue-600 w-[230px]" />
                <p className="font-medium text-[26px]  text-blue-600 leading-[104%] ">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
