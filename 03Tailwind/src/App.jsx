import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myobj1={
    name:"AB Devilliers",
    country:"South Africa"
  }
  let myobj2={
    name:"Virat Kohli",
    country:"South Africa"
  }
  return (
    <>
      <h1 className='bg-green-400 p-4 text-white-10 rounded-xl'>Welcome to Tailwind</h1>

      {/* <Card owner1="Harshit" someobj1={myobj1}/> */}
      {/* <Card owner2="Aman" someobj2={myobj2}/> */}

      <Card username="AB Devilliers" records="AB de Villiers holds numerous records in cricket, notably for the fastest 50, 100, and 150 in One Day Internationals (ODIs). He's also recognized for his aggressive and innovative batting style, earning him the nickname Mr. 360"/>
      <Card username="Virat Kohli" />
    </>
  )
}

export default App
