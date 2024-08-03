import React from 'react'
import Imageslidercomponent from '../Imageslidercomponent/Imageslidercomponent';
import Rightcard from '../Rightcard/Rightcard'
import Filterapplied from '../Filterapplied/Filterapplied'

const Imageslider = () => {
 
  return (
    <div className='relative w-full min-h-screen h-full '>
      <div className={`w-full h-full flex items-center md:justify-between justify-evenly `}>

        <Imageslidercomponent />

        <div className=' md:flex-grow flex-shrink flex justify-center  '>
          <Rightcard className=' flex-grow h-full w-full md:w-[28%]'/>
        </div>

      </div>
    </div>
  )
}

export default Imageslider
