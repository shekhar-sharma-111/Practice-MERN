import React from 'react'
import Context from './Context'
import { useState } from 'react'

function DataProvider({children}) {
    const name ='shekhar'
    const [count, setCount] = useState(123)
  return (
    <div>
        <Context.Provider value={{name, count, setCount}} >
            {children}
        </Context.Provider>
    </div>
  )
}

export default DataProvider