import React,{useState,useEffect} from 'react'
import logo from '../../assets/logo.png'
import Agreepopup from '../Agreepopup/Agreepopup'
import Startmatching from '../Startmatching/Startmatching'
const Details = () => {

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const [showStartmatching, setShowStartmatching] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowStartmatching(true);
    };

    if (showStartmatching) {
        return <Startmatching />;
    }

    return (
        <div  className='relative w-full min-h-screen h-full'>
        <div className={`w-[100%] min-h-[100vh] h-[100%] ${showPopup ? 'blur-sm' : ''}`}>
            {/*Header */}
            <div className='flex items-center justify-center my-[15px] border-b-2 border-black py-3 mx-[10%]'>
                <img src={logo} alt="img" className='w-[40px]' />
                <h2 className='font-bold text-2xl'>Love Tale</h2>
            </div>

            {/*Form */}

            <form className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 py-[4rem] max-w-[70%] w-[100%] mx-[15%] border-b-2 border-gray-500 relative">
                <div className='flex flex-col'>
                    <label className=''>First Name:</label>
                    <input type="text" className=' block  bg-[#EBECFE] rounded-[6px] p-[9px] border-0 outline-0 mb-[15px] mt-[5px] resize-none' name='name' placeholder='Enter first name' required />
                </div>
                <div className='flex flex-col'>
                    <label>Last Name:</label>
                    <input type="text" className='block  bg-[#EBECFE] rounded-[6px] p-[9px] border-0 outline-0 mb-[15px] mt-[5px] resize-none' name='name' placeholder='Enter last name' required />
                </div>
                <div className='flex flex-col'>

                    <label >Interested In:</label>
                    <div className="flex items-center mb-[15px] mt-[5px]">
                        <label className="inline-flex items-center">
                            <input type="radio" name="interestedIn" value="man" required />
                            <span className="ml-2">Man</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input type="radio" name="interestedIn" value="woman" required />
                            <span className="ml-2">Woman</span>
                        </label>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label>Phone Number:</label>
                    <input type="tel" className='block bg-[#EBECFE] rounded-[6px] p-[9px] border-0 outline-0 mb-[15px] mt-[5px] resize-none' name='phone' placeholder='Enetr your mobile no.' required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" className='block  bg-[#EBECFE] rounded-[6px] p-[9px] border-0 outline-0 mb-[15px] mt-[5px] resize-none' name="email" placeholder='Enter your Valid Email' required />
                </div>
                <div className='flex flex-col'>

                    <label >Gender:</label>
                    <div className="flex items-center mb-[15px] mt-[5px]">
                        <label className="inline-flex items-center">
                            <input type="radio" name="interestedIn" value="man" required />
                            <span className="ml-2">Female</span>
                        </label>
                        <label className="inline-flex items-center ml-6">
                            <input type="radio" name="interestedIn" value="woman" required />
                            <span className="ml-2">Male</span>
                        </label>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label>Date of Birth</label>
                    <input type="date" className='block  bg-[#EBECFE] rounded-[6px] p-[9px] border-0 outline-0 mb-[15px] mt-[5px] resize-none' name="email" placeholder='Enter your Valid Email' required/>
                </div>

                
                <div className='flex flex-col'>
                    <label>Country</label>
                    <input type="text" className='block  bg-[#EBECFE] rounded-[6px] p-[9px] border-0 outline-0 mb-[15px] mt-[5px] resize-none' name="email" placeholder='Enter your Valid Email' required/>
                </div>

                <button type='submit' onClick={handleSubmit} className='absolute top-[97%] left-[50%] z-10 bg-pink-400 py-1 px-2 rounded-full'>Submit</button>
            </form>
        </div>
            {showPopup && <Agreepopup onClose={handleClosePopup} />}
        </div>
    )
}

export default Details
