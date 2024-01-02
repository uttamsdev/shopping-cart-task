import React, { useContext, useState } from "react";
import ServiceDetails from "./ServiceDetails";
import { MyContext } from "../context/Context";

const ProductPage = () => {
  const { cartValue, setCartValue } = useContext(MyContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  let formatteQuantity = String(quantity).padStart(2, '0');

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

  const doPlus = () => {
    setQuantity(quantity+1);
  }

  const doMinus = () => {
    if(quantity!==1){
      setQuantity(quantity-1);
    }
    else {
      alert("Your quantity must be at least one");
    }
  }
  const images = [
    "images/watch/watch-2.png",
    "images/watch/watch-3.png",
    "images/watch/watch-4.png",
    "images/watch/watch-5.png",
    "images/watch/watch-6.png"
  ]
  const watches = [
    { img: "images/watch/watch-2.png" },
    { img: "images/watch/watch-3.png" },
    { img: "images/watch/watch-4.png" },
    { img: "images/watch/watch-5.png" },
    { img: "images/watch/watch-6.png" },
  ];
  const addToCart = () => {
    setCartValue(cartValue+1);
  }
  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  let touchStartX = 0;
  const swipeThreshold = 50;
  const handleSwipe = (direction) => {
    if (direction === 'left') {
      if (currentIndex < images.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    } else if (direction === 'right') {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }
  };


  const onTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const difference = touchStartX - touchEndX;
    
    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        handleSwipe('left');
      } else {
        handleSwipe('right');
      }
    }
  };



  return (
    <div className="bg-[#EDEDED]">
      <div className="w-full relative md:hidden">
        <div className="absolute left-0 top-0 right-0 bottom-0 pt-[20px] z-10 flex items-center justify-center gap-2">
          <div className="w-[28px] h-[28px] bg-[#00000073] rounded-full flex justify-center items-center">
            <img src="images/icons/backp.png" alt="" />
          </div>
          <div className="flex items-center relative">
            <img
              className="absolute left-2"
              src="images/icons/search.png"
              alt=""
            />
            <input
              style={{ borderRadius: "45px" }}
              type="text"
              className="  bg-[#00000073] outline-none border-none w-[229px] h-[28px] text-white placeholder-white pl-6 placeholder-text"
              placeholder="Search product"
            />
          </div>
          <div className="w-[28px] h-[28px] bg-[#00000073] rounded-full flex justify-center items-center relative">
            <div className="h-[14px] w-[14px] rounded-full bg-[#00000073] text-[6px] text-white absolute text-center font-medium top-[-2px] right-0">
              20
            </div>
            <img src="images/icons/sp.png" alt="" />
          </div>
          <div className="w-[28px] h-[28px] bg-[#00000073] rounded-full flex justify-center items-center">
            <img src="images/icons/menup.png" alt="" />
          </div>
        </div>
        <div className="bg-[#00000073] w-[24px] h-[16px] text-[12px] rounded-sm text-white text-center absolute z-10  left-1/2  top-[345px] transform -translate-x-1/2">
          1/9
        </div>
      </div>
      <div className="bg-white md:w-[1220px] mx-auto p-[0px] md:p-4 relative z-0">
        <div className="flex flex-col sm:flex-row gap-[8px] md:gap-[20px] relative md:items-star">
          <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <div className="w-full min-h-[373px] md:w-[450px] md:h-[450px] ">
              <img
                className="w-full rounded-sm  min-h-[373px] md:w-[450px] md:h-[450px] "
                src={images[currentIndex]}
                alt=""
              />
            </div>
            <div className="hidden md:block">
              <div className="flex gap-[5px] mt-[10px] relative">
                {watches.map((item) => (
                  <img className="rounded-sm" src={item.img} alt=""></img>
                ))}
                <img
                 onClick={showPrevious}
                  className="absolute left-0 bottom-8 cursor-pointer"
                  src="images/icons/arrow-left.png"
                  alt=""
                />
                <img 
                  onClick={showNext}
                  className="absolute right-1 bottom-8 cursor-pointer"
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

          <div className="box-border w-full  md:pl-0 md:pr-0  md:w-full overflow-x-hidden">
            <h1 className="text-[#2E2E2E] text-[14px] md:text-[20px] leading-7 mb-[8px] md:mb-3 pl-[8px] ">
              Valvet Travel Neck Pillow Folding U-Shaped Memory Foam + Eye Masks
              Ear buds Soft Massage Pillow for Sleeping in Bus Car Plane
            </h1>
            <div className="flex flex-col md:flex-row justify-between mb-[12px] md:mb-0 pl-[8px] ">
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
                  <span className="text-[#5A5A5A] text-sm md:text-base font-medium mr-[4px]">
                    24
                  </span>
                  <span className="text-sm text-[#9C9C9C]">Ratings</span>
                </p>
                <p>
                  <span className="text-[#5A5A5A] text-base font-medium pl-[10px] mr-[4px]">
                    2.5k
                  </span>
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
            <div className="flex items-center pl-[8px]">
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
            <p className="text-[12px] md:text-sm mt-[12px] md:mt-[10px] pl-[8px]">
              <span className="text-secondary">Brand:</span>
              <span className=" text-accent font-normal md:font-medium">
                No brand
              </span>
            </p>
            <div className="flex items-center mt-[12px] md:mt-[20px] pl-[8px]">
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
            <p className="text-[12px] md:text-sm  mt-[12px] md:mt-[20px] pl-[8px]">
              <span className="text-secondary">Color:</span>
              <span className=" text-accent font-normal md:font-medium">
                Black
              </span>
            </p>
            <div className="flex gap-[5px] mt-[5px] md:mt-[10px] pl-[8px]">
              {colors.map((item) => (
                <div className=" h-[42px] w-[42px] rounded-sm border-sm relative flex items-center justify-center">
                  <div
                    style={{ backgroundColor: item.color }}
                    className="w-[32px] h-[32px] absolute z-10"
                  ></div>
                </div>
              ))}
            </div>
            <p className="text-[12px] md:text-sm  mt-[12px] md:mt-[34px] pl-[8px]">
              <span className="text-secondary">Sku:</span>
              <span className=" text-accent font-normal md:font-medium">
                hdgfhdgf6756dsghgf7
              </span>
            </p>
            <div className="flex items-center mt-[12px] md:mt-[20px]">
              <p className="text-[12px] md:text-sm  text-secondary mr-[8px] pl-[8px]">
                Quantity:
              </p>
              <div className="bg-[#F7F7F7] rounded-sm w-[92px] h-[38px] md:w-[106px] md:h-[40px] flex  justify-center  items-center gap-[4.2px]">
                <div
                  onClick={doMinus} 
                  style={{ borderRadius: "5px" }}
                  className="w-[26px] h-[26px] flex  justify-center  items-center  bg-white cursor-pointer"
                >
                  <img  src="images/icons/Minus.png" alt="" />
                </div>
                <div className="text-accent text-sm">{formatteQuantity}</div>
                <div
                  onClick={doPlus} 
                  style={{ borderRadius: "5px" }}
                  className="w-[26px] h-[26px] flex  justify-center  items-center bg-white cursor-pointer"
                >
                  <img  src="images/icons/Add.png" alt="" />
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
                <button onClick={addToCart} className="w-[180px] h-[44px] bg-[#FCD34D] rounded-sm text-[14px] font-medium text-[#2E2E2E] flex justify-center items-center gap-[10px]">
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
