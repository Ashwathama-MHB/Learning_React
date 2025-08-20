import React from 'react'

// function Card(props) { one way of passing props--> props.username
// if record is passed as a variable and it's value is not set, then the default value is taken. in case of VK, no records was passed in app.jsx
function Card({username,records="Anushka Sharma"}) {
    // console.log("props: ",props);
    
  return (
    
    
    
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.indianexpress.com/2019/12/ab-de-villiers-1200.jpg"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Title
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          {records}
        </p>
      </div>
  )
}

export default Card
