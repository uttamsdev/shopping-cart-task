import React from 'react'

const Categories = () => {
  return (
    <div className='page-container mx-auto h-[55px] flex items-center gap-[6px]'>
        <div className='flex items-center gap-[4px]'>
            <img src="images/icons/menu.png" alt="" />
            <p className='font-semibold text-primary'>All Categories </p>
            <img src="images/icons/dropdown.png" alt="" />
        </div>
        <div className='flex items-center gap-[2px]'>
            <p className='text-[#434343] text-[12px] '>Electronic Devices</p>
            <img src="images/icons/right-arrow.png" alt="" />
        </div>
        <div className='flex items-center gap-[2px]'>
            <p className='text-[#434343] text-[12px] '>bag and travel</p>
            <img src="images/icons/right-arrow.png" alt="" />
        </div>
        <div className='flex items-center gap-[2px]'>
            <p className='text-[#434343] text-[12px] '>travel and sports</p>
            <img src="images/icons/right-arrow.png" alt="" />
        </div>
        <div className='flex items-center gap-[2px]'>
            <p className='text-[#434343] text-[12px] '>bag and travel</p>
            <img src="images/icons/right-arrow.png" alt="" />
        </div>
        <p className='text-[#949494] text-[12px]'>Valvet Travel Neck Pillow Folding U-Shaped...</p>
        
    </div>
  )
}

export default Categories;