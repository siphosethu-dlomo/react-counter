import { useState } from 'react'
import "./App.css"

function App() {
  let [num, setNum] = useState(0)

  const handlePlus = () => {
    setNum(num + 1)
  }

  return (
    <div className='text-8xl'>
      <button onClick={() => setNum(num - 1)}>-</button> 
        <span className='mx-10'>{num}</span> 
      <button onClick={handlePlus}>+</button>
    </div>
  )
}

export default App
