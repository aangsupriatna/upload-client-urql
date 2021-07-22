import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Uploadfile, Uploadfiles } from './Upload';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <p>Single upload:  <Uploadfile /></p>
      </div>
      <div>
        <p>Multiple upload: <Uploadfiles /></p>
      </div>
    </div>
  )
}

export default App
