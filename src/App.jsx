import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Increment from './components/Increment';
import Decrement from './components/Decrement';
import Inputdata from './components/Inputdata';
function App() {
  const [inc,setinc]= useState(0);
  const [dec,setdec]= useState(90);
  const [myname,setname]= useState();
  const [display,setdisplay]=useState([]);
  const addition = useCallback(()=>{
    setinc(inc+1);
  },[inc])
  
const minus = useCallback(()=>{
  setdec(dec-1);
},[dec])
//  function minus(){
//   setdec(dec-1);
//  }

useEffect(()=>{document.title=inc},[inc])
  
function collect(event){
  setname(event.target.value);
 
}

   const dataset = useCallback(()=>{
    setdisplay(()=>[...display,myname]);
   },[myname])
  
  return (
    <>
    <button onClick={addition}>INCREMENT</button>
    <Increment increment={inc}/>
    <button onClick={minus}>DECREMENT</button>
    <Decrement decrement = {dec}/>
    <input type='text' name='name' value={myname} onChange={collect}></input>
    <Inputdata data = {display} dataset={dataset}/>
    </>
  )
}

export default App
