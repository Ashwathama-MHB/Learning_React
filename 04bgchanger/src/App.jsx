import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (

    <div className=' w-full h-screen duration-200 flex items-center justify-center' style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("red")} className='bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg cursor-pointer'>Red</button>
        <button onClick={() => setColor("green")} className='bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg cursor-pointer'>Green</button>
        <button onClick={() => setColor("blue")} className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg cursor-pointer'>Blue</button>
       </div>
      </div>
    </div>
  )
}

export default App
