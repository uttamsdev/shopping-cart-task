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
      <div className="bg-white page-container mx-auto p-4">
        <div className="flex gap-[20px] relative">
          <div>
            <div className="w-[450px] h-[450px] ">
              <img
                className="rounded-sm"
                src="images/watch/watch-1.png"
                alt=""
              />
            </div>
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
                className="absolute left-0 bottom-0"
                src="images/icons/video.png"
                alt=""
              />
            </div>
          </div>

          <div>
            <h1 className="text-[#2E2E2E] text-[20px] leading-7 mb-3">
              Valvet Travel Neck Pillow Folding U-Shaped Memory Foam + Eye Masks
              Ear buds Soft Massage Pillow for Sleeping in Bus Car Plane{" "}
            </h1>
            <div className="flex justify-between">
              <div className="flex items-center">
                <p className="text-base font-medium text-accent mr-[6px]">
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
                  <span className="text-[#5A5A5A] text-base font-medium">
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
            <div className="flex items-center">
              <p className="font-medium text-primary text-[32px] mr-[10px]">
                ৳ 1,990/-
              </p>
              <p className="line-through text-[#737373] text-base mr-[14px]">
                ৳ 2,999
              </p>
              <p className="w-[66px] h-[20px] bg-primary text-white text-center text-[12px]">
                -34% OFF
              </p>
            </div>
            <p className="text-sm mt-[10px]">
              <span className="text-secondary">Brand:</span>{" "}
              <span className=" text-accent font-medium">No brand</span>
            </p>
            <div className="flex items-center mt-[20px]">
              <p className="text-[14px] text-secondary mr-[8px]">Size: </p>
              <div className="flex">
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
              </div>
            </div>
            <p className="text-sm mt-[20px]">
              <span className="text-secondary">Color:</span>{" "}
              <span className=" text-accent font-medium">Black</span>
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
            <p className="text-sm mt-[34px]">
              <span className="text-secondary">Sku:</span>{" "}
              <span className=" text-accent font-medium">
                hdgfhdgf6756dsghgf7
              </span>
            </p>
            <div className="flex items-center mt-[20px]">
              <p className="text-sm text-secondary mr-[8px]">Quantity: </p>
              <div className="bg-[#F7F7F7] rounded-sm w-[106px] h-[40px] flex  justify-center  items-center gap-[4.2px]">
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
            <div className="flex gap-[15px] mt-[28px]">
              <button className="w-[180px] h-[44px] bg-primary rounded-sm text-[14px] font-medium text-white">
                Buy Now
              </button>
              <button className="w-[180px] h-[44px] bg-[#FCD34D] rounded-sm text-[14px] font-medium text-[#2E2E2E] flex justify-center items-center gap-[10px]">
                <img src="images/icons/cart.png" alt="" />
                Add to cart
              </button>
            </div>
            <img
              className="absolute right-[16px] bottom-0 rounded-sm"
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
