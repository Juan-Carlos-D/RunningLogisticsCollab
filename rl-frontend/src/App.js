import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//CSS
// import './CSS/App.css';
// import './CSS/AppDefault.css';
// import './CSS/AppMedia.css';
// import './CSS/AppXL.css';
// import './CSS/AppLg.css';

//Pages
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

//Components
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const [profile, setProfile] = useState("");

  return (
    <BrowserRouter>
      <Header profile={profile} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Login" element={<Login setProfile={setProfile} />} />
        <Route path="/Register" element={<Register setProfile={setProfile} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
