import React from 'react'
import Context from './Component/Context/Context.jsx'
import { useContext } from 'react'
import 'bootstrap'
function GetData() {
    const {name,count,setCount} = useContext(Context)
  return (
    <div>
        <strong>context API example</strong> <br />
        COUNT: {count} <br />
      NAME: {name}<br/>
      <button onClick={()=>{setCount(count-1)}} className='btn btn-success '>decrement</button>
        <button onClick={()=>{setCount(count+1)}} className='btn btn-success'>INCREMENT</button><br/>
        </div>
  )
}

export default GetData