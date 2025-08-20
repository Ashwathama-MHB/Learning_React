import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// UI and state change ko sync krta hai react
// ui me har jagah react krta hai isliye react bolte
function App() {
  let [count, setCount] = useState(0)
  function addvalue() {
    //  setCount(count+1);
     // if we want to increase value by 4 but one by one
    //  setCount(count+1);
    //  setCount(count+1);
    //  setCount(count+1);
    //  setCount(count+1);
    // this won't increase the value by 4
    setCount((prevcount)=>(prevcount+1))
    setCount((prevcount)=>(prevcount+1))
    setCount((prevcount)=>(prevcount+1))
    setCount((prevcount)=>(prevcount+1))
    // this will do it.
  }
  const subvalue=()=> {
     if(count==0)return
     setCount(count-1);
  }
  return (
    <>
      <h1>Counter value: {count}</h1>
      <button onClick={addvalue}>Increment</button>
      <br />
      <button onClick={subvalue}>Decrement</button>
    </>
  )
}

export default App
