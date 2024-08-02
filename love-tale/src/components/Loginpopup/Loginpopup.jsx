import React from 'react'
import logo from '../../assets/logo.png'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
// import Details from '../Details/Details';

const Loginpopup = ({ closePopup, onSignUpClick }) => {
    return (
        <>
            
                <div className='fixed inset-0 bg-black bg-opacity-50 z-20'>
                    <div className=' overflow-auto w-[80%] md:w-[60%] lg:w-[30%] max-h-[90%] h-[100%] bg-white rounded-md p-4 md:p-4 flex  flex-col items-center transform -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] relative'>

                        <button
                            className='absolute top-4 right-4 text-gray-600 font-bold text-2xl'
                            onClick={closePopup}
                        >
                            <IoCloseSharp />
                        </button>
                        {/* Info */}
                        <div className='flex flex-col items-center mt-[20px]'>
                            <img src={logo} alt="logo" className='w-[40px]' />
                            <h2 className='text-xl font-bold '>Hello</h2>
                            <h3 className='text-xl font-bold text-pink-500'>Love Tale!</h3>
                            <p className='mx-[10%] text-[13px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem labore cum ad animi quae deleniti.</p>
                        </div>

                        {/* Phone and login */}
                        <div className='flex flex-col items-center w-[100%] mt-[20px]'>
                            <div className='flex space-x-2 items-center'>
                                <FaPhoneAlt />
                                <input type="tel" placeholder='Enter your phone number' className='p-1 border-1 w-[70%]  border-black' />
                            </div>
                            <button className='w-[70%] border-0 outline-0 bg-pink-400 rounded-md p-3 my-[10px]' onClick={onSignUpClick}>Sign up</button>
                        </div>

                        {/*Forget password or register now */}
                        <div className='w-[100%] flex justify-evenly items-center relative'>
                            <button >Rigester Now</button>
                            <button>Fogert Password?</button>
                        </div>

                        {/*Login options */}

                        <div className='flex flex-col mt-[20px] space-y-1'>
                            <div className='flex space-x-2 items-center  p-2 rounded-md bg-pink-400'>
                                <FaGoogle />
                                <button>Login with Google</button>
                            </div>
                            <div className='flex  space-x-2  items-center border-2 p-2 rounded-md'>
                                <FaFacebook />
                                <button>Login with Facebook</button>
                            </div>
                            <div className='flex  space-x-2  items-center border-2 p-2 rounded-md'>
                                <FaApple />
                                <button>Login with AppleId</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Loginpopup
