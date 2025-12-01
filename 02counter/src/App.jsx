import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    if (counter < 15) {
      setCounter(counter + 1)
    } else {
      alert("Counter cannot be greater than 15!")
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      alert("Counter cannot be less than 0!")
    }
  }

  return (
    <>
      <h1>Sonu's React Counter Project</h1>
      <p>Counter value: {counter}</p>
      <button onClick={addValue} disabled={counter >= 15}>
        Add Value
      </button>
      <br />
      <button onClick={removeValue} disabled={counter <= 0}>
        Remove Value
      </button>
    </>
  )
}

export default App
