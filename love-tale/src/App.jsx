import React, { useState } from 'react'
import Header from './components/Header/Header'
import Herosection from './components/Herosection/Herosection'
import Loginpopup from './components/Loginpopup/Loginpopup'
import './App.css'
import Details from './components/Details/Details'
// import Imageslider  from './components/Imageslider/Imageslider'






const App = () => {

  const [isLoginPopupVisible, setLoginPopupVisible] = useState(false);
  const [isDetailsVisible, setDetailsVisible] = useState(false);

  const handleLoginButtonClick = () => {
    setLoginPopupVisible(true);
  };

  const handleClosePopup = () => {
    setLoginPopupVisible(false);
  };

  const handleSignUpClick = () => {
    setDetailsVisible(true);
    setLoginPopupVisible(false);
  };


  return (
    <>
      {!isDetailsVisible && (
        <>
          <Header onLoginClick={handleLoginButtonClick} />
          <Herosection />
        </>
      )}
      {isLoginPopupVisible && !isDetailsVisible && (
        <Loginpopup closePopup={handleClosePopup} onSignUpClick={handleSignUpClick} />
      )}
      {isDetailsVisible && <Details />}
      {/* <Imageslider /> */}

    </>
  )
}

export default App
