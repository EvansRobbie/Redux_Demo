import React, { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCremSlice'

const IcecreamView = () => {
  const [value, setValue] = useState(1)
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of  iceCream - {numOfIceCream} </h2>
        <button onClick={()=>dispatch(ordered())}>Order iceCream</button>
        <input type="number" value={value} onChange={(e)=> setValue(parseInt(e.target.value))} />
        <button onClick={()=>dispatch(restocked(value))}>Restock iceCream</button>
    </div>
  )
}

export default IcecreamView