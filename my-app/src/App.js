import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { useState } from 'react'
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import AuthDetails from './components/AuthDetails';
import DashBoard from './components/dashboard/DashBoard';
function App() {

  return (
   <>
  <Router>
    <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<Signin/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
    </Routes>
  </Router>
   </>
  );
}

export default App;


