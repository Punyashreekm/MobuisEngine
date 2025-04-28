import React from "react";

const ResumeBuilding = () => {
  return (
    <div className="mt-20 pb-12 space-y-16 max-w-[1296px] mx-auto w-full justify-center items-center">
      <div className="">
        <h3 className="text-blue-700 text-[40px] font-semibold ">Resume Building & Coaching</h3>
        <p className="text-[18px] font-medium text-blue-700">
          Let’s talk about where you’re headed — and how your resume can get you there. <br />
          <b> Schedule a call to get started</b>.
        </p>
      </div>
      <div className="flex gap-16  max-w-[1296px] justify-center">
        <div className="border-2 border-blue-700 rounded-3xl max-w-[450px] px-8 pt-5 pb-8">
          <div className="pb-5">
            <h4 className="font-semibold text-[32px] text-blue-700 ">Resume Rebuild</h4>
            <p className="text-blue-700 text-[18xp] font-medium">
              Crafted for senior to VP-level professionals <br /> ready for their next big step.
            </p>
          </div>
          <h3 className="font-bold text-[56px] text-blue-700 pb-8">
            $1000<span className="font-bold text-[26px]">one time</span>
          </h3>
          <hr />
          <div className=" pt-5  w-[308px] h-[289px]">
            <div className="flex ">
              <img className="h-5 w-5 mr-3 mt-1 " src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">3× 30-min coaching</p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3 mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">Focused on storytelling, not just formatting</p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3 mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">Analyst + full application team on Pacific hours</p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3 mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">
                Tailored to your target industry, company, or role
              </p>
            </div>
            <div className="flex  ">
              <img className="h-5 w-5 mr-3  mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">
                Direct work with our co-founder (ex- Google, JP Morgan)
              </p>
            </div>
            <div className="flex  ">
              <img className="h-5 w-5 mr-3  mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">
                Executive coaching from UC Berkeley alum with 10+ yrs experience
              </p>
            </div>
            <div className="flex  ">
              <img className="h-5 w-5 mr-3 mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">Resume Rebuild portfolio available upon request</p>
            </div>
          </div>
          <div className="mt-40 mb-1">
            <button className="text-white bg-blue-700 py-4 px-10 rounded-full ">Get Started →</button>
          </div>
        </div>
        <div className="border-2 border-blue-700 rounded-3xl max-w-[450px] px-8 pt-5 pb-8">
          <div className="pb-5">
            <h4 className="font-semibold text-[32px] text-blue-700 ">Interview Prep</h4>
            <p className="text-blue-700 text-[18xp] font-medium">
              Two sessions to sharpen your story, <br />
              confidence, and clarity — fast.
            </p>
          </div>
          <h3 className="font-bold text-[56px] text-blue-700 pb-8">
            $500<span className="font-bold text-[26px]">one time</span>
          </h3>
          <hr />
          <div className=" pt-5  w-[308px] h-[289px]">
            <div className="flex ">
              <img className="h-5 w-5 mr-3 mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">2×45-min live coaching with our co- founder</p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3 mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">Real-time, practical feedback</p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3 mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">Build clarity, empathy & executive presence </p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3 mt-1" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">
                For senior and leadership roles — technical <br /> & non-technical
              </p>
            </div>
          </div>
          <div className="mt-40 mb-1">
            <button className="text-white bg-blue-700 py-4 px-10 rounded-full ">Get Started →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilding;
