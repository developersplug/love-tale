import React from 'react'
import img from '../../assets/img.jpg'
import { CiSettings } from "react-icons/ci";
import girl1 from '../../assets/girl1.jpg'
import girl2 from '../../assets/girl2.jpg'
import girl3 from '../../assets/girl3.jpg';
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";



const Imageslider = () => {
    const slides={
        img1:girl1,
        img2:girl2,
        img3:girl3
    }

  return (
    <div  className='overflow-auto md:max-w-[25%] max-w-[30%] w-[100%] h-screen   flex flex-col items-center  bg-gray-50 '>
       {/*Upper div */}
       <div className='bg-pink-300 w-[100%] h-[60px] flex items-center justify-between p-2' >
       <div className='flex space-x-2 items-center'>
        <img src={img} alt="logo" className='w-[40px] h-[40px] rounded-full border-2 border-white object-cover' />
        <h3>Celinia</h3>
       </div>
       <CiSettings className='text-2xl'/>
      </div>
      {/*Image slider */}
      <div className='w-full'>
      <div>
            {Object.values(slides).map((item, index) => (
                <img key={index} src={item} alt={`Slide ${index + 1}`} />
            ))}
        </div>


      </div>
    </div>
  )
}

export default Imageslider
