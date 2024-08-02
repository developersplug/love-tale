import React, { useState } from 'react'
// import Loginpopup from '../Loginpopup/Loginpopup';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = ({ onLoginClick }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };



    return (
        <>
            <header className='w-[100%]  text-[#fff] fixed top-0 py-[4px]  left-0  flex items-center z-10 p-[5%]'>
                <h2 className='w-[180px] text-3xl font-bold text-red-500'>Love Tale</h2>
                {/*List Items */}
                <nav className='flex  w-[100%] items-center'>
                    <ul className={`fixed inset-0 bg-black bg-opacity-75 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform lg:relative lg:transform-none lg:bg-transparent lg:flex lg:items-center lg:w-full text-pink-600`}>
                        <li className='inline-block p-5 lg:hidden'>
                            <button className='text-white ' onClick={toggleSidebar}>
                                <AiOutlineClose size={24} />
                            </button>
                        </li>
                        <li className='inline-block my-5 mx-[10px] text-16 lg:my-0'>
                            Products
                        </li>
                        <li className='inline-block my-[5px] mx-[10px]  text-[16px] lg:my-0'>
                            Safety
                        </li>
                        <li className='inline-block my-[5px] mx-[10px] text-[16px] lg:my-0'>
                            Learn
                        </li>
                        <li className='inline-block my-[5px] mx-[10px] text-[16px] lg:my-0'>
                            Download
                        </li>
                    </ul>
                    {/*Buttons of header */}
                    <ul className='flex items-center'>
                        <li className=' mx-[20px] my-[5px]'>
                            <button className='bg-[#FFF] text-[#212121] py-[10px] px-[25px] rounded-3xl border-0 outline-0'>English</button>
                        </li>
                        <li className=' mx-[20px] my-[5px]'>
                            <button className='bg-red-500 text-[#212121] py-[10px] px-[25px] rounded-3xl border-0 outline-0' onClick={onLoginClick}>Login</button>
                        </li>
                        <li className='inline-block lg:hidden'>
                            <button className='text-white' onClick={toggleSidebar}>
                                <AiOutlineMenu size={24} />
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>

        </>

    )
}

export default Header
