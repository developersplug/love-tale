import React from 'react'
import logo from '../../assets/logo.png'
import { TiTick } from "react-icons/ti";


const Agreepopup = ({ onClose }) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center z-20'>
        <div className='overflow-auto max-w-[28%] w-[100%] max-h-[80%] h-full bg-white rounded-lg p-6'>
            <div className='w-full mx-auto flex flex-col items-center '>
                <img src={logo} alt="logo" className='w-[40px] h-[40px] object-cover' />
                <h2 className='font-medium text-xl'>Welcome to love tale</h2>
                <p className='text-[13px]'>Please follow these house rules</p>
            </div>
            {/**Rules */}
            <div className='flex flex-col items-start'>
                <div className='flex flex-col mx-auto my-[2px] leading-normal'>
                    <div className='flex items-center space-x-3'>
                        <TiTick className='text-xl text-pink-400'/>
                        <h2 className=' font-medium'>Be Yourself</h2>
                    </div>
                    <p className='mx-auto text-[13px] text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                </div>
                <div className='flex flex-col mx-auto my-[2px] leading-normal'>
                    <div className='flex items-center space-x-3'>
                        <TiTick  className='text-xl text-pink-400' />
                        <h2 className=' font-medium'>Stay Safe</h2>
                    </div>
                    <p className='mx-auto text-[13px] text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                </div>
                <div className='flex flex-col mx-auto my-[2px] leading-normal'>
                    <div className='flex items-center space-x-3'>
                        <TiTick  className='text-xl text-pink-400' />
                        <h2 className=' font-medium'>Play it cool</h2>
                    </div>
                    <p className='mx-auto text-[13px] text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                </div>
                <div className='flex flex-col mx-auto my-[2px] leading-normal'>
                    <div className='flex items-center space-x-3'>
                        <TiTick  className='text-xl text-pink-400' />
                        <h2 className=' font-medium'>Be Proactive</h2>
                    </div>
                    <p className='mx-auto text-[13px] text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                </div>

            </div>

            <button className='bg-pink-300 rounded-lg px-4 py-1 mx-auto text-center w-full' onClick={onClose}>I Agree</button>


        </div>
        </div>
    )
}

export default Agreepopup
