import React,{useState} from 'react'
import Asidecomponent from '../Asidecomponent/Asidecomponent'
import Matchedcomponent from '../Matchedcomponet/Matchedcomponent'
import Topimages from '../Topimages/Topimages';

const Matched = () => {
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleMsgClick = () => {
    setShowNewComponent(true);
  };

  if (showNewComponent) {
    return <Topimages/>; // Render the new component
  }
  return (
    <div className='relative w-full min-h-screen h-full'>
    <div className={`w-full h-full flex items-center md:justify-between justify-evenly `}>

      <Asidecomponent />

      <div className='flex-grow flex justify-center '>
        <Matchedcomponent onMsgClick={handleMsgClick} className=' md:max-w-[28%] w-[100%] max-h-[90%] h-[100%] max-w-[30%] '/>
      </div>

    </div>
  </div>
  )
}

export default Matched
