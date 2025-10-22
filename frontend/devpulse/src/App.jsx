import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup"
import Login from './pages/login';
import Dashboard from './pages/dashboard'
import './App.css'

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path ='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    
    
  )
}

export default App
