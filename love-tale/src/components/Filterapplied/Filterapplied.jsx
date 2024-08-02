import React,{useState} from 'react'
import Rightcard from '../Rightcard/Rightcard'
import Filtercomponent from '../Filtercomponent/FilterComponent';
import Matched from '../Matched/Matched';

const Filterapplied = () => {
    const [showNewComponent, setShowNewComponent] = useState(false);

    const handleClick = () => {
      setShowNewComponent(true);
    };
    
  
    if (showNewComponent) {
      return <Matched />; // Render the new component
    }
    return (
        <div className='relative w-full min-h-screen h-full'>
            <div className={`w-full h-full flex items-center md:justify-between justify-evenly `}>

                <Filtercomponent onClick={handleClick}  />

                <div className='md:flex-grow flex-shrink flex justify-center '>
                    <Rightcard className=' flex-grow h-full w-full md:w-[28%]' />
                </div>

            </div>
        </div>
    )
}

export default Filterapplied
