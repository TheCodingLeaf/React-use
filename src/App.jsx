import { useState } from 'react'
import Counter from './Components/Counter/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Counter />
      </div>
    </>
  )
}

export default App
