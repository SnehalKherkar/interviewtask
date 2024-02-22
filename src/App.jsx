import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CheckList from './components/CheckList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CheckList />
    </>
  )
}

export default App
