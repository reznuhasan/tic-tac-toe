import { useState } from 'react'
import './App.css'
import Square from './components/Square/Square'

const checkText = (newValues, text) => {
  const arr = newValues.filter(value => value.text === text);
  const arrId = arr.map((value) => value.id)
  return arrId;
}
const checkWinner = (newArray) => {
  if ([0, 1, 2].every(id => newArray.includes(id))) {
    return true;
  } else if ([0, 3, 6].every(id => newArray.includes(id))) {
    return true;
  } else if ([0, 4, 8].every(id => newArray.includes(id))) {
    return true;
  } else if ([3, 4, 5].every(id => newArray.includes(id))) {
    return true;
  } else if ([6, 7, 8].every(id => newArray.includes(id))) {
    return true;
  } else if ([1, 4, 7].every(id => newArray.includes(id))) {
    return true;
  } else if ([2, 5, 8].every(id => newArray.includes(id))) {
    return true;
  } else if ([2, 4, 6].every(id => newArray.includes(id))) {
    return true;
  } else {
    return false;
  }
}
function App() {
  const [values, setValues] = useState([
    { id: 0, text: "" },
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
    { id: 7, text: "" },
    { id: 8, text: "" },
  ])
  const [checkValue, setCheckValue] = useState("X")
  const [winner, setWinner] = useState("")
  const handleValues = (valuesId) => {
    const newValues = values;
    if (checkValue === 'X' && newValues[valuesId].text === "" && winner==="") {
      newValues[valuesId] = { id: valuesId, text: '0' }
      setCheckValue('0')
    } else if (checkValue === '0' && newValues[valuesId].text === "" && winner==="") {
      newValues[valuesId] = { id: valuesId, text: 'X' }
      setCheckValue('X')

    }
    const xArray = checkText(newValues, "X");
    const zeroArray = checkText(newValues, '0');
    const xWinner = checkWinner(xArray);
    const zeroWinner = checkWinner(zeroArray);
    if (winner === "") {
      setValues(newValues)
    }
    if (xWinner) {
      setWinner("Second")
    } else if (zeroWinner) {
      setWinner("First")
    }
  }
  return (
    <>
      <div style={{textAlign:"center"}}>
        <h1>Tic Tac Toe Game</h1>
        <span>click under box</span>
      </div>
      <div className='board-container'>
        {values.map((value, index) => <Square values={value} index={index} handleValues={handleValues} key={index} />)}
      </div>
      <div style={{textAlign:"center"}}>
        {
          winner && <h1>Winner is {winner} player</h1>
          
        }
      </div>
    </>
  )
}

export default App
