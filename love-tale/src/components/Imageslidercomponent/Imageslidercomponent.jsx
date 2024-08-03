import React,{useState,useEffect} from 'react'
import img from '../../assets/img.jpg'
import { CiSettings } from "react-icons/ci";
import girl1 from '../../assets/girl1.jpg'
import girl2 from '../../assets/girl2.jpg'
import girl3 from '../../assets/girl3.jpg';
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";



const Imageslider = () => {

  const[curr,setcurr]=useState(0);
  
   
  const prev=()=>setcurr((curr) => (curr === 0 ? slides.lenght-1:curr-1));
  const next=()=>setcurr((curr) => (curr ===  slides.lenght-1? 0 : curr+1));

  const slides = {
    img1: girl1,
    img2: girl2,
    img3: girl3
  }

 

  return (
    <div className=' md:w-[25%] w-[30%]  h-screen   flex flex-col items-center  bg-gray-50 relative'>
      {/*Upper div */}
      <div className='bg-pink-300 w-[100%] h-[60px] flex items-center justify-between p-2' >
        <div className='flex space-x-2 items-center'>
          <img src={img} alt="logo" className='w-[40px] h-[40px] rounded-full border-2 border-white object-cover' />
          <h3>Celinia</h3>
        </div>
        <CiSettings className='text-2xl' />
      </div>
      {/*Image slider */}
      <div className='w-full h-[90%] overflow-hidden relative '>
        <div className='w-screen h-[60%] flex  transition-transform ease-out duration-500' style={{transform: `translateX(-${curr *35}%)`}}>
          {Object.values(slides).map((item, index) => (
            <img key={index} src={item} alt={`Slide ${index + 1}`} className='w-full h-full object-cover' />
          ))}
        </div>
        <div className='absolute  flex bottom-[14rem] inset-0 items-center justify-between p-4'>
          <button onClick={prev} className='p-1 rounded-full shadow bg-white text-gray-800'><IoChevronBackOutline /></button>
          <button onClick={next} className='p-1 rounded-full shadow bg-white text-gray-800'><IoChevronForwardSharp /></button>
        </div>

        <div className='absolute bottom-8 right-0 left-0'>
          <div className='flex items-center justify-center gap-2'>
            {Object.values(slides).map((_, i)=>
            (
              <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${curr ==i? 'p-4':'bg-opacity-50'}`}/>
            ))}

          </div>
        </div>
      </div>
      <div className='bg-gray-50 w-full h-[50%] rounded-t-xl absolute top-[60%] flex flex-col items-start'>
        <div className='rounded-lg mx-[7%] text-center bg-slate-200 p-1 my-2'>
          <p className='text-[14px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora reprehenderit, autem assumenda in facilis .</p>
        </div>
        <h2 className='font-medium mx-[7%] my-3'>
          Other photos
        </h2>
        <div className='mx-[3%] my-4 flex gap-1  '>
          <div className='w-[90px] h-[100px] '>
            <img src={girl1} alt="img1" className='w-full h-full rounded-lg object-cover'/>
          </div>
          <div className='w-[90px] h-[100px] '>
            <img src={girl2} alt="img1" className='w-full h-full rounded-lg object-cover'/>
          </div>
          <div className='w-[90px] h-[100px] '>
            <img src={girl3} alt="img1" className='w-full h-full rounded-lg object-cover'/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Imageslider
