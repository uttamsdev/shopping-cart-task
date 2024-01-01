import React from "react";
import ServiceDetails from "./ServiceDetails";

const ProductPage = () => {
  const stars = Array.from({ length: 5 });
  const sizes = [{ size: "M" }, { size: "L" }, { size: "XL" }, { size: "XXL" }];
  const colors = [
    { color: "#FFE91F" },
    { color: "#79CAAD" },
    { color: "#FF8E40" },
    { color: "#1F93FF" },
    { color: "#E01FFF" },
    { color: "#FF1F1F" },
  ];
  const watches = [
    { img: "images/watch/watch-2.png" },
    { img: "images/watch/watch-3.png" },
    { img: "images/watch/watch-4.png" },
    { img: "images/watch/watch-5.png" },
    { img: "images/watch/watch-6.png" },
  ];
  return (
    <div className="bg-[#EDEDED]">
      <div className="relative md:hidden">
        <div className="absolute left-8 top-0 z-10 flex items-center justify-center gap-2">
          <img
            className="h-[28px] w-[28px]"
            src="images/icons/back-ic.png"
            alt=""
          />
          <div className="flex items-center relative">
            <img className="absolute left-2" src="images/icons/search.png" alt="" />
            <input
              style={{ borderRadius: "45px" }}
              type="text"
              className="  bg-[#00000073] outline-none border-none w-[229px] h-[28px] text-white placeholder-white pl-6 placeholder-text"
              placeholder="Search product"
            />
          </div>
          <img src="images/icons/cart-ic.png" alt="" />
          <img src="images/icons/menu-ic.png" alt="" />
        </div>
        <div className="bg-[#00000073] w-[24px] h-[16px] text-[12px] rounded-sm text-white text-center absolute z-10  top-96 left-48">
          1/9
        </div>
      </div>
      <div className="bg-white md:w-[1220px] mx-auto p-[0px] md:p-4">
        <div className="flex flex-col sm:flex-row gap-[20px] relative items-center md:items-start">
          <div>
            <div className=" w-full h-[400px] md:w-[450px] md:h-[450px] ">
              <img
                className="rounded-sm"
                src="images/watch/watch-1.png"
                alt=""
              />
            </div>
            <div className="hidden md:block">
              <div className="flex gap-[5px] mt-[10px] relative">
                {watches.map((item) => (
                  <img className="rounded-sm" src={item.img} alt=""></img>
                ))}
                <img
                  className="absolute left-0 bottom-8"
                  src="images/icons/arrow-left.png"
                  alt=""
                />
                <img
                  className="absolute right-1 bottom-8"
                  src="images/icons/arrow-right.png"
                  alt=""
                />
                <img
                  className="absolute left-0 bottom-0 "
                  src="images/icons/video.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className=" w-[328px] md:w-full">
            <h1 className="text-[#2E2E2E] text-[14px] md:text-[20px] leading-7 mb-[8px] md:mb-3 ">
              Valvet Travel Neck Pillow Folding U-Shaped Memory Foam + Eye Masks
              Ear buds Soft Massage Pillow for Sleeping in Bus Car Plane
            </h1>
            <div className="flex flex-col md:flex-row justify-between mb-[12px] md:mb-0">
              <div className="flex items-center">
                <p className="text-sm md:text-base font-medium text-accent mr-[6px]">
                  4.7
                </p>
                <div className="border-r-2 flex pr-[10px]">
                  {stars.map((index) => (
                    <img
                      className="w-[18px] h-[17px]"
                      src="images/icons/star.png"
                      alt="Star"
                    ></img>
                  ))}
                </div>
                <p className="border-r-2 px-[10px]">
                  <span className="text-[#5A5A5A] text-sm md:text-base font-medium">
                    24
                  </span>{" "}
                  <span className="text-sm text-[#9C9C9C]">Ratings</span>
                </p>
                <p>
                  <span className="text-[#5A5A5A] text-base font-medium pl-[10px]">
                    2.5k
                  </span>{" "}
                  <span className="text-sm text-[#9C9C9C]">Sold</span>
                </p>
              </div>
              <div className="hidden md:block">
                <div className="flex items-center">
                  <img
                    className="mr-3 cursor-pointer"
                    src="images/icons/circle-share-icon.png"
                    alt=""
                  />
                  <img
                    className="mr-[34px] cursor-pointer"
                    src="images/icons/circle-love-icon.png"
                    alt=""
                  />
                  <p className="text-sm font-medium text-secondary cursor-pointer">
                    Report
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <p className="font-medium text-primary text-[16px] md:text-[32px] mr-[10px]">
                ৳ 1,990/-
              </p>
              <p className="line-through text-[#737373] text-sm md:text-base mr-[14px]">
                ৳ 2,999
              </p>
              <p className="w-[66px] h-[20px] bg-primary text-white text-center text-[9px] md:text-[12px] flex items-center">
                <p>-34% OFF</p>
              </p>
            </div>
            <p className="text-[12px] md:text-sm mt-[10px]">
              <span className="text-secondary">Brand:</span>{" "}
              <span className=" text-accent font-normal md:font-medium">
                No brand
              </span>
            </p>
            <div className="flex items-center mt-[14px] md:mt-[20px]">
              <p className="text-[14px] text-secondary mr-[8px]">Size: </p>
              <div className="flex items-center">
                {sizes.map((size, index) => (
                  <div className=" rounded-sm text-[14px] font-medium mr-[4px]">
                    <p
                      className={
                        index === sizes.length - 1
                          ? "h-[26px] w-[41px] text-white bg-primary flex justify-center items-center"
                          : "bg-[#EAEAEA] w-[25px] h-[26px] text-primary flex justify-center items-center"
                      }
                    >
                      {size?.size}
                    </p>
                  </div>
                ))}
                <div className="block md:hidden">
                  <div className="flex items-center">
                    <img
                      className="mr-[4px] ml-[25px] cursor-pointer"
                      src="images/icons/circle-share-icon.png"
                      alt=""
                    />
                    <img
                      className="mr-[10px] cursor-pointer"
                      src="images/icons/circle-love-icon.png"
                      alt=""
                    />
                    <p className="text-sm font-medium text-secondary cursor-pointer">
                      Report
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[12px] md:text-sm  mt-[12px] md:mt-[20px]">
              <span className="text-secondary">Color:</span>{" "}
              <span className=" text-accent font-normal md:font-medium">
                Black
              </span>
            </p>
            <div className="flex gap-[5px] mt-[10px]">
              {colors.map((item) => (
                <div className=" h-[42px] w-[42px] rounded-sm border-sm relative flex items-center justify-center">
                  <div
                    style={{ backgroundColor: item.color }}
                    className="w-[32px] h-[32px] absolute z-10"
                  ></div>
                </div>
              ))}
            </div>
            <p className="text-[12px] md:text-sm  mt-[12px] md:mt-[34px]">
              <span className="text-secondary">Sku:</span>{" "}
              <span className=" text-accent font-normal md:font-medium">
                hdgfhdgf6756dsghgf7
              </span>
            </p>
            <div className="flex items-center mt-[12px] md:mt-[20px]">
              <p className="text-[12px] md:text-sm  text-secondary mr-[8px]">
                Quantity:{" "}
              </p>
              <div className="bg-[#F7F7F7] rounded-sm w-[92px] h-[38px] md:w-[106px] md:h-[40px] flex  justify-center  items-center gap-[4.2px]">
                <div
                  style={{ borderRadius: "5px" }}
                  className="w-[26px] h-[26px] flex  justify-center  items-center  bg-white"
                >
                  <img src="images/icons/Minus.png" alt="" />
                </div>
                <div className="text-accent text-sm">01</div>
                <div
                  style={{ borderRadius: "5px" }}
                  className="w-[26px] h-[26px] flex  justify-center  items-center bg-white"
                >
                  <img src="images/icons/Add.png" alt="" />
                </div>
              </div>
              <div className="text-[#F97316] text-[12px] font-medium ml-[10px]">
                Only 46 pieces available
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex gap-[15px] mt-[28px]">
                <button className="w-[180px] h-[44px] bg-primary rounded-sm text-[14px] font-medium text-white">
                  Buy Now
                </button>
                <button className="w-[180px] h-[44px] bg-[#FCD34D] rounded-sm text-[14px] font-medium text-[#2E2E2E] flex justify-center items-center gap-[10px]">
                  <img src="images/icons/cart.png" alt="" />
                  Add to cart
                </button>
              </div>
            </div>
            <img
              className="absolute right-[16px] bottom-0 rounded-sm hidden md:block"
              src="images/banner.png"
              alt=""
            />
          </div>
        </div>
        <ServiceDetails></ServiceDetails>
      </div>
    </div>
  );
};

export default ProductPage;
