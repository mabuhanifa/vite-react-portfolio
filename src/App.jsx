import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2 className='text-gray-700'>
        App
      </h2>
    </div>
  )
}

export default App
