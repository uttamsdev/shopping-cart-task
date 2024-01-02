import React from "react";

const ServiceDetails = () => {
  return (
    <div className="pb-[15px] pl-[8px] pr-[8px] md:pl-0 md:pr-0">
      <div className="border-sm w-full md:w-[1188px] h-auto md:h-[150px] flex flex-col md:flex-row justify-center items-start md:items-center mx-auto gap-[12px] md:gap-[115px] mt-[12px] md:mt-[34px] relative rounded-sm">
        <div className="w-full sm:w-auto flex gap-[0px] md:gap-[57px] custom-border md:border-none p-[10px] md:p-0 mx-auto md:mx-0 rounded-sm md:rounded-none">
          <div className="flex gap-[15px] w-full">
            <img className="h-[70px] w-[70px]" src="images/user.png" alt="" />
            <div>
              <h4 className="text-accent text-[14px] font-medium">
                Al-Amin Gallery
              </h4>
              <div className="flex items-center mt-[5px] gap-[5px]">
                <div className="h-[7px] w-[7px] bg-[#D9D9D9] rounded-full" />
                <p className="text-[#9C9C9C] text-[10px]">Active 6 Hours ago</p>
              </div>
              <div className="flex gap-[15px] mt-[15px]">
                <p className="text-[#37A5BF] text-[12px] md:text-[14px] font-medium">
                  Visit Store
                </p>
                <p className="flex items-center gap-[2px]">
                  <img
                    className="w-[14px] h-[14px]"
                    src="images/icons/msg.png"
                    alt=""
                  />
                  <p className="text-[#37A5BF] text-[12px] font-medium">Chat</p>
                </p>
              </div>
            </div>
            <img
              className="hidden md:block absolute left-[535px]"
              src="images/icons/div.png"
              alt=""
            />
            <img
              className="hidden md:block absolute right-[355px]"
              src="images/icons/div.png"
              alt=""
            />
          </div>

          <div className="ml-[22px] md:ml-0">
            <div className="flex">
              <p className="text-secondary w-[100px] md:w-[137px] text-[10px] md:text-[12px]">
                Seller Rating:
              </p>
              <p className="text-[14px] md:text-[16px] font-medium text-[#2E2E2E]">
                95%
              </p>
            </div>
            <div className="flex mt-[5px] md:mt-[12px]">
              <p className="text-secondary  w-[100px] md:w-[137px] text-[10px] md:text-[12px]">
                Ship on Time:
              </p>
              <p className="text-[14px] md:text-[16px] font-medium text-[#2E2E2E] text-[10px">
                90%
              </p>
            </div>
            <div className="flex mt-[5px] md:mt-[12px]">
              <p className="text-secondary  w-[100px] md:w-[137px] text-[10px] md:text-[12px]">
                Response Rate:
              </p>
              <p className="text-[14px] md:text-[16px] font-medium text-[#2E2E2E]">
                85%
              </p>
            </div>
          </div>
        </div>
        <div className=" pl-[8px] md:pl-0 w-full md:w-[175px] md:border-none order-2 md:order-1 p-2 md:p-0">
          <div className="custom-border mb-2"></div>
          <p className="text-[#5A5A5A] text-[10px] md:text-[16px] font-medium mb-[4px]">
            Service:
          </p>
          <div className="w-[175px]">
            <p className="flex items-center gap-[5px] mb-[4px]">
              <img
                className="w-[16px] h-[16px]"
                src="images/icons/timer.png"
                alt=""
              />
              <p className="text-primary text-[10px] md:text-[14px] font-medium">
                7 day return
              </p>
            </p>
            <p className="text-secondary text-[8px] md:text-[12px] pl-[24px]">
              Change of mind is not applicable
            </p>
            <p className="flex items-center gap-[5px] mt-[8px]">
              <img
                className="w-[16px] h-[16px]"
                src="images/icons/timer.png"
                alt=""
              />
              <p className="text-[#9C9C9C] text-[10px] md:text-[14px] font-medium">
                Warranty Not Available
              </p>
            </p>
          </div>
        </div>

        <div className=" pl-[8px] md:pl-0 order-1 md:order-2">
          <p className="text-[#5A5A5A] text-[10px] md:text-[16px] font-medium mb-[5px]">
            Delivery:
          </p>
          <div className="w-[252px]">
            <p className="flex items-center gap-[5px] mb-[7px]">
              <img
                className="w-[16px] h-[16px]"
                src="images/icons/support.png"
                alt=""
              />
              <p className="text-primary text-[10px] md:text-[14px] font-medium">
                <span>Free Delivery </span>
                <span className="text-[10px] md:text-[12px] text-secondary">
                  4Nov - 8Nov 3- 5 days
                </span>
              </p>
            </p>
            <p className="text-secondary text-[8px] md:text-[12px] pl-[24px]">
              Enjoy free shipping promotion with minimum spend of ৳ 499 from{" "}
              <span className="text-primary">xpress.</span>
            </p>
            <p className="flex items-center gap-[5px] mt-[5px]">
              <img
                className="w-[16px] h-[16px]"
                src="images/icons/call.png"
                alt=""
              />
              <div className="text-primary text-[10px] md:text-[14px] flex items-center justify-between w-full">
                <p>Cash on delivery available</p>
                <p className="text-secondary text-[8px] md:hidden">৳ 55</p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
