import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { SingleUpload, MultiUpload } from './Upload';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <p>Single upload:  <SingleUpload /></p>
      </div>
      <div>
        <p>Multiple upload: <MultiUpload /></p>
      </div>
    </div>
  )
}

export default App
