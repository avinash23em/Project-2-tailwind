import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Sidebar } from './components/sidebar'
import { Sidebar1 } from './components/sidebar1'
import { Toggle } from './components/toggle'
import { Home } from './components/home'

function App() {
  const [open,setopen] = useState(true);

  return (
     <div className='h-screen flex'>
       <Sidebar open={open} setopen={setopen} /> 
      {/* <Sidebar1/> */}
      <Home />
      </div>
    
  )
}

export default App
