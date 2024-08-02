import React from 'react'
import img from '../../assets/img.jpg'
import { CiSettings } from "react-icons/ci";
import boy from '../../assets/boy.jpeg';


const Imagescollection = () => {
    const images = {
        1: { src: img, content: '10h' },
        2: { src:boy , content: '10h' },
        3: { src: boy, content: '10h' },
        4: { src:img , content: '10h' },
    };
    return (
        <div className='overflow-auto md:max-w-[25%] max-w-[30%] w-[100%] h-screen   flex flex-col items-center  bg-gray-50 '>
            {/*Upper div */}
            <div className='bg-pink-300 w-[100%] h-[60px] flex items-center justify-between p-2' >
                <div className='flex space-x-2 items-center'>
                    <img src={img} alt="logo" className='w-[40px] h-[40px] rounded-full border-2 border-white object-cover' />
                    <h3>Celinia</h3>
                </div>
                <CiSettings className='text-2xl' />
            </div>
            {/*Matches / Messages */}
            <div className='flex items center space-x-5 font-medium my-[10px]'>
                <h2>Matches</h2>
                <h2>Messages</h2>
            </div>
            {/*Like and top picks */}
            <div className="flex rounded-xl border border-black w-[70%] mx-[10%]">
                <div className="flex-1 text-center border-r border-black py-1">
                    4 Likes
                </div>
                <div className="flex-1 text-center py-1">
                    3 Top Pics
                </div>
            </div>
            <p className='mx-[7%] font-normal my-[10px] text-center'>Upgrade to LoveTale plus for more top picks</p>
            {/*Images */}
            <div className=" my-2 grid grid-cols-2 rounded-xl gap-y-10  gap-x-2 mx-[5%] w-[90%] ">
                {Object.keys(images).map(key => (
                    <div key={key} className="w-[120px] h-[90px] flex flex-col rounded-md">
                        <div className="w-full h-full">
                            <img src={images[key].src} alt={`Image ${key}`} className="w-full h-full object-cover rounded-t-md" />
                        </div>
                        <div className="h-[30px] w-full bg-gray-200 p-1 text-center rounded-b-md">
                            {images[key].content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Imagescollection
