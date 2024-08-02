import React,{useState} from 'react'
import Asidecomponent from '../Asidecomponent/Asidecomponent'
import Rightcard from '../Rightcard/Rightcard'
import Filterapplied from '../Filterapplied/Filterapplied'

const MatchingStarted = () => {
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleFilterClick = () => {
    setShowNewComponent(true);
  };

  if (showNewComponent) {
    return <Filterapplied />; // Render the new component
  }
  return (
    <div className='relative w-full min-h-screen h-full '>
      <div className={`w-full h-full flex items-center md:justify-between justify-evenly `}>

        <Asidecomponent />

        <div className=' md:flex-grow flex-shrink flex justify-center  '>
          <Rightcard onFilterClick={handleFilterClick} className=' flex-grow h-full w-full md:w-[28%]'/>
        </div>

      </div>
    </div>
  )
}

export default MatchingStarted
