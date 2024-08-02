import React from 'react'
import img from '../../assets/img.jpg'
import { CiSettings } from "react-icons/ci";
import hug from '../../assets/hug.webp'

const Asidecomponent = () => {
  return (
    <div className='overflow-auto md:max-w-[25%] max-w-[30%] w-[100%] h-screen   flex flex-col items-center  bg-gray-50 '>
       {/*Upper div */}
      <div className='bg-pink-300 w-[100%] h-[60px] flex items-center justify-between p-2' >
       <div className='flex space-x-2 items-center'>
        <img src={img} alt="logo" className='w-[40px] h-[40px] rounded-full border-2 border-white object-cover' />
        <h3>Celinia</h3>
       </div>
       <CiSettings className='text-2xl'/>
      </div>
      {/*Matches / Messages */}
      <div className='flex items center space-x-5 font-medium my-[10px]'>
        <h2>Matches</h2>
        <h2>Messages</h2>
      </div>
     
        <img src={hug} alt="img" className='w-[150px] h-[150px] object-cover ' />
        {/*Start Matching */}
        <div className='mx-auto text-center my-[10px]'>
            <h2 className='font-medium'>Start Matching</h2>
            <p className='text-[15px] my-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae commodi, est explicabo cum cupiditate .</p>

        </div>
    </div>
  )
}

export default Asidecomponent
