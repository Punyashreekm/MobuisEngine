import React from "react";

const AboutUs = () => {
  return (
    <div className="  flex flex-col w-full max-w-[1930px] max-h-[1140px] justify-center py-32 ">
      <h3 className="text-white text-[40px] font-medium  ml-80  pb-12">About Us</h3>
      <div className="max-w-[906px] max-h-[635px] w-full mx-auto space-y-20 ">
        <div className="flex gap-24 items-center">
          <img className="w-[262px] h-[275px]" src="/assets/ashwin-img.png" alt="" />
          <p className="text-white font-normal text-[16px]">
            <b>Ashwin</b> is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years
            of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google
            and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.
            <br />
            <br />
            Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their
            dreams.
          </p>
        </div>
        <div className="flex  gap-24 items-center">
          <img className="w-[262px] h-[275px] " src="/assets/nicole-img.png" alt="" />

          <div>
            <p className="text-white font-normal text-[16px]">
              <b>Nicole</b> is an Executive coach at Mobius specializing in resume builds and career advisory.
              <br />
              <br />
              With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product
              strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted,
              results-driven approach to help clients confidently stand out and land roles that truly match their skills
              and potential.
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 justify-center mt-10 mb-none ml-[65px]">
        <span className="text-white text-center text-[15px] pl-2 ">Learn more about our Board of Advisors↗ </span>
        <span className="text-white text-center text-[15px]  mr-10">Follow us on our Linkedin page ↗</span>
      </div>
    </div>
  );
};

export default AboutUs;
