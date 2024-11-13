import { useState } from 'react'
import './App.css'

function App() {
const[bgColor,SetBg]=useState()
const red=()=>{
  SetBg('red')
  console.log(SetBg);
  
}
const blue=()=>{
  SetBg('blue')
}
const yellow=()=>{
  SetBg('yellow')
}
 const green=()=>{
  SetBg('green')
 }
 const black=()=>{
   SetBg('black')
 }
 const brown=()=>{
  SetBg('brown')
}
const blueviolet=()=>{
  SetBg('blueviolet')
}
const handlereset=(e)=>{
  console.log("ok")
  SetBg('white')

}
  return (
    <>
    

    <div  style={{backgroundColor:bgColor}} className='button p-5 '>
        <button style={{borderRadius:'50px',width:'100px',marginLeft:'250px'}}  onClick={black} type='button' className='black  buttons  '>black</button>
        <button style={{borderRadius:'50px',width:'100px',marginLeft:'10px'}}   onClick={red} type='button' className='red buttons '>Red</button>
        <button style={{borderRadius:'50px',width:'100px',marginLeft:'10px'}}  onClick={yellow}  type='button' className='yellow buttons'>Yellow</button>
        <button style={{borderRadius:'50px',width:'100px',marginLeft:'10px'}}  onClick={blue} type='button' className='blue buttons'>blue</button>
        <button style={{borderRadius:'50px',width:'100px',marginLeft:'10px'}}  onClick={green} type='button' className='green buttons'>Green</button>
        <button style={{borderRadius:'50px',width:'100px',marginLeft:'10px'}}  onClick={brown} type='button' className='brown buttons'>brown</button>
        <button style={{borderRadius:'50px',width:'100px',marginLeft:'10px'}}  onClick={blueviolet} type='button' className='blueviolet buttons'> violet</button>
        
        
      <button style={{borderRadius:'50px',width:'100px',marginLeft:'10px'}}  onClick={handlereset} type='button' className='hash buttons' >reset </button>
      
       
    </div>
      

    
    </>
  )
}

export default App