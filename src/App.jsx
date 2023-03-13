import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TaskTracker from './components/TaskTracker'

function App() {

  return (
    <div className="flex w-screen h-screen bg-black">
      <TaskTracker />
    </div>
  )
}

export default App
