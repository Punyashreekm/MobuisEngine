const NavBar = () => {
  return (
    <div className="  w-full px-20 py-6">
      <div className=" flex justify-between w-full">
        <div className="flex items-center  gap-4">
          <img className="" src="/Logo.png" alt="" />
          <span className="  font-semibold text-[26px] text-white">MobuisEngine</span>
        </div>
        <div className="flex gap-10 items-center font-medium text-[25px] text-white">
          <h4>Home</h4>
          <h4>About Us</h4>
          <h4>Plans</h4>
          <h4>Testimonials</h4>
          <h4>Privacy Policy</h4>
          <h4>More</h4>
        </div>
        <button className="bg-white rounded-full py-2 px-7 text-[25px] font-medium">Get Started</button>
      </div>
    </div>
  );
};

export default NavBar;
