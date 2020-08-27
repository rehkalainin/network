import React, { useState } from 'react'

const IncrementerFunc = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter((couter) => couter + 1)
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCounter((counter) => counter - 1)
        }}
      >
        dicrement
      </button>
    </div>
  )
}
export default IncrementerFunc
