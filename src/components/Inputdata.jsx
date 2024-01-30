import React from 'react'
import { memo } from 'react';
function Inputdata({data,dataset}) {
    console.log("input field is render");
  return (
    <>
    
    {data.map((item)=>(<h1>{item}</h1>))}
    
   <button onClick={dataset}>SUBMIT</button>
    </>
  )
}

export default memo(Inputdata)