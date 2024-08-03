import React,{useState} from 'react'
import Imagescollection from '../Imagescollection/Imagescollection'
import Rightcard from '../Rightcard/Rightcard'
import Imageslider from '../Imageslider/Imageslider';


const MatchingStarted = () => {
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleNextClick = () => {
    setShowNewComponent(true);
  };

  if (showNewComponent) {
    return <Imageslider />; // Render the new component
  }
  return (
    <div className='relative w-full min-h-screen h-full'>
      <div className={`w-full h-full flex items-center md:justify-between justify-evenly `}>

        <Imagescollection onNextClick={handleNextClick}/>

        <div className='flex-grow flex justify-center '>
          <Rightcard  className=' md:max-w-[28%] w-[100%] max-h-[90%] h-[100%] max-w-[30%] '/>
        </div>

      </div>
    </div>
  )
}

export default MatchingStarted
