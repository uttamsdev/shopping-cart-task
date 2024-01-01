import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="h-[95px]">
        <div className=" bg-[#F0F1F1]">
          <div className="w-[1220px] h-[25px] text-[12px] text-accent flex justify-between items-center mx-auto">
            <ul className="flex">
              <li className="mr-[19px]">
                <a href="#">Language</a>
              </li>
              <li className="mr-[37px]">
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Helpline: 0964781656</a>
              </li>
            </ul>
            <ul className="flex">
              <li className="mr-[30px]">
                <a href="#">Become a Seller</a>
              </li>
              <li className="mr-[38px]">
                <a href="#">Order Track</a>
              </li>
              <li>
                <a href="#" className="text-primary">
                  Sign up / Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white flex h-[70px] w-[1220px] items-center gap-[31px] mx-auto">
          <div className="h-[70px] flex items-center">
            <img
              className="w-[129px] h-[37px] mr-[28px]"
              src="logo.png"
              alt=""
            />
            <div className="flex items-center relative">
              <input
                className="w-[704px] h-[44px] rounded-[10px] bg-[#EFF0F5] pl-[13px] outline-none border-none placeholder-secondary"
                type="text"
                placeholder="Search Product"
              />
              <img
                className="w-[47px] h-[44px] absolute right-0"
                src="images/icons/search-icon.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="flex gap-[12px]">
              <img src="images/icons/people-icon.png" alt="" />
              <img src="images/icons/love-icon.png" alt="" />
              <img src="images/icons/cart-icon.png" alt="" />
            </div>
          </div>
          <div>
            <img
              className="h-[44px] w-[177px]"
              src="images/icons/cloud-icon.png"
              alt=""
            />
          </div>
        </div>
        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;
