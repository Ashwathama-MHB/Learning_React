import { useState } from 'react'
import Chai from './chai'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <> fragments ke andr jo hoga wahi render hoga 
    <>
      <div>
        <h1>Hello guys</h1>
        <Chai/>
       </div>
    </>
  )
}

export default App
