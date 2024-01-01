import React from 'react'

const ServiceDetails = () => {
  return (
    <div style={{border: "0.5px solid #9C9C9C", borderRadius: "5px"}} className='w-[1188px] h-[150px] flex justify-center items-center mx-auto gap-[115px] mt-[34px] relative'>
        <div className='flex gap-[57px]'>
            <div className='flex gap-[15px]'>
                <img className='h-[70px] w-[70px]' src="images/user.png" alt="" />
                <div>
                    <h4 className='text-accent text-[14px] font-medium'>Al-Amin Gallery</h4>
                    <div className='flex items-center mt-[5px] gap-[5px]'>
                        <div className='h-[7px] w-[7px] bg-[#D9D9D9] rounded-full'/>
                        <p className='text-[#9C9C9C] text-[10px]'>Active 6 Hours ago</p>
                    </div>
                    <div className='flex gap-[15px] mt-[15px]'>
                        <p className='text-[#37A5BF] text-[14px] font-medium'>Visit Store</p>
                        <p className='flex items-center'><img className='w-[14px] h-[14px]' src="images/icons/msg.png" alt="" /><p className='text-[#37A5BF] text-[12px] font-medium'>Chat</p></p>
                    </div>
                </div>
                <img className='absolute left-[535px]' src="images/icons/div.png" alt="" />
                <img className='absolute right-[355px]' src="images/icons/div.png" alt="" />
            </div>

            <div>
                <div className='flex'>
                    <p className='text-secondary w-[137px]'>Seller Rating:</p>
                    <p className='text-[16px] font-medium text-[#2E2E2E]'>95%</p>
                </div>
                <div className='flex mt-[12px]'>
                    <p className='text-secondary  w-[137px]'>Ship on Time:</p>
                    <p className='text-[16px] font-medium text-[#2E2E2E]'>90%</p>
                </div>
                <div className='flex mt-[12px]'>
                    <p className='text-secondary  w-[137px]'>Response Rate:</p>
                    <p className='text-[16px] font-medium text-[#2E2E2E]'>85%</p>
                </div>
            </div>

            
        </div>
        <div className=''>
            <p className='text-[#5A5A5A] text-[16px] font-medium'>Service:</p>
            <div className='w-[175px]'>
                <p className='flex items-center gap-[5px] mb-[4px]'><img className='w-[16px] h-[16px]' src="images/icons/timer.png" alt="" /><p className='text-primary text-[14px] font-medium'>7 day return</p></p>
                <p className='text-secondary text-[12px] pl-[24px]'>Change of mind is not applicable</p>
                <p className='flex items-center gap-[5px] mt-[8px]'><img className='w-[16px] h-[16px]' src="images/icons/timer.png" alt="" /><p className='text-[#9C9C9C] text-[14px] font-medium'>Warranty Not Available</p></p>
            </div>
        </div>

        <div className=''>
            <p className='text-[#5A5A5A] text-[16px] font-medium mb-[5px]'>Delivery:</p>
            <div className='w-[252px]'>
                <p className='flex items-center gap-[5px] mb-[7px]'><img className='w-[16px] h-[16px]' src="images/icons/support.png" alt="" /><p className='text-primary text-[14px] font-medium'><span>Free Delivery </span><span className='text-[12px] text-secondary'>4Nov - 8Nov 3- 5 days</span></p></p>
                <p className='text-secondary text-[12px] pl-[24px]'>Enjoy free shipping promotion with minimum spend of ৳ 499 from <span className='text-primary'>xpress.</span></p>
                <p className='flex items-center gap-[5px] mt-[5px]'><img className='w-[16px] h-[16px]' src="images/icons/call.png" alt="" /><p className='text-primary text-[14px]'>Cash on delivery available</p></p>
            </div>
        </div>
    </div>
  )
}

export default ServiceDetails;