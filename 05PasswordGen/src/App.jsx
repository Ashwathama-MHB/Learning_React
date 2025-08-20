import { use, useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password , setPassword] = useState("abcde1234")

  const passwordGenerator = useCallback(() => {

    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const nums= '0123456789'
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?'
    if(number) {
      alpha += nums
    }
    if(characters) {
      alpha += specialChars
    }
    let pass="";
    for (let i = 0; i <= length; i++) {
      const ind= Math.floor(Math.random() * alpha.length)
      pass += alpha[ind]
    }
    setPassword(pass)
  }, [length, number, characters])

  // useEffect(() => {
  //   passwordGenerator()
  // }, [length,number,characters,passwordGenerator])

  return (
    <div className="bg-blue-100 full h-screen flex items-center justify-center">
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            // ref={passwordRef}
        />
        <button
        // onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
         onClick={() => passwordGenerator()}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={characters}
              id="characterInput"
              onChange={() => {
                  setCharacters((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
    </div>
  )
}

export default App
