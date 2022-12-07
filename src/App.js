// import logo from './logo.svg';
// import './App.css';


import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import ParticleJs from "./components/navbar/ParticleJs";
import Hero from "./components/hero/Hero";
import Login from "./components/user/Login";

function App() {
  return (
    <>

    
      <Routes>
        <Route path="/" element={<><ParticleJs/><Navbar/><Hero/></>}></Route>
        <Route path="/account/login" element={<><ParticleJs/><Navbar/><Login/></>}></Route>

      </Routes>

    </>
  );
}

export default App;
