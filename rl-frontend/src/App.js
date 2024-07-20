import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//CSS
// import './CSS/App.css';
// import './CSS/AppDefault.css'
// import './CSS/AppMedia.css'
// import './CSS/AppXL.css'
//Does not do anything?
// import './CSS/AppLg.css'

//Pages
import Home from './Pages/Home'
import Login from './Pages/Login';
import Register from './Pages/Register';

//Components
import Header from './Components/Header'


function App() {

  const [profile, setProfile] = useState("")


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Header profile={profile} />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/Login' element={<Login setProfile={setProfile} />} />
          <Route path='/Register' element={<Register setProfile={setProfile} />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
