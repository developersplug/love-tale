import React from 'react'
import img from '../../assets/img.jpg'
import { CiSettings } from "react-icons/ci";
import { IoArrowBackSharp } from "react-icons/io5";
import './Filtercomponent.css'

const FilterComponent = ({ onClick }) => {
    return (
        <div className='overflow-auto max-w-[25%] w-[100%] h-screen rounded-lg  flex flex-col  bg-gray-50'>
            {/*Upper div */}
            <div className='bg-pink-300 w-[100%] h-[60px] flex items-center justify-between p-2' >
                <div className='flex space-x-2 items-center'>
                    <img src={img} alt="logo" className='w-[40px] h-[40px] rounded-full border-2 border-white object-cover' />
                    <h3>Celinia</h3>
                </div>
                <CiSettings className='text-2xl' />
            </div>

            {/*Heading and icon */}
            <div className='flex mx-2   my-[10px] '>
                <IoArrowBackSharp className='text-2xl text-pink-400' />
                <h2 className='font-medium mx-auto text-center'>Filters</h2>
            </div>
            {/*Options */}
            <div className='flex flex-col mx-3'>

                <label className='font-medium'>View style</label>
                <div className="flex items-center mb-[10px] mt-[5px]">
                    <label className="inline-flex items-center">
                        <input type="radio" name="interestedIn" value="classic" required />
                        <span className="ml-2">Classic</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                        <input type="radio" name="interestedIn" value="gallery" required />
                        <span className="ml-2">Gallery</span>
                    </label>
                </div>
            </div>
            {/**Location */}
            <div className='flex flex-col'>
                <label className='font-medium mx-3'>Location</label>
                <input type="text" className='mx-3 block  bg-gray-100 rounded-[6px] p-[9px] border-1  mb-[10px] mt-[5px] resize-none' name="email" placeholder='Punjab,(Pakistan)' required />
            </div>

            {/*Distance */}

            {/* < className=' mx-3 h-[90px] border-2 rounded-md p-1'> */}
               <div className='range  mx-3 border-2 rounded-md p-1 '>
                <label className='ml-3'>Distance</label>
                {/* <div className="slidervalue">
                    <span>100</span>
                </div> */}
                <div className='field'>
                    <div className="value upper">0</div>
                    <input type="range"  min='0' max='100'  step='1'/>
                    <div className="value lower">100</div>

                </div>

               </div>
            

            {/**Interest */}

            <div className='flex flex-col mx-3 h-[70px] border-2 rounded-md p-1 my-[10px] '>

                <label className='font-medium text-[17px]'>Interested In</label>
                <div className="flex items-center mb-[4px] mt-[5px]">
                    <label className="inline-flex items-center">
                        <input type="radio" name="interestedIn" value="classic" required />
                        <span className="ml-2 text-[14px]">Dating</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                        <input type="radio" name="interestedIn" value="gallery" required />
                        <span className="ml-2 text-[14px]">Friendship</span>
                    </label>
                    <label className="inline-flex items-center ml-6">
                        <input type="radio" name="interestedIn" value="gallery" required />
                        <span className="ml-2 text-[14px]">Business</span>
                    </label>
                </div>
            </div>

            {/**Age */}
            <div className=' mx-3 h-[70px] border-2 rounded-md p-1'>
                <label className='ml-3'>Age</label>
                <div className='slider'>
                    <div className='progress'>
                    </div>
                </div>
                <div className='range-input'>
                    <input type="range" className='range-min' min='18' max='26'  />
                    <input type="range" className='range-max' min='18' max='26'  />
                </div>
            </div>
            <button className='bg-pink-400 mx-[10%] my-2 p-1 rounded-md' onClick={onClick}>ok</button>







        </div>
    )
}

export default FilterComponent
