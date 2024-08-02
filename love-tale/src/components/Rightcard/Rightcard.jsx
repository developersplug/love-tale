import React from 'react'
import { SlReload } from "react-icons/sl";
import { LuListFilter } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import img from '../../assets/img.jpg'
import { IoLocationOutline } from "react-icons/io5";

const Rightcard = ({ onFilterClick }) => {
    return (
        <div className='overflow-auto max-w-[28%] w-[100%] h-screen rounded-lg  flex flex-col items-center  bg-gradient-to-t from-pink-500 to-gray-100'>
            {/* Reload and filter icons */}
            <div className='flex items-center justify-between p-2 w-[100%]'>
                <button><SlReload /></button>
                <button onClick={onFilterClick}><LuListFilter /></button>
            </div>
            {/*Image comntainer */}
            <div className='w-[90%] h-[300px] rounded-md overflow-hidden my-6'>
                <img src={img} alt="img" className='w-full h-full object-cover' />
            </div>
            {/*Icons */}
            <div className='flex space-x-2 mx-[8%] my-[10px]'>
                <RxCross2 className='text-2xl' />
                <CiHeart className='text-2xl' />
                <CiStar className='text-2xl' />
            </div>
            {/*Name */}
            <div className='w-[100%] mx-auto text-center my-2'>
                <h3 className='font-medium'>Celina Williams ,22</h3>
            </div>

            <div className='flex space-x-4 items-center my-2'>
                <h3 className='font-medium'>Beautician</h3>
                <div className='flex space-x-2 items-center font-medium'>
                    <IoLocationOutline  className='text-2xl'/>
                    10km
                </div>
            </div>

            <p className='text-[15px] mx-4 my-2'>Lorem ipsum dolor, sit amet .</p>


        </div>
    )
}

export default Rightcard
