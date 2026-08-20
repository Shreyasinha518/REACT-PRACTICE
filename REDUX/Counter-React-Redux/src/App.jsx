import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import"./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Container from './components/Container';
import Control from './components/Control';

import DisplayCounter from './components/DisplayCounter';
import { useSelector } from 'react-redux';
import PrivacyMessage from './components/privacyMessage';






function App() {
 const privacy=useSelector(store=>store.privacy);

  return (
    <>
      <div>
        <Container>
       <div className="px-4 py-5 my-5 text-center">  <div className="col-lg-6 mx-auto"><Header></Header>
         
         {privacy?<PrivacyMessage/>:<DisplayCounter/>}
         <Control></Control> </div> </div>
         </Container>
      </div>
      
    </>
  )
}

export default App
