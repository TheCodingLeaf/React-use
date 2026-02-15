import { useState, useEffect } from 'react'
import Counter from './Components/Counter/Counter'
import './App.css'
import Toggle from './Components/Toggle/Toggle'
import Links from './Components/Links/Links'

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

      <div>
        <h2>Links</h2>
        <Links/>
      </div>
    </>
  )
}

export default App
