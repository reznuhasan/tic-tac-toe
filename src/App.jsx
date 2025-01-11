import { useState } from 'react'
import './App.css'
import Square from './components/Square/Square'

function App() {
  const [values,setValues]=useState([
    {id:0,text:""},
    {id:1,text:""},
    {id:2,text:""},
    {id:3,text:""},
    {id:4,text:""},
    {id:5,text:""},
    {id:6,text:""},
    {id:7,text:""},
    {id:8,text:""},
  ])
  const [checkValue,setCheckValue]=useState("X")
  const handleValues=(valuesId)=>{
    const newValues=values;
    if(checkValue==='X' && newValues[valuesId].text===""){
      newValues[valuesId]={id:valuesId,text:'0'}
      setCheckValue('0')
    }else if(checkValue==='0' && newValues[valuesId].text===""){
      newValues[valuesId]={id:valuesId,text:'X'}
      setCheckValue('X')

    }
    
    setValues(newValues)
    
  }
  return (
    <div className='board-container'>
    {values.map((value,index)=><Square values={value} index={index} handleValues={handleValues} key={index}/>)}
    </div>
  )
}

export default App
