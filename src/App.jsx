import { useState, useEffect } from 'react'
import Counter from './Components/Counter/Counter'
import './App.css'
import Toggle from './Components/Toggle/Toggle'

function App() {
  const [count, setCount] = useState(0)

  function Welcome() {
    console.log('Velkommen til appen!')
  }

  useEffect(() => {
    Welcome()
  }, [])

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
