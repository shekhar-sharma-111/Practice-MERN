import React from 'react'
import GetData from '../../GetData'
import User from '../../Component/UseReducer/User'
import Counter from '../../Component/Zustand'

function Services() {

  
  return (
   <> <div>Services
      <GetData/>
      <br />
      <hr />
      use reducer  testing 
      <User/>
    
    </div>
    <br /><hr />
    <div>
        <h1>wustsand practice</h1>
        <Counter/>
    </div>
    </>
  )
}

export default Services