import { useState } from 'react'
import Counter from './Components/Counter/Counter'
import './App.css'
import Toggle from './Components/Toggle/Toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Counter/>
      </div>
      <div>
        <h2>Toggle</h2>
        <Toggle/>
      </div>
    </>
  )
}

export default App
