import React from "react";

const JobApplicationServicePlans = () => {
  return (
    <div className="mt-20 pl-20 max-w-[1400px] mx-auto w-full justify-center items-center">
      <div className="">
        <h3 className="text-blue-700 text-[40px] font-semibold py-14">Job Application Service Plans</h3>
      </div>
      <div className="flex gap-16  max-w-[1296px]">
        <div className="border-2 border-blue-700 rounded-3xl max-w-[398px] px-8 pt-5 pb-8">
          <h4 className="font-semibold text-[32px] text-blue-700 pb-5">April Promo</h4>
          <h3 className="font-bold text-[56px] text-blue-700 pb-8">
            $35<span className="font-bold text-[26px]">/week</span>
          </h3>
          <hr />
          <div className=" pt-5  w-[308px] h-[289px]">
            <div className="flex ">
              <img className="h-5 w-5 mr-3 " src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">
                Curated jobs from 1M+ listings,
                <br /> refreshed every 48 hours
              </p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">
                Up to 20 human-applied roles per <br />
                week (no bots, no fluff — just real <br />
                company sites)
              </p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">
                Need more? Add extra apps for <br /> just $1.5 each
              </p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">
                Your own dedicated application <br />
                analyst
              </p>
            </div>
            <div className="flex  ">
              <img className="h-5 w-5 mr-3" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">
                Personalized with up to 10 filters <br /> & 5 job titles
              </p>
            </div>
          </div>
          <div className="mt-40 mb-1">
            <button className="text-white bg-blue-700 py-4 px-10 rounded-full ">Get Started →</button>
          </div>
        </div>
        <div className="border-2  border-blue-700 rounded-3xl max-w-[398px] px-8 pt-5 pb-8">
          <div className="flex justify-between">
            <h4 className="font-semibold text-[32px] text-blue-700 pb-5">Starter</h4>
            <button className="bg-blue-50 text-blue-700 border-2 rounded-full  w-[90px] h-[36px] border-blue-700 text-[16px] font-medium">
              Popular
            </button>
          </div>
          <h3 className="font-bold text-[56px] text-blue-700 pb-8">
            $50<span className="font-bold text-[26px]">/week</span>
          </h3>
          <hr />
          <div className="space-y-3 pt-5  gap-2 w-[308px] h-[269px] ">
            <div className="flex ">
              <p className="text-[18px] font-medium text-blue-700  pl-8 ">
                All the perks of the Promo Plan,
                <br /> plus:
              </p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">
                Resume review & story-focused <br />
                feedback
              </p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">Dedicated search specialist</p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">Up to 50 job apps/week</p>
            </div>
            <div className="flex  ">
              <img className="h-5 w-5 mr-3" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">Extra apps at $1.5 each</p>
            </div>
            <div className="flex  ">
              <img className="h-5 w-5 mr-3" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">Analyst support within 6 hours (SLA/PST hours)</p>
            </div>
          </div>
          <div className="mt-44 mb-1">
            <button className="text-white bg-blue-700 py-4 px-10 rounded-full  ">Get Started →</button>
          </div>
        </div>

        <div className="border-2 border-blue-700 rounded-3xl max-w-[398px] px-8 pt-5 pb-8">
          <h4 className="font-semibold text-[32px] text-blue-700 pb-5">Plus</h4>
          <h3 className="font-bold text-[56px] text-blue-700 pb-8">
            $100<span className="font-bold text-[26px]">/week</span>
          </h3>
          <hr />
          <div className="space-y-3 pt-5  gap-2 w-[308px] h-[173px]">
            <div className="flex ">
              <p className="text-[18px] font-medium text-blue-700 pl-8 ">
                Everything in Starter, with more <br /> muscle:
              </p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">Up to 75 apps/week</p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">Apply to 15 job titles</p>
            </div>
            <div className="flex ">
              <img className="h-5 w-5 mr-3" src="/assets/rightMark.png" alt="" />
              <p className="text-[18px] font-medium text-blue-700 ">Analyst + full application team on Pacific hours</p>
            </div>
          </div>
          <div className=" mt-[270px] mb-1 ">
            <button className="text-white bg-blue-700 py-4 px-10 rounded-full pt-15 ">Get Started →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationServicePlans;
