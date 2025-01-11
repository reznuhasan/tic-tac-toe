import React from 'react'
import Styles from "./square.module.css"
const Square = ({values,index,handleValues}) => {
  return (
    <button onClick={()=>handleValues(index)}  className={Styles.SquareContainer}>
        {values?.text}
    </button>
  )
}

export default Square
