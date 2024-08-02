import React, { useState, useEffect } from 'react'
import Asidecomponent from '../Asidecomponent/Asidecomponent';
import hug from '../../assets/hug.webp';
import Locationpopup from '../LocationPopup/Locationpopup';
import MatchingStarted from '../MatchingStarted/MatchingStarted';


const Startmatching = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [showNewComponent, setShowNewComponent] = useState(false); // New state for the full-screen component

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowNewComponent(true); // Show the new component when popup is closed
  };

  if (showNewComponent) {
    return <MatchingStarted />; // Render the new full-screen component
  }

  return (
    <div className='relative w-full min-h-screen h-full'>
      <div className={`w-full h-full flex items-center md:justify-between justify-evenly  ${showPopup ? 'blur-sm' : ''} `}>

        <Asidecomponent />

        <div className='flex-grow flex justify-center'>
          <img src={hug} alt="img" className='md:w-[240px] md:h-[240px] w-[170px] h-[170px] rounded-full object-cover' />
        </div>

      </div>
      {showPopup && <Locationpopup onClose={handleClosePopup} />}
    </div>
  )
}

export default Startmatching
