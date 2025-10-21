import React, { useState } from'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login=()=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();


    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("login form successfully working");
        console.log({email,password});

    }

    return(
       
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          className="w-full p-2 mb-3 border rounded-md"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 mb-3 border rounded-md"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700" type="submit">
          Login
        </button>
        <p className="text-center mt-4">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/")}>
            Signup
          </span>
        </p>
      </form>
    </div>
    )    
}

export default Login;