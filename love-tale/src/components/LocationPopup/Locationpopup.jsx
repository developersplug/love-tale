import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const Locationpopup = ({onClose}) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center z-20'>
        <div className='overflow-auto max-w-[28%] w-[100%] max-h-[80%] h-full rounded-lg flex flex-col items-center bg-gray-50 p-6'>
            <CiLocationOn className='text-7xl rounded-full border-2 border-pink-400 w-[20%] mx-auto '/>
            <div className='mx-auto text-center my-[15px]'>
                <h2 className='font-medium'>Enable Your Location</h2>
                <p className='mx-[10%] text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam ratione nostrum quisquam ea aliquid distinctio veniam sequi atque quidem possimus.</p>
            </div>
            <div className='flex flex-col my-[10px]'>
                <button className='w-full mx-auto rounded-md  py-[5px] bg-pink-400 text-white my-1 ' onClick={onClose} >Allow</button>
                <button className='w-full mx-auto rounded-md  py-[5px] text-black'>Learn More</button>
            </div>
        </div>
        </div>
    )
}

export default Locationpopup
