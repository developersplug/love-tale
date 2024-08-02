import React from 'react'
import img from '../../assets/img.jpg';
import boy from '../../assets/boy.jpeg';
import { IoMdHeartHalf } from "react-icons/io";

const Matchedcomponent = ({onMsgClick}) => {
    return (
        <div className='max-w-[30%] w-[100%] h-screen flex items-center justify-center p-8 rounded-lg bg-gray-400'>
            <div className='w-[100%] h-[100%] rounded-lg p-2'>
                <div className='bg-orange-400 rounded-lg p-2'>
                    <div className='mx-auto text-center text-white'>
                        <h2 className='font-medium'>You are Matched</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 my-3 '>
                        <ul className='flex flex-col items-end text-white'>
                            <li>Name</li>
                            <li>position</li>
                            <li>Distance</li>
                        </ul>
                        <img src={img} alt="" className='w-[60px] h-[60px] object-cover rounded-full border-2 border-white lg:ml-4' />
                    </div>

                    <IoMdHeartHalf className='mx-auto text-center text-2xl text-white' />

                    <div className='grid md:grid-cols-2 grid-cols-1 my-3 '>
                        <img src={boy} alt="" className='w-[60px] h-[60px] object-cover rounded-full border-2 border-white lg:ml-4' />
                        <ul className='flex flex-col items-start text-white'>
                            <li>Name</li>
                            <li>position</li>
                            <li>Distance</li>
                        </ul>
                    </div>
                    {/*Div for styling */}
                    <div className='w-[80px] h-[50px] bg-white rounded-t-md '>
                    </div>
                    {/*Buttons */}
                    <div className='bg-white h-[120px] p-4 mx-auto text-center rounded-md'>
                        <button className='mx-auto text-center rounded-md w-[90%] bg-pink-400 text-white p-2 whitespace-nowrap' onClick={onMsgClick}>Send a message</button>
                        <button>Go back to discover</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Matchedcomponent
