import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { TaskTracker, Overview, SignUp, Login } from './pages'
import { About } from './pages'

function App() {

  return <>
    <div className="flex w-screen h-screen bg-black">
      <Routes>
        <Route path="/" element={ <Overview /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/register" element={ <SignUp /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/tasks" element={ <TaskTracker /> } />
      </Routes>
    </div>
  </>
}

export default App
