import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup"

import './App.css'

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    
    
  )
}

export default App
