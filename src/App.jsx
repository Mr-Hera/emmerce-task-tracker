import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { TaskTracker, Overview, SignUp, Login } from './pages'
import { About } from './pages'
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
    console.log(user);
  }

  const handleLogout = () => {
    setUser(null);
    // console.log();
  }

  return <>
    <div className="flex w-screen h-screen bg-black">
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={ <Overview /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/register" element={ <SignUp /> } />
        <Route path="/login" element={ <Login onLogin={handleLogin} /> } />
        <Route path="/tasks" element={ <TaskTracker /> } />
      </Routes>
    </div>
  </>
}

export default App
