import React, { useState } from 'react'

const Myhook = () => {
    
    let [name,setName]=useState("Saniya");
    function Data()
    {
       setName("Sadiya");
    }
  return (
    <div>
      <h1> {name} </h1>
      <button onClick={Data}>Click</button>
    </div>
  )
}

export default Myhook
